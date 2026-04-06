# Deployment, Kosten & Onderhoud

## Vercel Deployment (initieel)

1. **GitHub Repository koppelen**
   - Ga naar vercel.com → "Import Project" → selecteer de GitHub repo
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Deploy

2. **Custom Domain instellen**
   - Vercel Dashboard → Settings → Domains
   - Voeg `lifehouse.nl` toe
   - Vercel geeft DNS-instructies
   - Update DNS records bij Vimexx (zie hieronder)

---

## DNS Configuratie (Vimexx)

**Voorkeur: subdomain-routing**

| Record | Naam | Waarde | Doel |
|---|---|---|---|
| A / CNAME | `@` | `cname.vercel-dns.com` | Hoofdsite → Vercel |
| CNAME | `www` | `cname.vercel-dns.com` | www → Vercel |
| A of CNAME | `blog` | Vimexx IP / WordPress host | `blog.lifehouse.nl` → WordPress |

**Fallback: /blog path via Vercel rewrites**

Gebruik alleen als subdomain-routing niet haalbaar is:

```typescript
// next.config.ts
async rewrites() {
  return [
    {
      source: '/blog/:path*',
      destination: 'https://[vimexx-wordpress-url]/:path*',
    },
  ]
}
```

Bij deze fallback ook redirects, cookies, canonical URLs en security headers voor WordPress controleren (zie [docs/security.md](./security.md)).

---

## Kosten Overzicht

| Component | Provider | Kosten/maand |
|---|---|---|
| Hosting + CDN | Vercel | €0 |
| SSL Certificaat | Let's Encrypt | €0 |
| Bandwidth (100GB) | Vercel | €0 |
| WordPress (blijft) | Vimexx | €10-15 |
| Domain (blijft) | Vimexx | €0-2 |
| **Nieuwe kosten** | | **€0** |

Schaalbaarheid: 0-100k requests/maand gratis, edge caching onbeperkt.

---

## Onderhoud

| Onderdeel | Frequentie |
|---|---|
| Next.js updates | Elke 3 maanden checken |
| `npm audit` | Maandelijks |
| Content updates | Via Git push → auto deploy |
| Vercel Analytics | Gratis included, altijd beschikbaar |
| Google Search Console | SEO monitoring |

---

## Support Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Schema.org Church](https://schema.org/Church)
