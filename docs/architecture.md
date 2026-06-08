# Camfomedics events A — Architectural Summary

**Stack:** Next.js + Angular + PHP + MySQL on alfahosting  
**Version:** 1.0 | June 2026 | Clement Nkamanyi

---

## 1. Overview

Camfomedics events A is a full-stack web application deployed under a single domain on alfahosting shared hosting. It combines a Next.js public frontend, an Angular admin panel, and a PHP REST API backend, all sharing a single MySQL database.

The architecture is designed for simplicity and cost-efficiency: all components are static-export or server-rendered PHP, requiring no Node.js runtime in production. Deployment is a straightforward file upload to alfahosting.

---

## 2. Production Architecture

### 2.1 URL Structure

All components are served under one domain, routed by Apache on alfahosting.

**Production:**

| URL Path | Component |
|---|---|
| `events.camfomedics.com/` | Next.js public app (static export) |
| `events.camfomedics.com/admin` | Angular admin app (static build) |
| `events.camfomedics.com/api` | PHP REST API backend |

**Staging:**

| URL Path | Component |
|---|---|
| `devevents.camfomedics.com/` | Next.js public app |
| `devevents.camfomedics.com/admin` | Angular admin app |
| `devevents.camfomedics.com/api` | PHP REST API backend |

### 2.2 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Public Frontend | Next.js (static export) | Public-facing website. SSG pages, SEO optimized, served as static HTML/CSS/JS |
| Admin Frontend | Angular | Internal admin panel. Full SPA for CRUD operations, data management, reporting |
| API Backend | PHP 8.3 | REST API consumed by both frontends. Handles business logic, auth, database access |
| Database | MySQL 8 | Single database shared by both frontends via PHP API. Never accessed directly from frontend |
| Web Server | Apache 2.4 | Serves all components. Handles routing, CORS headers, .htaccess rewrites |
| Hosting | alfahosting (Plesk) | Shared hosting. No Node.js runtime needed in production |

### 2.3 Production Folder Structure on alfahosting

```
events.camfomedics.com/
├── index.html              Next.js build output (public app entry)
├── _next/                  Next.js static assets
├── admin/                  Angular build output
│   ├── index.html          Admin app entry
│   └── assets/
└── api/                    PHP backend
    ├── index.php           API entry point
    ├── .htaccess           URL routing for API
    └── src/                PHP classes and business logic
```

> `vendor/` (Composer dependencies) and `.env` (secrets) are never deployed to production.

### 2.4 Apache Routing (.htaccess)

Apache routes requests to the correct component based on URL path:

```apache
RewriteEngine On

# Route /api requests to PHP
RewriteRule ^api/(.*)$ api/index.php?path=$1 [QSA,L]

# Route /admin to Angular app
RewriteRule ^admin/?$ admin/index.html [L]
RewriteRule ^admin/(.*)$ admin/$1 [L]

# All other routes to Next.js
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]
```

---

## 3. Data Flow

### 3.1 Public User Flow

1. User visits `events.camfomedics.com`
2. Apache serves Next.js static HTML
3. Browser loads JavaScript, app initializes
4. App calls `/api/*` endpoints for dynamic data
5. PHP processes request, queries MySQL, returns JSON
6. Next.js renders response in browser

### 3.2 Admin User Flow

1. Admin visits `events.camfomedics.com/admin`
2. Apache serves Angular `index.html`
3. Angular SPA initializes, handles own routing
4. Admin performs CRUD operations via calls to `/api/*`
5. PHP validates auth token, processes request, updates MySQL
6. Angular reflects changes in UI

### 3.3 API Design Principles

- **Single PHP backend:** one API serves both frontends — no duplication
- **JWT authentication:** stateless tokens, same auth for public and admin
- **Role-based access:** admin endpoints require admin role in JWT
- **CORS:** Apache adds CORS headers for local dev; same-origin in production
- **JSON only:** all API responses are JSON, no server-side HTML rendering

---

## 4. Local Development Environment

### 4.1 Dev Container Setup

Local development uses the Clenkasoft `devcontainer-php-apache` image. Since Node.js is already included in the base image, all three components (Next.js, Angular, PHP) run inside one container.

| Service | Local URL |
|---|---|
| PHP API (Apache) | `http://localhost:80/api` |
| Next.js public app (dev server) | `http://localhost:3000` |
| Angular admin app (ng serve) | `http://localhost:4200` |
| MySQL | `localhost:3306` |

> In development, Next.js and Angular run on their own ports via hot-reload dev servers. CORS headers on Apache allow cross-origin API calls from these ports. In production, all components are on the same origin so CORS is not needed.

### 4.2 Local Project Structure

```
/workspace/
├── events.camfomedics.com/    Web root (Apache serves from here)
│   └── api/                    PHP backend files
├── frontend-public/            Next.js application
│   ├── src/
│   ├── public/
│   └── next.config.js
├── frontend-admin/             Angular application
│   ├── src/
│   └── angular.json
├── .devcontainer/
│   ├── devcontainer.json
│   ├── docker-compose.yml
│   └── .env                    Local secrets — never committed
├── composer.json               PHP dependencies
├── .env                        App secrets — never committed
└── .gitignore
```

### 4.3 Dev Container Configuration

| Setting | Value |
|---|---|
| Base image | `ghcr.io/clenkasoftdev/devcontainer-php-apache:latest` |
| PHP | 8.3 with Xdebug on port 9003 |
| Node.js | LTS (v24+) for Next.js and Angular CLI |
| WEB_ROOT | `events.camfomedics.com` |
| Forwarded ports | 80 (Apache), 3000 (Next.js), 4200 (Angular), 3306 (MySQL) |
| postCreateCommand | Install Composer deps, npm deps, Angular CLI, Next.js deps |

---

## 5. Deployment Process

No direct deployment from local machine to production. All deployments go through GitHub Actions pipelines triggered by git push or pull request merge.

### 5.1 Environments

| Environment | URL | Trigger |
|---|---|---|
| Staging | `devevents.camfomedics.com` | Push to `develop` branch |
| Production | `events.camfomedics.com` | Push to `main` branch (or manual approval) |

### 5.2 Pipeline Overview

```
Developer pushes to develop
        │
        ▼
GitHub Actions triggered
        │
        ├── Build Next.js (next build)
        ├── Build Angular (ng build --base-href /admin/)
        └── No PHP build needed (PHP files deployed as-is)
        │
        ▼
FTP deploy to devevents.camfomedics.com (staging)
        │
        ▼
Manual review and testing on staging
        │
        ▼
Merge develop → main
        │
        ▼
FTP deploy to events.camfomedics.com (production)
```

### 5.3 GitHub Actions Workflow Structure

Two workflow files:

**`.github/workflows/deploy-staging.yml`** — triggers on push to `develop`:
```yaml
on:
  push:
    branches: [develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Build Next.js
        run: |
          cd frontend-public
          npm ci
          npm run build

      - name: Build Angular
        run: |
          cd frontend-admin
          npm ci
          ng build --base-href /admin/

      - name: Assemble deployment folder
        run: |
          mkdir -p deploy
          cp -r frontend-public/out/. deploy/
          cp -r frontend-admin/dist/frontend-admin/. deploy/admin/
          cp -r api/. deploy/api/

      - name: Deploy to staging via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: deploy/
          server-dir: devevents.camfomedics.com/
```

**`.github/workflows/deploy-production.yml`** — triggers on push to `main`:
```yaml
on:
  push:
    branches: [main]
```
Same steps — only `server-dir` changes to `events.camfomedics.com/`.

### 5.4 Required GitHub Secrets

Set these in the repository Settings → Secrets and variables → Actions:

| Secret | Description |
|---|---|
| `FTP_SERVER` | alfahosting FTP server address |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |

> These secrets are never stored in code. GitHub Actions injects them at runtime.

### 5.5 Branch Strategy

```
main        ← production deployments only
develop     ← staging deployments, integration branch
feature/*   ← individual feature branches, merged to develop via PR
```

### 5.6 What Gets Deployed vs Not

| Deployed | Not Deployed |
|---|---|
| Next.js build output (HTML/CSS/JS) | `.env` files (secrets) |
| Angular build output (HTML/CSS/JS) | `frontend-public/src/` (source code) |
| PHP files in `api/` | `frontend-admin/src/` (source code) |
| `.htaccess` routing rules | `vendor/` (Composer dependencies) |
| | `.devcontainer/` (dev tooling) |

---

## 6. Security Considerations

### 6.1 API Security

- **JWT tokens:** all API requests authenticated via Authorization header
- **Role separation:** public vs admin endpoints enforced server-side in PHP
- **Input validation:** all inputs validated and sanitized before MySQL queries
- **Prepared statements:** all MySQL queries use PDO prepared statements — no raw SQL
- **HTTPS:** alfahosting provides SSL — enforce HTTPS in `.htaccess`

### 6.2 File Security

- `.env` files are never committed to git and never deployed to server
- PHP source is not web-accessible — only `api/` folder is served by Apache
- Database credentials are in `.env` only, loaded by PHP at runtime

### 6.3 CORS Policy

In production, Next.js and Angular are served from the same origin as the API (`events.camfomedics.com`). No CORS configuration needed. In local development, Apache adds CORS headers for `localhost:3000` and `localhost:4200` only.

---

## 7. Future Considerations

- **API versioning:** prefix all API routes with `/api/v1/` from the start to allow breaking changes later
- **Caching:** consider Redis for session storage and API response caching as traffic grows
- **CDN:** Next.js static assets benefit significantly from a CDN layer (Cloudflare free tier)
- **Migration path:** if alfahosting becomes a bottleneck, Next.js and Angular can move to Azure Static Web Apps with zero code changes — same static build output
- **API growth:** if PHP API grows complex, consider splitting into Azure Functions — frontends only need to update their API base URL
