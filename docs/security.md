# Beveiliging

## Aanpak

- **HTTPS only** — automatisch via Vercel/Cloudflare (Let's Encrypt)
- **Minimaal aanvalsoppervlak** — geen database, geen PHP, geen server runtime
- **DDoS bescherming** — via Vercel CDN
- **CSP:** nonce-based, nooit `'unsafe-inline'`; bouw per request op in middleware/edge, niet als vaste string in `next.config.ts`

---

## HTTP Headers (next.config.ts)

Statische headers die voor elke response gelden:

```typescript
// next.config.ts
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
  ]
}
```

---

## Content Security Policy (middleware of edge/proxy)

CSP moet per request worden opgebouwd met een nonce:

```typescript
// middleware.ts of edge/proxy laag
export function buildCsp(nonce: string) {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data: https:",
    "font-src 'self' data: https:",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; ')
}
```

**Regels:**
- Hardcode de CSP **niet** als vaste string in `next.config.ts` — de nonce moet op request-niveau worden gezet
- Als `/blog` als fallback wordt gebruikt, beheer de CSP en andere security headers voor WordPress **apart**

---

## WordPress Blog

Bij gebruik van `blog.lifehouse.nl` subdomain: CSP en headers gelden alleen voor de Next.js site — WordPress heeft zijn eigen configuratie op Vimexx.

Bij gebruik van `/blog` proxy/rewrite: redirects, cookies, canonical URLs en security headers voor WordPress moeten extra zorgvuldig worden geconfigureerd. Zie [docs/setup.md](./setup.md) voor routing details.
