# Angular Admin Instructions

## Overview

Angular 21 SPA for the admin panel. Deployed as static build to
`events.camfomedics.com/admin/`. Communicates with PHP API via JWT authentication.

> **Aligned to Angular 21.2.4 — Updated June 2026**
> Angular 21 is the recommended stable version for new projects in 2026.
> It includes signals, zoneless, and standalone components — all production-stable
> with wide industry adoption and strong community support.

---

## Why Angular 21 (not 22)

Angular 22 released June 3, 2026 — too new for production use:
- Minimal Stack Overflow answers
- Signal Forms just became stable — limited real-world examples
- `@Service` decorator — almost no documentation yet
- Library ecosystem compatibility unconfirmed

Angular 21 gives you all modern patterns with full community support.

---

## Build Configuration

```bash
# Always build with base-href for /admin path
ng build --base-href /admin/

# Output: dist/frontend-admin/browser/
# Deploy: copy to events.camfomedics.com/admin/
```

---

## Folder Structure

```
frontend-admin/
├── src/
│   ├── app/
│   │   ├── core/                   Singleton services, guards, interceptors
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── api.service.ts
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   └── interceptors/
│   │   │       └── auth.interceptor.ts
│   │   ├── shared/                 Reusable components, pipes, directives
│   │   │   └── components/
│   │   ├── features/               Feature components (lazy loaded)
│   │   │   ├── auth/
│   │   │   │   └── login/
│   │   │   └── dashboard/
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── styles.scss
├── angular.json
└── package.json
```

---

## Environment Configuration

```typescript
// environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:80/api'
};

// environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://events.camfomedics.com/api'
};
```

---

## Signals — Primary State Pattern

Signals are fully stable in Angular 21. Use them for all local component state.
Prefer signals over RxJS for state management. Keep RxJS for HTTP and streams.

```typescript
import { signal, computed, effect } from '@angular/core';

// Mutable state
const isLoading = signal(false);
const items = signal<string[]>([]);

// Derived state
const hasItems = computed(() => items().length > 0);

// Side effects
effect(() => console.log('Loading:', isLoading()));

// Update
isLoading.set(true);
items.update(current => [...current, 'new item']);
```

---

## API Service

All HTTP calls through `ApiService`. Never use `HttpClient` directly in components.
Use `inject()` function for dependency injection — not constructor injection.

```typescript
// core/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  get<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`);
  }

  post<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, body);
  }

  put<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.baseUrl}/${endpoint}`);
  }
}
```

---

## Authentication Service

```typescript
// core/services/auth.service.ts
import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'admin_token';
  private router = inject(Router);
  private api = inject(ApiService);

  // Signal for reactive auth state
  isLoggedIn = signal(!!localStorage.getItem(this.tokenKey));

  login(email: string, password: string) {
    return this.api.post<{ token: string }>('auth/login', { email, password })
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            localStorage.setItem(this.tokenKey, response.data.token);
            this.isLoggedIn.set(true);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
```

---

## Auth Interceptor

Automatically attaches JWT to all outgoing API requests.

```typescript
// core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();

  if (token) {
    return next(req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    }));
  }

  return next(req);
};
```

---

## Auth Guard

```typescript
// core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.createUrlTree(['/login']);
};
```

---

## Routing

All feature components lazy loaded. Standalone components only — no NgModules.

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
```

---

## Forms

Use Reactive Forms — mature, well-documented, widely supported in Angular 21.
Signal Forms arrived in Angular 22 — do not use yet.

```typescript
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  ...
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      // call auth service
    }
  }
}
```

---

## Component Pattern

Standalone, OnPush, signals for state, `inject()` for DI:

```typescript
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isLoading()) {
      <p>Loading...</p>
    } @else if (error()) {
      <p>Error: {{ error() }}</p>
    } @else {
      <!-- content -->
    }
  `
})
export class DashboardComponent {
  private api = inject(ApiService);
  private destroyRef = inject(DestroyRef);

  isLoading = signal(true);
  error = signal<string | null>(null);
  data = signal<DashboardData | null>(null);

  constructor() {
    this.api.get<DashboardData>('admin/dashboard')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: response => {
          if (response.success) this.data.set(response.data);
          else this.error.set(response.error);
          this.isLoading.set(false);
        },
        error: () => {
          this.error.set('Network error');
          this.isLoading.set(false);
        }
      });
  }
}
```

---

## Template Syntax

Use Angular 21 control flow syntax — not structural directives:

```html
<!-- NEW — use this -->
@if (isLoggedIn()) { <app-dashboard /> }
@else { <app-login /> }

@for (item of items(); track item.id) {
  <app-item [item]="item" />
}

<!-- OLD — do not use -->
<div *ngIf="isLoggedIn">...</div>
<div *ngFor="let item of items">...</div>
```

---

## TypeScript Rules

- Strict mode always
- Never use `any`
- Define interfaces for all API responses
- `readonly` for properties that should not change

---

## Testing

Use Vitest (Angular 21 default — replaces Karma):

```typescript
import { describe, it, expect } from 'vitest';
```

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `LoginComponent` |
| Services | PascalCase + Service | `AuthService` |
| Guards | camelCase + Guard | `authGuard` |
| Interceptors | camelCase + Interceptor | `authInterceptor` |
| Files | kebab-case | `auth.service.ts`, `login.component.ts` |
| Signals | camelCase | `isLoading`, `currentUser` |

---

## Rules Summary

- Angular 21 — not Angular 22
- Always build with `--base-href /admin/`
- All HTTP calls through `ApiService`
- Signals for local state — RxJS for HTTP streams
- Reactive Forms — Signal Forms are Angular 22 only
- JWT via interceptor automatically
- Auth guard on all protected routes
- `inject()` for DI — not constructor injection
- `ChangeDetectionStrategy.OnPush` always
- Standalone components — no NgModules
- New control flow syntax (`@if`, `@for`) — not `*ngIf`, `*ngFor`
- `takeUntilDestroyed()` for subscription cleanup
- Never use `any` in TypeScript
- Vitest for testing
