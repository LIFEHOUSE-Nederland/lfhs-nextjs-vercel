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
- **Styling:** TailwindCSS v4 met design tokens/CSS-variabelen voor LIFEHOUSE rood, wit en grijs
- **UI Components:** Custom UI eerst; Shadcn/ui alleen waar het functioneel helpt en visueel niet generiek voelt
- **Icons:** Lucide React

### Build & Deployment
- **Package Manager:** npm
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
│   ├── Hero.tsx            # Welkom + hoofdboodschap + quote
│   ├── ServiceInfo.tsx     # Zondagsdienst, locatie en livestream
│   ├── About.tsx           # Over ons, visie, missie en identiteit
│   ├── Leadership.tsx      # Voorgangers en generatieverhaal
│   ├── CommunityLinks.tsx  # Socials en blog verwijzingen
│   ├── Giving.tsx          # ANBI, geven en documenten
│   ├── Contact.tsx         # Bereikbaarheid en bezoekinformatie
│   ├── Footer.tsx          # Footer met privacy en blog link
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

### 1. Hero / Welcome
- Open met `Welkom bij LIFEHOUSE Amsterdam` als duidelijke hoofdboodschap
- Combineer een warme, huiselijke intro met ruimte voor een korte geloofsquote of profetische tekst
- Gebruik een primaire CTA richting bezoek aan de zondagse dienst en een secundaire CTA voor livestream of locatie
- De hero moet voelen als uitnodigend en stedelijk, niet als corporate landing page of standaard kerksjabloon

### 2. Service Info
- Toon de zondagse kerkdienst als eerstvolgende praktische actie: tijd, venue en volledig adres
- Voeg praktische details toe zoals gratis parkeren op zondag, nabijheid van metro en koffie/thee rondom de dienst
- Maak livestream-kijken een duidelijke secundaire route
- Deze sectie moet op mobiel snel scanbaar zijn, bijvoorbeeld met compacte info-blokken

### 3. Over Ons / Missie
- Leg kort uit wie LIFEHOUSE Amsterdam is: christelijk-evangelisch, Indonesische roots, open voor elke generatie
- Gebruik `CONNECT, GROW, IMPACT` als terugkerend inhoudelijk en visueel anker
- Verwerk visie, missie en identiteit in overzichtelijke patronen, niet als lange ononderbroken tekst
- Laat de toon familiegericht, relevant en missionair zijn

### 4. Leiderschap & Generaties
- Geef ruimte aan de huidige voorgangers en aan de oprichters / senior pastors
- Benadruk continuiteit tussen generaties, mentorschap en "welkom thuis"
- Werk bij voorkeur met portretten, korte introducties en een persoonlijke toon in plaats van formele bio's

### 5. Community Links
- Bundel socials, worship-content en livestream-archief in een eigen sectie of duidelijke contentstrook
- Geef de blog een herkenbare plek als `LIFEHOUSE Stories`, met link naar de WordPress-subdomain
- Houd deze sectie levendig en actueel, zonder de homepage te zwaar te maken

### 6. Giving / ANBI
- Reserveer een transparante sectie voor geven, ANBI-status, bankgegevens en officiële documenten
- Documentlinks zoals beleidsplan, jaarbegroting, jaarverslagen en privacyverklaring moeten logisch gegroepeerd zijn
- Deze sectie moet vertrouwen en zorgvuldigheid uitstralen, niet alleen administratieve tekst

### 7. Contact & Bezoek
- Herhaal de locatie en bereikbaarheid aan het einde van de pagina
- Voeg contactadres, routehulp en een duidelijke "plan je bezoek"-achtige afsluiter toe
- Gebruik alleen een map-embed als die performance en UX niet schaadt

### 8. Footer
- Houd de footer compact maar volledig: copyright, privacy, ANBI/documenten en blog link
- **Link naar WordPress blog** blijft primair `href="https://blog.kerk.nl"` en alleen bij fallback `href="/blog"`

### Styling Richting
- Baseer de visuele richting op een moderne editorial one-pager met duidelijke hiërarchie, royale spacing en sterke typografie
- Gebruik de LIFEHOUSE-huiskleuren als basis: rood als accentkleur, wit als rustpunt en donkergrijs als dragende neutrale kleur
- Vermijd paarse gradients, standaard SaaS-cards en een te brave "kerktemplate" uitstraling
- Kies voor een warme, gastvrije uitstraling waarin thuisgevoel, aanbidding, stad en generaties samenkomen
- Werk met subtiele animaties en scroll-overgangen, maar houd performance en rust leidend
- Laat CTA's, sectie-overgangen en beeldgebruik intentional voelen; liever minder elementen met meer richting dan veel losse blokken

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
- npm
- Git

### Repo Setup
```bash
# Clone repository
git clone git@github.com:LIFEHOUSE-Nederland/lfhs-nextjs-vercel.git
cd lfhs-nextjs-vercel

# Start from latest main
git switch main
git pull

# Create your own feature branch
git switch -c codex/<feature-name>

# Install dependencies
npm install

# Start local development server
npm run dev

# Run checks
npm run typecheck
npm run lint

# Build static export
npm run build
```

### Environment Variables
```env
# No required .env for current local setup
```

### Notes
- This repo currently needs no database, no server runtime and no required local secrets to run
- `npm run dev` starts the Next.js dev server on `http://localhost:3000`
- `npm run build` generates the static output in `out/`
- Re-run `npm install` after pulling or switching branches if `package.json` or `package-lock.json` changed
- There is currently no `npm start` script; this project is intended as a static export

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

---

## Development Workflow (Belangrijk)

### Werkwijze (altijd volgen)

Werk iteratief in kleine stappen:

1. Maak een GitHub Issue
2. Maak een feature branch vanaf `main`
3. Maak een checkpoint commit
4. Laat Codex één duidelijke taak uitvoeren
5. Run alle checks (lint, typecheck, build)
6. Test lokaal (mobile + desktop)
7. Open een Pull Request
8. Review (zelf + Codex)
9. Merge naar main → automatische deploy

---

## Definition of Done (DoD)

Een taak is pas klaar als ALLES hieronder klopt:

### Code kwaliteit
- [ ] TypeScript errors = 0
- [ ] ESLint warnings = 0
- [ ] Geen ongebruikte code/imports
- [ ] Component heeft één duidelijke verantwoordelijkheid

### Performance
- [ ] Geen onnodige client-side JS
- [ ] Geen zware libraries toegevoegd
- [ ] Images geoptimaliseerd (geen grote raw images)
- [ ] Geen layout shift (CLS issues)

### UI/UX
- [ ] Mobile-first correct
- [ ] Desktop correct
- [ ] Consistente spacing (Tailwind scale)
- [ ] Geen visuele bugs (overlap, clipping)

### Accessibility (minimaal)
- [ ] Semantic HTML (section, nav, h1-h3)
- [ ] Alt tags op alle images
- [ ] Buttons/links duidelijk
- [ ] Contrast voldoende

### SEO
- [ ] Correct gebruik van headings (1x h1)
- [ ] Content logisch gestructureerd
- [ ] Geen lege sections

### Build & test
- [ ] `npm run build` werkt
- [ ] Geen console errors
- [ ] Links werken (intern + blog)

---

## Codex Usage Rules

Gebruik Codex altijd met duidelijke instructies:

### Altijd meegeven:
- Doel van de taak
- Scope (wat WEL en NIET aanpassen)
- Definition of Done
- Performance constraint: "no unnecessary JS"

### Voorbeeld prompt:
Bouw alleen de ServiceInfo component.

Doel:
Bezoekers snel laten zien wanneer en waar de dienst is.

Requirements:

mobiel eerst
semantic HTML
geen client-side state
snelle scanbare layout

Niet doen:

geen animaties
geen extra libraries
geen wijzigingen buiten deze component

---

## Belangrijke Regels (Hard)

❌ Niet doen:
- Geen state management libs
- Geen API routes
- Geen server-side rendering
- Geen over-engineering
- Geen grote UI libraries toevoegen

✅ Altijd doen:
- Static-first denken
- Simpelste oplossing kiezen
- Code schrijven die juniors begrijpen
- Kleine commits / kleine PR’s

---

## Project Filosofie

Dit is geen applicatie.

Dit is een snelle, duidelijke, gastvrije website.

Elke keuze moet bijdragen aan:
- snelheid
- eenvoud
- vertrouwen voor bezoekers
