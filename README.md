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

## Ontwikkelsetup

Deze repository is opgezet als een minimale Next.js 15 App Router app met static export. Er is op dit moment geen database, geen server-side runtime en geen verplichte `.env` nodig om lokaal te kunnen ontwikkelen.

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
- Als `npm run dev` lokaal niet start, controleer dan eerst of poort `3000` al in gebruik is

## Projectdoelstellingen

- **Prestaties**: Lighthouse score 95–100, sub-seconde laadtijden
- **Kosten**: €0–5/maand (Vercel Free Tier)
- **Veiligheid**: Minimaal aanvalsoppervlak dankzij statische bestanden
- **Beheer**: WordPress voor contentbeheer blog door niet-technische teamleden
