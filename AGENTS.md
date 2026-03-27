# Kerk Website - Project Context

## Project Overzicht

Een moderne, snelle one-pager website voor een Christelijke kerkgemeenschap. De huidige WordPress site is traag en moet vervangen worden door een statische, veilige en kosteneffectieve oplossing gericht op nieuwe bezoekers en geïnteresseerden.

**Doel:** Minimale kosten (€0-5/maand), maximale snelheid (<1 sec laadtijd), optimale vindbaarheid (SEO + LLM).

---

## Requirements

### Functioneel
- ✅ **One-pager website** met alle informatie op één pagina
- ✅ **Responsive design** - geschikt voor desktop én mobiel
- ✅ **Link naar WordPress blog** (blijft op Vimexx hosting)
- ✅ **Statische website** - geen database, geen server-side processing

### Technisch
- ✅ **React framework** voor front-end development
- ✅ **Next.js 15** (App Router) met static export
- ✅ **Hosting:** Vercel (primair) of Cloudflare Pages
- ✅ **DNS:** Blijft bij Vimexx (waar WordPress ook draait)
- ✅ **HTTPS:** Automatische SSL certificaten
- ✅ **Snelheid:** Lighthouse scores 95-100, laadtijd <1 seconde

### SEO & Vindbaarheid
- ✅ **Google SEO optimalisatie**
  - Structured data (Schema.org Church markup)
  - Meta tags (Open Graph, Twitter Cards)
  - Sitemap.xml generatie
  - Semantic HTML5
- ✅ **LLM-friendly**
  - Clean HTML structuur
  - Descriptive headings en alt tags
  - Readable content hierarchy

### Veiligheid
- ✅ **HTTPS only** - moderne TLS configuratie
- ✅ **Security headers** (nonce-based CSP, HSTS, X-Frame-Options)
- ✅ **Minimaal aanvalsoppervlak** - geen database, geen PHP
- ✅ **DDoS bescherming** via CDN

---

## Tech Stack

### Core
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **UI Components:** Shadcn/ui (optioneel)
- **Icons:** Lucide React

### Build & Deployment
- **Package Manager:** npm/pnpm
- **Version Control:** Git (GitHub/GitLab)
- **Hosting:** Vercel (primair) of Cloudflare Pages
- **CI/CD:** Automatisch via Git push

### Configuration
```typescript
// next.config.ts
export default {
  output: 'export',           // Static HTML export
  trailingSlash: true,        // SEO-friendly URLs
  images: {
    unoptimized: true,        // Voor static export
  },
}
```

---

## Architectuur

### High-Level Flow
```
Developer → Git Push → GitHub → Vercel Build → Global CDN → Gebruiker
                                      ↓
                            Static HTML/CSS/JS
```

### DNS Configuratie (Vimexx)

**Optie A: Subdomain (voorkeur)**
```
kerk.nl → Vercel (Next.js one-pager)
www.kerk.nl → Vercel (optionele alias)
blog.kerk.nl → WordPress (Vimexx)
```

**Optie B: Path-based routing (fallback)**
```
kerk.nl → Vercel (Next.js one-pager)
kerk.nl/blog → WordPress (Vimexx)
```

### DNS Records (Vimexx)
```
Type: A
Name: @
Value: [Vercel IP - wordt gegeven na deployment]

Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A of CNAME
Name: blog
Value: [Vimexx IP of WordPress host]
```

---

## Project Structuur

```
kerk-website/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # One-pager (alle secties)
│   ├── globals.css         # Tailwind imports
│   └── favicon.ico
├── components/
│   ├── Hero.tsx            # Hero sectie met kerkfoto
│   ├── About.tsx           # Over ons sectie
│   ├── Services.tsx        # Diensten/activiteiten
│   ├── Contact.tsx         # Contactinformatie
│   ├── Footer.tsx          # Footer met blog link
│   └── Navigation.tsx      # Sticky nav (optioneel)
├── public/
│   ├── images/             # Afbeeldingen
│   └── robots.txt
├── lib/
│   └── metadata.ts         # SEO metadata helpers
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Component Ontwerp

### 1. Hero Section
- Kerkfoto of banner
- Welkomsttekst
- Call-to-action (bijv. "Bezoek een dienst")
- Scroll-indicator naar volgende sectie

### 2. About Section
- Wie zijn wij
- Onze visie/missie
- Geschiedenis (optioneel)

### 3. Services Section
- Diensten (tijd, locatie)
- Wekelijkse activiteiten
- Bijzondere events

### 4. Contact Section
- Adres
- Contactgegevens (email, telefoon)
- Google Maps embed (optioneel)
- Social media links

### 5. Footer
- Copyright
- **Link naar WordPress blog** (primair `href="https://blog.kerk.nl"`, alleen bij fallback `href="/blog"`)
- Privacy statement (optioneel)

---

## SEO Implementatie

### Metadata (app/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Kerkgemeenschap [Naam] - Welkom',
  description: 'Welkom bij kerkgemeenschap [Naam]. Een levendige gemeenschap waar iedereen welkom is.',
  keywords: ['kerk', 'christelijke gemeenschap', '[stad]', 'eredienst'],
  
  openGraph: {
    title: 'Kerkgemeenschap [Naam]',
    description: '...',
    url: 'https://kerk.nl',
    siteName: 'Kerkgemeenschap [Naam]',
    images: ['/images/og-image.jpg'],
    locale: 'nl_NL',
    type: 'website',
  },
  
  robots: {
    index: true,
    follow: true,
  },
}
```

### Structured Data (JSON-LD)
```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Kerkgemeenschap [Naam]',
  description: '...',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '...',
    addressLocality: '...',
    postalCode: '...',
    addressCountry: 'NL'
  },
  telephone: '...',
  url: 'https://kerk.nl',
}
```

### Sitemap.xml
Automatisch gegenereerd via Next.js:
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://kerk.nl',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

---

## Performance Targets

### Lighthouse Scores (Target)
- **Performance:** 95-100
- **Accessibility:** 95-100
- **Best Practices:** 100
- **SEO:** 100

### Core Web Vitals
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### Optimalisatie Technieken
- ✅ Static HTML (no hydration delay)
- ✅ Optimized images (WebP, lazy loading)
- ✅ Minimal JavaScript
- ✅ CSS tree-shaking (Tailwind)
- ✅ CDN edge caching

---

## Beveiliging

### HTTP Headers (next.config.ts + middleware/proxy)
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

- CSP wordt per request opgebouwd met een nonce; gebruik dus geen `'unsafe-inline'`
- Hardcode de CSP niet als vaste string in `next.config.ts`; de nonce moet op request-niveau worden gezet
- Als `/blog` als fallback wordt gebruikt, beheer de CSP en andere security headers voor WordPress apart

### SSL/TLS
- Automatisch via Vercel/Cloudflare
- HTTP → HTTPS redirect
- HSTS header enabled

---

## Deployment

### Initiële Setup (Vercel)

1. **GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[user]/kerk-website.git
   git push -u origin main
   ```

2. **Vercel Project**
   - Ga naar vercel.com
   - "Import Project" → Selecteer GitHub repo
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Deploy

3. **Custom Domain**
   - Vercel Dashboard → Settings → Domains
   - Voeg `kerk.nl` toe
   - Krijg DNS instructies
   - Update DNS bij Vimexx

### WordPress Blog Routing

**Voorkeur: subdomain**
- Gebruik `blog.kerk.nl` als aparte DNS record naar WordPress
- Link vanuit de landing page direct naar `https://blog.kerk.nl`
- Dit houdt caching, CSP en hosting-configuratie het eenvoudigst

**Fallback: /blog path**
Voeg alleen als back-up Vimexx proxy toe bij DNS of gebruik Vercel rewrites:
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

Bij deze fallback moet je ook redirects, cookies, canonical URLs en security headers voor WordPress extra goed controleren.

---

## Kosten Overzicht

### Maandelijkse Kosten
| Component | Provider | Kosten |
|-----------|----------|--------|
| Hosting + CDN | Vercel | €0 |
| SSL Certificaat | Let's Encrypt | €0 |
| Bandwidth | Vercel (100GB) | €0 |
| WordPress (blijft) | Vimexx | €10-15 |
| Domain (blijft) | Vimexx | €0-2 |
| **Nieuwe kosten** | | **€0** |

### Schaalbaarheid
- 0-100k requests/maand: €0
- Edge caching: unlimited
- DDoS bescherming: included

---

## Development Setup

### Requirements
- Node.js 18+
- npm/pnpm
- Git

### Installatie
```bash
# Create Next.js project
npx create-next-app@latest kerk-website --typescript --tailwind --app

# Navigate
cd kerk-website

# Install dependencies
npm install

# Development server
npm run dev

# Build static export
npm run build

# Preview build
npx serve@latest out
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://kerk.nl
NEXT_PUBLIC_BLOG_URL=https://blog.kerk.nl
```

---

## Content Structuur

### Teksten (voorbeelden)
```typescript
// lib/content.ts
export const content = {
  hero: {
    title: "Welkom bij Kerkgemeenschap [Naam]",
    subtitle: "Een warme gemeenschap waar iedereen welkom is",
    cta: "Kom een keer langs"
  },
  about: {
    title: "Wie zijn wij",
    text: "...",
  },
  services: {
    title: "Onze Diensten",
    schedule: [
      { day: "Zondag", time: "10:00", type: "Eredienst" },
      { day: "Woensdag", time: "19:30", type: "Bijbelstudie" },
    ]
  },
  contact: {
    address: "...",
    email: "...",
    phone: "..."
  }
}
```

---

## Testing Checklist

### Pre-Launch
- [ ] Lighthouse score 95+
- [ ] Mobile responsive (test op iPhone, Android)
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] Blog link werkt correct
- [ ] Contact info is correct
- [ ] Images geoptimaliseerd (WebP)
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured
- [ ] SSL certificate active
- [ ] Google Search Console verified
- [ ] Meta tags preview (LinkedIn, Twitter)

---

## Maintenance

### Updates
- **Next.js:** Check elke 3 maanden voor updates
- **Dependencies:** `npm audit` maandelijks
- **Content:** Wijzig via Git push → auto deploy

### Monitoring
- **Vercel Analytics:** Gratis included
- **Google Search Console:** SEO monitoring
- **Uptime:** 99.9% SLA (Vercel)

---

## Support Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Schema.org Church](https://schema.org/Church)

---

## Notes voor Codex

- Gebruik TypeScript voor alle code
- Volg Next.js 15 App Router conventies
- Tailwind v4 syntax waar mogelijk
- Accessibility WCAG 2.1 AA standaard
- Semantic HTML5 tags gebruiken
- Comments in Nederlands voor content, Engels voor code
- Image alt tags altijd invullen
- Forms met proper labels en ARIA
- Test mobile-first development

**Prioriteit:** Snelheid > Features. Houd het simpel, statisch en snel.
