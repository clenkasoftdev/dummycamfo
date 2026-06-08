# PHP Backend Instructions

## Overview

Vanilla PHP 8.3 REST API. No framework. Clean, secure, maintainable code.
All API files live in `events.camfomedics.com/api/`.

---

## Folder Structure

```
api/
├── index.php               Entry point — all requests routed here
├── .htaccess               URL routing
└── src/
    ├── Controllers/        Handle HTTP requests and responses
    ├── Models/             Database interaction (PDO)
    ├── Middleware/         Auth, CORS, validation
    └── Services/           Business logic (no HTTP, no DB — pure logic)
```

### Responsibilities

| Layer | Does | Does NOT |
|---|---|---|
| Controller | Receives request, calls Service, returns response | Business logic, DB queries |
| Service | Business logic, orchestration | HTTP concerns, direct DB access |
| Model | DB queries via PDO | Business logic, HTTP concerns |
| Middleware | Auth, CORS, input validation | Business logic |

---

## Routing

Vanilla PHP routing via `index.php`. No framework router.

```php
// index.php
$path = trim($_SERVER['PATH_INFO'] ?? '/', '/');
$method = $_SERVER['REQUEST_METHOD'];

match(true) {
    $method === 'GET'  && $path === 'health'           => (new HealthController())->index(),
    $method === 'POST' && $path === 'auth/login'       => (new AuthController())->login(),
    $method === 'GET'  && $path === 'admin/dashboard'  => (new DashboardController())->index(),
    default => Response::notFound()
};
```

---

## Namespaces & Autoloading

PSR-4 autoloading via Composer. All classes use the `App\` namespace.

```php
namespace App\Controllers;
namespace App\Models;
namespace App\Services;
namespace App\Middleware;
```

File naming matches class naming exactly:
```
App\Controllers\AuthController  →  src/Controllers/AuthController.php
App\Models\User                 →  src/Models/User.php
App\Services\AuthService        →  src/Services/AuthService.php
```

---

## Response Format

All responses use a standard JSON envelope. Never return raw data.

```php
// Success
{
    "success": true,
    "data": { ... },
    "error": null
}

// Error
{
    "success": false,
    "data": null,
    "error": "Human readable message"
}
```

HTTP status codes must match:
- `200` — success
- `201` — created
- `400` — bad request (validation failed)
- `401` — unauthenticated
- `403` — forbidden (authenticated but not authorized)
- `404` — not found
- `500` — server error

**Response helper class:**
```php
class Response {
    public static function success(mixed $data, int $status = 200): never {
        http_response_code($status);
        echo json_encode(['success' => true, 'data' => $data, 'error' => null]);
        exit();
    }

    public static function error(string $message, int $status): never {
        http_response_code($status);
        echo json_encode(['success' => false, 'data' => null, 'error' => $message]);
        exit();
    }

    public static function notFound(): never {
        self::error('Not found', 404);
    }

    public static function unauthorized(): never {
        self::error('Unauthorized', 401);
    }
}
```

---

## Error Handling

### Production vs Development

Never leak internal errors to the client in production.

```php
// bootstrap.php
if ($_ENV['APP_ENV'] === 'production') {
    // Log error, return generic message
    set_exception_handler(function(Throwable $e) {
        error_log($e->getMessage());
        Response::error('An internal error occurred', 500);
    });
} else {
    // Development — show full error
    set_exception_handler(function(Throwable $e) {
        Response::error($e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine(), 500);
    });
}
```

### Rules
- Never expose stack traces in production
- Never expose database errors in production
- Always log errors server-side
- Use generic messages for 500 errors in production
- Validation errors (400) may describe what failed — they are not security leaks

---

## Database — PDO

Always use PDO with prepared statements. Never concatenate user input into SQL.

```php
// Model base class pattern
class Database {
    private static ?PDO $instance = null;

    public static function connect(): PDO {
        if (self::$instance === null) {
            $dsn = sprintf(
                'mysql:host=%s;dbname=%s;charset=utf8mb4',
                $_ENV['DB_HOST'],
                $_ENV['DB_DATABASE']
            );
            self::$instance = new PDO($dsn, $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
        }
        return self::$instance;
    }
}

// Usage in Model — always prepared statements
class UserModel {
    public function findByEmail(string $email): ?array {
        $stmt = Database::connect()->prepare(
            'SELECT * FROM users WHERE email = ? LIMIT 1'
        );
        $stmt->execute([$email]);
        return $stmt->fetch() ?: null;
    }
}
```

### Rules
- NEVER concatenate user input into SQL queries
- Always use `?` placeholders or named `:param` placeholders
- Always set `PDO::ERRMODE_EXCEPTION`
- Always use `utf8mb4` charset
- Use `PDO::FETCH_ASSOC` — never `FETCH_OBJ` (inconsistent)

---

## Authentication — JWT (firebase/php-jwt)

Install: `composer require firebase/php-jwt`

```php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthService {
    private string $secret;
    private int $ttl = 3600; // 1 hour

    public function __construct() {
        $this->secret = $_ENV['JWT_SECRET'];
    }

    public function generateToken(array $user): string {
        $payload = [
            'iss' => 'camfomedics-events',
            'iat' => time(),
            'exp' => time() + $this->ttl,
            'sub' => $user['id'],
            'email' => $user['email'],
            'role' => $user['role'],
        ];
        return JWT::encode($payload, $this->secret, 'HS256');
    }

    public function verifyToken(string $token): object {
        return JWT::decode($token, new Key($this->secret, 'HS256'));
    }
}
```

### JWT Rules
- Secret stored in `.env` only — never hardcoded
- Always include `exp` (expiry) in payload
- Token TTL: 1 hour for admin, 24 hours for public
- Use `HS256` algorithm
- Never store sensitive data in JWT payload — it is base64 encoded not encrypted

---

## Password Hashing

```php
// Hash on registration/seed
$hash = password_hash($plainPassword, PASSWORD_BCRYPT);

// Verify on login
if (!password_verify($plainPassword, $storedHash)) {
    Response::error('Invalid credentials', 401);
}
```

### Rules
- Always use `PASSWORD_BCRYPT`
- Never store plain text passwords
- Never log passwords
- Use `password_verify()` — never compare hashes directly with `===`

---

## CORS

Handle CORS in middleware before any other processing.

```php
class CorsMiddleware {
    public static function handle(): void {
        $allowedOrigins = explode(',', $_ENV['ALLOWED_ORIGINS']);
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

        if (in_array($origin, $allowedOrigins)) {
            header('Access-Control-Allow-Origin: ' . $origin);
        }

        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Max-Age: 86400');

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }
}
```

`.env` values:
```
# Development
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:4200

# Production
ALLOWED_ORIGINS=https://events.camfomedics.com,https://devevents.camfomedics.com
```

### Rules
- Never use `Access-Control-Allow-Origin: *` in production
- Always handle `OPTIONS` preflight requests
- Origin whitelist in `.env` — never hardcoded

---

## Auth Middleware

Protect admin routes by verifying JWT before controller runs.

```php
class AuthMiddleware {
    public static function requireAuth(): object {
        $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

        if (!str_starts_with($header, 'Bearer ')) {
            Response::unauthorized();
        }

        $token = substr($header, 7);

        try {
            $decoded = (new AuthService())->verifyToken($token);
            return $decoded;
        } catch (\Exception $e) {
            Response::unauthorized();
        }
    }

    public static function requireAdmin(): object {
        $decoded = self::requireAuth();
        if ($decoded->role !== 'admin') {
            Response::error('Forbidden', 403);
        }
        return $decoded;
    }
}
```

---

## Input Validation

Validate and sanitize all input before use. Never trust client data.

```php
// Read and validate JSON body
$body = json_decode(file_get_contents('php://input'), true);

if (!isset($body['email']) || !filter_var($body['email'], FILTER_VALIDATE_EMAIL)) {
    Response::error('Valid email required', 400);
}

if (!isset($body['password']) || strlen($body['password']) < 8) {
    Response::error('Password must be at least 8 characters', 400);
}
```

### Rules
- Always validate type, format, and length
- Use `filter_var()` for email, URL, int validation
- Return `400` with descriptive message for validation failures
- Strip HTML from string inputs with `strip_tags()`
- Never use `$_GET` or `$_POST` directly in DB queries

---

## Environment Variables

All configuration via `.env`. Never hardcode credentials.

```
APP_ENV=development         # development | production
APP_URL=http://localhost

DB_HOST=mysql
DB_DATABASE=camfomedics_events
DB_USERNAME=app
DB_PASSWORD=secret

JWT_SECRET=change_this_to_a_long_random_string_min_32_chars

ALLOWED_ORIGINS=http://localhost:3000,http://localhost:4200
```

Load with a simple `.env` parser — or `vlucas/phpdotenv` via Composer.

---

## Security Rules Summary

- No raw SQL — always prepared statements
- No plain passwords — always `PASSWORD_BCRYPT`
- No `*` CORS in production — whitelist only
- No stack traces in production — generic 500 messages
- No credentials in code — always `.env`
- No sensitive data in JWT payload — it is not encrypted
- No direct `$_GET`/`$_POST` in queries — always validated first
- Always set `Content-Type: application/json` header
- Always use HTTPS in production — enforce in `.htaccess`
