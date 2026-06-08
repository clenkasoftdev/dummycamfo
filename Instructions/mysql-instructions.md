# MySQL Database Instructions

## Overview

MySQL 8 via PDO in PHP. All database access goes through Model classes.
Never access the database directly from Controllers or Services.

---

## Naming Conventions

| Object | Convention | Example |
|---|---|---|
| Database | snake_case | `camfomedics_events` |
| Tables | snake_case, plural | `users`, `events`, `registrations` |
| Columns | snake_case | `first_name`, `created_at` |
| Primary keys | `id` | `id` |
| Foreign keys | `<table_singular>_id` | `user_id`, `event_id` |
| Indexes | `idx_<table>_<column>` | `idx_users_email` |
| Timestamps | `created_at`, `updated_at` | always present |

---

## Standard Table Structure

Every table must have these columns:

```sql
CREATE TABLE table_name (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    -- your columns here --
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## Character Set

Always use `utf8mb4` with `utf8mb4_unicode_ci` collation.
Supports full Unicode including emojis.

```sql
CREATE TABLE table_name (
    -- columns --
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

Set at database level too:
```sql
CREATE DATABASE camfomedics_events
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
```

---

## MVP Schema

### users table

```sql
CREATE TABLE users (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    first_name  VARCHAR(100) NOT NULL,
    last_name   VARCHAR(100) NOT NULL,
    role        ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    is_active   TINYINT(1) NOT NULL DEFAULT 1,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_users_email (email),
    INDEX idx_users_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

## Migration Strategy

No migration framework — use plain SQL files.

```
events.camfomedics.com/api/
└── database/
    ├── migrations/
    │   ├── 001_create_users.sql
    │   ├── 002_create_events.sql
    │   └── 003_add_registrations.sql
    └── seeds/
        └── 001_seed_admin_user.sql
```

### Rules
- One file per migration
- Numbered sequentially — never reorder
- Never edit a committed migration — add a new one
- Always test migrations on dev before staging

---

## Seed Data

```sql
-- seeds/001_seed_admin_user.sql
-- Password: Admin@1234 (change immediately in production)
INSERT INTO users (email, password, first_name, last_name, role)
VALUES (
    'admin@camfomedics.com',
    '$2y$10$...bcrypt_hash_here...',
    'Admin',
    'User',
    'admin'
);
```

Generate the bcrypt hash in PHP:
```php
echo password_hash('Admin@1234', PASSWORD_BCRYPT);
```

---

## Query Patterns

### Always use prepared statements

```php
// SELECT one
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ? LIMIT 1');
$stmt->execute([$id]);
$user = $stmt->fetch();

// SELECT many
$stmt = $pdo->prepare('SELECT * FROM events WHERE is_active = ? ORDER BY date ASC');
$stmt->execute([1]);
$events = $stmt->fetchAll();

// INSERT
$stmt = $pdo->prepare(
    'INSERT INTO users (email, password, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)'
);
$stmt->execute([$email, $hash, $firstName, $lastName, $role]);
$newId = $pdo->lastInsertId();

// UPDATE
$stmt = $pdo->prepare('UPDATE users SET first_name = ?, updated_at = NOW() WHERE id = ?');
$stmt->execute([$firstName, $id]);

// DELETE (soft delete preferred)
$stmt = $pdo->prepare('UPDATE users SET is_active = 0 WHERE id = ?');
$stmt->execute([$id]);
```

---

## Soft Delete

Prefer soft delete over hard delete — set `is_active = 0` instead of `DELETE`.
Always filter by `is_active = 1` in queries unless intentionally showing inactive records.

```php
// Soft delete
$stmt = $pdo->prepare('UPDATE users SET is_active = 0 WHERE id = ?');

// Always filter active records
$stmt = $pdo->prepare('SELECT * FROM users WHERE is_active = 1');
```

---

## Indexes

Add indexes on columns used in:
- `WHERE` clauses
- `JOIN` conditions
- `ORDER BY` columns
- Foreign keys

```sql
-- Add index
ALTER TABLE events ADD INDEX idx_events_date (date);
ALTER TABLE registrations ADD INDEX idx_registrations_user_id (user_id);
```

---

## Transactions

Use transactions for operations that must succeed or fail together.

```php
$pdo = Database::connect();
try {
    $pdo->beginTransaction();
    // multiple queries here
    $pdo->commit();
} catch (\Exception $e) {
    $pdo->rollBack();
    throw $e;
}
```

---

## Security Rules

- Never concatenate user input into SQL — always prepared statements
- Never expose database errors to the client in production
- Always use `utf8mb4` — prevents encoding-based attacks
- Passwords stored as bcrypt hash only — never plain text
- Use `is_active` soft delete — preserve audit trail
- Never `SELECT *` in production code — always name columns explicitly
- Foreign key constraints must be defined for relational integrity
