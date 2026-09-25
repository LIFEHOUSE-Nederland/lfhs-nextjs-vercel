# LFHS Website

Moderne kerkwebsite landing page, naast bestaande aparte blog. In feite dus twee volledig aparte websites, met voorkeur voor een aparte blog-subdomain:
* nieuwe website voor **landing page**: gebouwd met *Next.js* en gehost op *Vercel*
* oude website voor de **blog**: gebouwd met *Wordpress* en gehost op *Vimexx*

In deze repo bouwen we de nieuwe website

## Tech Stack

| Onderdeel | Technologie |
|---|---|
| Frontend | Next.js (Static Export) |
| Hosting & CDN | Vercel (Global Edge Network) |
| SSL | Automatisch via Let's Encrypt |
| DNS | Vimexx |
| Blog | WordPress op Vimexx Hosting |
| Database (blog) | MySQL (via Vimexx) |

## Routing & Security

- **Voorkeursrouting**: `blog.kerk.nl` wijst direct naar WordPress op Vimexx
- **Fallback routing**: `/blog` alleen gebruiken als subdomain-routing niet haalbaar is, via proxy of rewrites
- **CSP aanpak**: nonce-based Content Security Policy, dus geen `'unsafe-inline'`
- **Implementatie-opmerking**: bouw de CSP per request op in middleware, edge of reverse proxy; zet dit niet als vaste header-string in `next.config.ts`

## Hoe werkt de deployment?

1. De developer pusht code naar de **GitHub repository**
2. Vercel detecteert de push en start automatisch een **build**
3. Next.js genereert statische bestanden (HTML/CSS/JS) via `next export`
4. De statische bestanden worden uitgerold naar Vercel's **globaal CDN** (100+ edge locaties)
5. Bezoekers worden via DNS (Vimexx) naar het dichtstbijzijnde CDN-punt gerouteerd

## DNS Configuratie (Vimexx)

Voorkeur:
- hoofdsite via Vercel
- blog via `blog.kerk.nl` naar WordPress

Fallback:
- `/blog` via proxy/rewrite als een apart subdomein niet mogelijk is

| Record | Waarde | Doel |
|---|---|---|
| `A` / `CNAME` (root) | `cname.vercel-dns.com` | Hoofdsite → Vercel |
| `CNAME` (www) | `cname.vercel-dns.com` | www → Vercel |
| `A` of `CNAME` (blog) | Vimexx IP / WordPress host | `blog.kerk.nl` → WordPress |

## Projectstructuur

De one-pager is nagebouwd vanuit de Claude Design bestanden in `design/`
(`design/design/index.html` als referentie, `design/README.md` voor de design tokens).
De originele designfoto's zitten niet in deze repo; het prototype rendert daardoor
zonder afbeeldingen. De foto's die de site zelf toont staan in `public/assets/`.

```
app/
├── layout.tsx          # Manrope via next/font, metadata, JSON-LD
├── page.tsx            # Sectievolgorde van de one-pager
├── globals.css         # Design tokens (:root), reset en gedeelde primitives
├── robots.ts
└── sitemap.ts
components/
├── Header.tsx          # Sticky header + scroll-spy (client)
├── Drawer.tsx          # Menu met Escape, scroll-lock en focus trap (client)
├── Hero.tsx            # Slider met 3 slides en autoplay (client)
├── Dienst.tsx          # 01 · de dienst
├── OverOns.tsx         # 02 · over ons (connect / grow / impact)
├── Voorgangers.tsx     # 03 · voorgangers
├── Socials.tsx         # 04 · socials
├── Geven.tsx           # 05 · geven
├── CopyIban.tsx        # Kopieer-IBAN knop (client)
├── Contact.tsx         # 06 · contact + footer
├── icons.tsx           # Inline SVG icons
└── *.module.css        # Sectie-styling als CSS Modules
content/site.ts         # Alle teksten, links en slides
lib/emphasis.tsx        # *cursief* en 2^e^ superscript in content-strings
public/assets/          # Afbeeldingen van de site (lowercase, gecomprimeerd)
```

## Ontwikkelsetup

Deze repository is opgezet als een Next.js 15 App Router app met static export. Er is op dit moment geen database, geen server-side runtime en geen verplichte `.env` nodig om lokaal te kunnen ontwikkelen.

### Wat je lokaal nodig hebt

- Node.js 18+  (bij voorkeur een recente LTS-versie)
- npm
- Git

### Eerste setup op je machine

```bash
# Repository clonen
git clone git@github.com:LIFEHOUSE-Nederland/lfhs-nextjs-vercel.git
cd lfhs-nextjs-vercel

# Start vanaf de laatste main
git switch main
git pull

# Maak je eigen feature branch
git switch -c codex/<feature-naam>

# Installeer dependencies
npm install
```

### Dagelijkse workflow

```bash
# Start de lokale development server
npm run dev

# Controleer TypeScript
npm run typecheck

# Controleer linting
npm run lint

# Maak een productie build met static export
npm run build
```

### Wat deze commando's doen

- `npm run dev` start de lokale Next.js dev-server op `http://localhost:3000`
- `npm run typecheck` controleert of TypeScript zonder errors compileert
- `npm run lint` draait ESLint over het project
- `npm run build` maakt een production build en exporteert de statische site naar `out/`

### Handige notities

- Na `git pull` of het switchen naar een andere branch is het slim om opnieuw `npm install` te draaien als `package.json` of `package-lock.json` is gewijzigd
- Er is geen `npm start` script ingericht, omdat dit project bedoeld is als statische export en niet als Node-server
- De build-output staat in `out/`; dat is de map die gebruikt kan worden voor static hosting
- Draai `npm run build` niet terwijl `npm run dev` actief is: beide schrijven naar `.next/` en de dev-server serveert daarna kapotte CSS. Stop eerst de dev-server, of verwijder `.next/` en start opnieuw
- Als `npm run dev` lokaal niet start, controleer dan eerst of poort `3000` al in gebruik is

## Projectdoelstellingen

- **Prestaties**: Lighthouse score 95–100, sub-seconde laadtijden
- **Kosten**: €0–5/maand (Vercel Free Tier)
- **Veiligheid**: Minimaal aanvalsoppervlak dankzij statische bestanden
- **Beheer**: WordPress voor contentbeheer blog door niet-technische teamleden

## Bijdragen

Deze repository wordt beheerd door LIFEHOUSE Amsterdam ([@Jonathyan](https://github.com/Jonathyan)).
De code staat publiek zodat anderen kunnen meekijken en leren; het is geen project
dat actief bijdragen van buiten zoekt.

- **Iets gevonden dat niet klopt?** Open een issue met een korte beschrijving en,
  als het een weergaveprobleem is, een screenshot plus browser en schermbreedte.
- **Pull requests** zijn welkom voor duidelijke bugfixes. Draai vóór het indienen
  `npm run typecheck && npm run lint && npm run build`. Direct pushen naar `main`
  is geblokkeerd; alles loopt via een PR.
- **Beveiligingsprobleem?** Mail naar hello@lifehouse.nl in plaats van een
  publiek issue te openen.

### Let op: niet alles is vrij herbruikbaar

De code staat onder MIT, maar de foto's in `public/assets/`, het logo en de
teksten niet. Dat zijn foto's van herkenbare kerkbezoekers, opgenomen om
uitsluitend deze site te kunnen bouwen. Zie [LICENSE](LICENSE) voor de
voorwaarden.
