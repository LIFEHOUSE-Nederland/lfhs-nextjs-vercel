# LIFEHOUSE Amsterdam — Project Context

One-pager website voor een christelijke kerkgemeenschap. Vervangt een trage WordPress site met een statische, snelle oplossing gericht op nieuwe bezoekers.

**Doel:** €0 hostingkosten, <1 sec laadtijd, optimale SEO.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4 met CSS-variabelen voor LIFEHOUSE rood, wit en donkergrijs
- **UI:** Custom components eerst; Shadcn/ui alleen waar het functioneel helpt
- **Icons:** Lucide React
- **Hosting:** Vercel (CI/CD via Git push naar `main`)

---

## Project Structuur

```
app/
├── layout.tsx          # Root layout + Manrope (next/font) + metadata + JSON-LD
├── page.tsx            # One-pager (alle secties samengevoegd)
├── globals.css         # Tailwind import + design tokens + gedeelde primitives
├── robots.ts
└── sitemap.ts
components/
├── Header.tsx          # Sticky header met scroll-spy (client)
├── Drawer.tsx          # Menu-drawer (client)
├── Hero.tsx            # Slider met 3 slides (client)
├── Dienst.tsx          # 01 · de dienst
├── OverOns.tsx         # 02 · over ons (connect / grow / impact)
├── Voorgangers.tsx     # 03 · voorgangers
├── Socials.tsx         # 04 · socials
├── Geven.tsx           # 05 · geven
├── CopyIban.tsx        # Kopieer-IBAN knop (client)
├── Contact.tsx         # 06 · contact + footer
├── icons.tsx           # Inline SVG icons
└── *.module.css        # Sectie-styling als CSS Modules
content/
└── site.ts             # Alle teksten, links en hero-slides
lib/
└── emphasis.tsx        # *cursief* en 2^e^ superscript in content-strings
```

Styling: design tokens en gedeelde primitives (`.section`, `.h2`, `.btn`, …) staan in
`globals.css`; sectie-specifieke styling staat in een CSS Module naast het component.
Bron van waarheid voor het ontwerp is `design/design/index.html` + `design/README.md`.

---

## Commands

```bash
npm run dev          # Dev server op http://localhost:3000
npm run typecheck    # TypeScript errors controleren
npm run lint         # ESLint controleren
npm run build        # Static export naar out/
```

Geen `.env` vereist. Geen database. Geen server runtime.

---

## Development Workflow

Werk iteratief in kleine stappen:

1. Maak een GitHub Issue
2. Maak een feature branch vanaf `main`
3. Maak een checkpoint commit
4. Laat Codex één duidelijke taak uitvoeren
5. Run alle checks: `npm run typecheck && npm run lint && npm run build`
6. Test lokaal (mobile + desktop)
7. Open een Pull Request
8. Review (zelf + Codex)
9. Merge naar `main` → automatische deploy

---

## Definition of Done

Een taak is pas klaar als **alles** hieronder klopt:

**Code kwaliteit**
- [ ] TypeScript errors = 0
- [ ] ESLint warnings = 0
- [ ] Geen ongebruikte code/imports
- [ ] Component heeft één duidelijke verantwoordelijkheid

**Performance**
- [ ] Geen onnodige client-side JS
- [ ] Geen zware libraries toegevoegd
- [ ] Images geoptimaliseerd (geen grote raw images)
- [ ] Geen layout shift (CLS issues)

**UI/UX**
- [ ] Mobile-first correct
- [ ] Desktop correct
- [ ] Consistente spacing (Tailwind scale)
- [ ] Geen visuele bugs (overlap, clipping)

**Accessibility**
- [ ] Semantic HTML (section, nav, h1-h3)
- [ ] Alt tags op alle images
- [ ] Buttons/links duidelijk gelabeld
- [ ] Contrast voldoende

**SEO**
- [ ] Correct gebruik van headings (1x h1)
- [ ] Content logisch gestructureerd
- [ ] Geen lege sections

**Build & test**
- [ ] `npm run build` werkt zonder errors
- [ ] Geen console errors
- [ ] Links werken (intern + blog)

---

## Harde Regels

❌ Niet doen:
- Geen state management libraries
- Geen API routes
- Geen server-side rendering
- Geen over-engineering
- Geen grote UI libraries toevoegen

✅ Altijd doen:
- Static-first denken
- Simpelste oplossing kiezen
- Code schrijven die juniors begrijpen
- TypeScript voor alle code
- Semantic HTML5 tags
- Comments in Nederlands voor content, Engels voor code
- Image alt tags altijd invullen
- Mobile-first development

---

## Project Filosofie

Dit is geen applicatie. Dit is een snelle, duidelijke, gastvrije website.

Elke keuze moet bijdragen aan: **snelheid · eenvoud · vertrouwen voor bezoekers**

**Prioriteit:** Snelheid > Features. Houd het simpel, statisch en snel.

---

## Referentiedocumentatie

- **[docs/components.md](docs/components.md)** — Gedetailleerde specs per component + styling richting
- **[docs/seo.md](docs/seo.md)** — Metadata, JSON-LD, sitemap, performance targets
- **[docs/security.md](docs/security.md)** — CSP nonce-aanpak, HTTP headers
- **[docs/setup.md](docs/setup.md)** — Vercel deployment, DNS, kosten, onderhoud
