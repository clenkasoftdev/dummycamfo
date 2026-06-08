# Next.js Frontend Instructions

## Overview

Next.js with static export (`output: 'export'`). No server-side runtime in production.
Deployed as static HTML/CSS/JS to alfahosting under `events.camfomedics.com/`.

> **Aligned to Next.js 16.1.1 — Updated June 2026**

---

## Critical Constraint: Static Export

This project uses `output: 'export'`. This is the most important constraint in this project.
**Read this section before writing any Next.js code.**

```js
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### What is NOT available in static export

- No server-side data fetching at request time
- No API routes (`app/api/`) — our API is PHP
- No `getServerSideProps`
- No middleware
- No `cookies()`, `headers()`, `draftMode()` — these are async in Next.js 16 but irrelevant here
- No Route Handlers
- No Server Actions
- No Edge Functions
- No `unstable_cache`, `cacheTag`, `cacheLife` — no server caching
- No `next/dynamic` with `{ ssr: false }` inside Server Components
- No `serverRuntimeConfig` or `publicRuntimeConfig` — removed in Next.js 16

### What IS available

- Static Site Generation (SSG) via `generateStaticParams()`
- Client-side data fetching via `useEffect`, SWR, or React Query
- All client-side React features
- App Router with static pages
- Tailwind CSS, `next/font`, `next/image` (unoptimized)

---

## Folder Structure

```
frontend-public/
├── src/
│   ├── app/                    App Router — pages and layouts
│   │   ├── layout.tsx          Root layout
│   │   ├── page.tsx            Home page
│   │   └── events/
│   │       └── page.tsx
│   ├── components/             Reusable UI components
│   │   ├── ui/                 Generic: Button, Card, Modal, etc.
│   │   └── events/             Domain-specific components
│   ├── contexts/               React context providers (XyzProvider pattern)
│   ├── hooks/                  Custom React hooks
│   ├── lib/                    Utilities and API client
│   │   └── api.ts              All fetch calls here
│   ├── styles/                 Global styles
│   └── types/                  TypeScript interfaces and types
├── public/                     Static assets
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Folders | kebab-case | `user-profile/`, `event-card/` |
| Component files | PascalCase | `EventCard.tsx` |
| Hook files | camelCase | `useEvents.ts` |
| Utility files | camelCase | `formatDate.ts` |
| Static assets | kebab-case | `hero-image.jpg` |
| Context providers | PascalCase + Provider | `AuthProvider` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Types/Interfaces | PascalCase | `EventItem`, `ApiResponse<T>` |

---

## TypeScript

Always use TypeScript. Never use `any`. Strict mode required.

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "paths": { "@/*": ["./src/*"] }
  }
}
```

Use Zod for runtime validation of API responses:

```typescript
import { z } from 'zod';

const EventSchema = z.object({
  id: z.number(),
  title: z.string(),
  date: z.string(),
  location: z.string(),
});

export type Event = z.infer<typeof EventSchema>;
```

---

## Server vs Client Components

Default is Server Component. Add `'use client'` only when needed.

Use Server Components for: static content, layout, non-interactive UI.
Use Client Components for: useState, useEffect, onClick, browser APIs, hooks.

Since we use static export, all dynamic data must be fetched client-side:

```typescript
// WRONG — no server runtime in static export
async function EventsPage() {
  const events = await fetch('/api/events'); // not available at build time
}

// CORRECT
'use client';
function EventsPage() {
  const { events } = useEvents(); // fetches in browser
}
```

Never use `next/dynamic` with `{ ssr: false }` inside a Server Component — causes build error.

---

## API Client

All API calls through `lib/api.ts`. Never use `fetch` directly in components.

```typescript
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!response.ok) return { success: false, data: null, error: `HTTP ${response.status}` };
  return response.json();
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, { method: 'POST', body: JSON.stringify(body) }),
};
```

---

## Environment Variables

```bash
# .env.local — gitignored, development only
NEXT_PUBLIC_API_URL=http://localhost:80/api

# .env.production — committed, public values only
NEXT_PUBLIC_API_URL=https://events.camfomedics.com/api
```

Rules:
- `NEXT_PUBLIC_` values are inlined at build time — changing after build has no effect
- Never put secrets in `NEXT_PUBLIC_` — exposed to browser
- `serverRuntimeConfig` and `publicRuntimeConfig` removed in Next.js 16 — do not use

---

## Data Fetching

All dynamic data fetched client-side via custom hooks:

```typescript
// hooks/useEvents.ts
export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<Event[]>('events')
      .then(r => r.success && r.data ? setEvents(r.data) : setError(r.error ?? 'Error'))
      .catch(() => setError('Network error'))
      .finally(() => setLoading(false));
  }, []);

  return { events, loading, error };
}
```

Always show loading and error states in components.

---

## Component Rules

- One component per file — filename matches component name
- Default export for single-export files
- Barrel `index.ts` for multiple related components
- Props always typed with TypeScript interface
- No inline styles — use Tailwind CSS
- No business logic in components — use custom hooks
- Co-locate tests: `EventCard.tsx` + `EventCard.test.tsx`
- No example/demo files in codebase

---

## Styling

Tailwind CSS. Use `next/image` for images and `next/font` for fonts:

```typescript
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

---

## Build Output

```bash
npm run build
# Output: out/
# Deploy contents to: events.camfomedics.com/
```

---

## Rules Summary

- Static export only — no server runtime
- TypeScript strict — never `any`
- All API calls through `lib/api.ts`
- `'use client'` only when needed
- No secrets in `NEXT_PUBLIC_` variables
- One component per file, default export
- Data fetching in hooks, not components
- Tailwind CSS for styling
- Co-locate tests with components
- No demo files in codebase
- `serverRuntimeConfig` removed in Next.js 16 — do not use
