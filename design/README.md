# Handoff: LIFEHOUSE Amsterdam — one-pager

## Overview
Marketingwebsite (one-pager, Nederlands) voor LIFEHOUSE Amsterdam, een christelijk-evangelische kerk. Doel: bezoekers naar een zondagdienst krijgen, de kerk en voorgangers voorstellen, socials tonen, geven mogelijk maken en contact bieden.

Doelstack: **Next.js (App Router) + TypeScript, deploy op Vercel.** Statische site; geen backend nodig.

## About the Design Files
`design/index.html` is een **design-referentie in HTML** — een werkend prototype van look & gedrag, geen productiecode. Bouw het na in Next.js met componenten per sectie, `next/image` voor afbeeldingen en `next/font` voor het font. Het Tweaks-paneel onderaan de HTML (React/Babel via unpkg, `tweaks-panel.jsx`) is alleen een ontwerptool: **niet overnemen**.

## Fidelity
**High-fidelity.** Kleuren, typografie, spacing, teksten en interacties zijn definitief. Pixel-perfect nabouwen.

## Voorgestelde structuur
```
app/layout.tsx          font (Manrope via next/font/google), <html lang="nl">, metadata
app/page.tsx            sectievolgorde
app/globals.css         tokens (:root) + reset
components/Header.tsx   + Nav (scroll-spy), MenuButton
components/Drawer.tsx
components/Hero.tsx     slider (client component)
components/Dienst.tsx, OverOns.tsx, Voorgangers.tsx, Socials.tsx, Geven.tsx, Contact.tsx
components/CopyIban.tsx (client component)
public/assets/*         afbeeldingen uit design/assets
```
Gebruik CSS Modules of Tailwind (met de tokens hieronder als theme). Klassenamen uit de HTML mogen 1-op-1 als CSS Module-namen dienen.

## Design Tokens
**Kleuren**
- `--bg` #ffffff · `--ink` #0a0a0a · `--ink-2` #1a1a1a · `--muted` #8a8a8a · `--line` #e8e8e8
- `--red` (accent) #d93636 — accent-zacht #fdecec; live-glow rgba(217,54,54,.15)
- Grijstinten tekst: #3a3a3a (body), #555/#5a5a5a, #666, #777, #888, #9a9a9a (labels), #aaa/#bbb (iconen)
- Contact-sectie: achtergrond #0a0a0a, tekst #fff, lijnen rgba(255,255,255,.1)

**Typografie** — Manrope 300/400/500/600/700/800, `font-feature-settings:"ss01","cv11"`, antialiased. Body 16px/1.5.
- Hero-titel: 800, `clamp(44px,7.5vw,62px)`, line-height .92, letter-spacing -.045em; `.lt`-variant 300 italic
- H2 (sectietitel): 800, `clamp(40px,6.5vw,104px)`, lh .95, ls -.04em; `.lt` = 300 italic ls -.035em
- Sectielabel (`.section-no`): 700 13px, ls .2em, uppercase, #9a9a9a, voorafgegaan door lijntje 28×1px
- Eyebrow: 600 13px ls .18em uppercase
- Lead-tekst (over ons / geven-intro): 500 `clamp(20px,2.2vw,30px)` lh 1.25 ls -.02em
- Card-labels: 600–700 12px ls .12–.16em uppercase, kleur `--red`
- Nav: 700 15px; drawer-nav: 800 32px ls -.03em

**Spacing / layout**
- `--pad-x` clamp(20px,5vw,80px) · `--pad-y` clamp(80px,12vw,180px) · `--gap` clamp(16px,2vw,28px)
- Section-head: grid `.7fr 1.3fr`, gap 60px, margin-bottom 80px (≤880px: 1 kolom, gap 24, mb 48)
- Sections gescheiden door `border-top:1px solid var(--line)`; `scroll-margin-top:72px`

**Radius** 18px (cards, afbeeldingen) · 999px (buttons, pills, badges) · 50% (avatars, ronde knoppen)
**Schaduw** alleen pastor-card hover: `0 24px 40px -28px rgba(0,0,0,.15)`
**Breakpoints** 980px en 880px (primair), 520px (socials 1 kolom)

## Screens / Secties (in volgorde)

### Header (fixed)
- Flex space-between, padding `12px var(--pad-x)`, bg rgba(255,255,255,.86) + `backdrop-filter:saturate(140%) blur(10px)`, z-index 50.
- Links: logo (`logo.png`, 22×22) + "lifehouse" (800 18px).
- Nav (verborgen ≤880px): home · dienst · over ons · geven · contact · **blog** (extern → `https://www.lifehouse.nl/blog/`, `target="_blank"`). Elk item heeft een rood dotje 6px dat bij hover/actief infade (opacity + translateX(-4px→0), .25s).
- Menuknop: 38px zwarte cirkel, twee schuine lijnen; hover rotate(-18deg).

### Drawer (menu)
- Overlay rgba(0,0,0,.4) + paneel rechts `min(440px,90vw)`, slide-in `transform .35s cubic-bezier(.7,.05,.2,1)`.
- Items genummerd 01–08: home, de dienst, over ons, voorgangers, socials, geven, contact, blog (extern).
- Sluiten via ✕, klik op overlay, klik op item, of Escape. Voet: hello@lifehouse.nl · Joan Muyskenweg 20, Amsterdam.

### Hero — slider (`#home`)
- 3 slides, crossfade opacity .7s. Afbeelding full-bleed (negatieve marge `--pad-x`), hoogte `clamp(315px,54vh,540px)`, donkere gradient-overlay (0→.45 / 30%→.15 / 75%→.55 / 100%→.85).
- Tekst gecentreerd over het beeld (wit): eyebrow + titel. Glass-pill rechtsonder (bg rgba(255,255,255,.22), blur 10px).
- Onder beeld: lede (max 42ch) + CTA-knoppen (zwart pill; hover inverteert + translateY(-1px); ghost-variant).
- Slides:
  1. `worship.jpg` — "Lifehouse Amsterdam · sinds 1994" / "een **thuis** voor elke *generatie.*" / tag "Zondag · 10:30u" / CTA "Bezoek een dienst" → #dienst, ghost "Over ons" → #over-ons
  2. `worship-night.jpg` — "Onze missie" / "connect. grow. **impact.**" / tag "Worship · Night" / CTA "Lees meer" → #over-ons
  3. `kerst.jpg` — "Welkom in de kerk" / "voel je *thuis*." / tag "Familie · Elke generatie" / CTA "Kom langs" → #contact
  (Exacte lede-teksten: zie HTML.)
- Hero-foot: pager "01 / 03", progressiebalk (3px zwart segment schuift mee, .5s), adres rechts.
- Pijlknoppen 62px, **fixed** verticaal gecentreerd, alleen zichtbaar als hero ≥35% in beeld (IntersectionObserver); verborgen ≤880px.
- Auto-advance elke 7s; stopt na handmatige klik op een pijl.

### 01 · de dienst (`#dienst`) — "elke zondag, *10:30u.*"
- Grid `1.1fr .9fr`, gap 64 (≤980px 1 kolom).
- Links definitielijst (label 160px kolom, uppercase 13px #777; waarde 500 18px, sub 14px #888): Locatie, Adres, Aanvang, Parkeren, Live (YouTube-link).
- Rechts fotokaart `dienst-3.JPG`, aspect 5/6, radius 18, hover zoom 1.02→1.06 (.8s). Badge linksboven: wit pill met rode live-dot "Live op zondag".

### 02 · over ons (`#over-ons`) — "een familie onmisbaar voor *haar omgeving.*"
- About-lead: grid `.7fr 1.3fr`, gap 60, beide kolommen horizontaal én verticaal gecentreerd. Links `over-ons-3.JPG` aspect 4/5 (≤880px 16/10), rechts lead-tekst gecentreerd.
- Pillars: 3 kolommen met dunne scheidingslijnen, padding 48/36/56, min-height 280, hover bg #fafafa. Nummer, kernwoord (800 clamp(34px,3.6vw,56px)): connect. / grow. / impact., omschrijving 18px.

### 03 · voorgangers (`#leiderschap`) — "wie ons *voorgaat.*"
- 2 cards (≤980px 1 kolom), border 1px `--line`, radius 18, padding 40. Hover: border ink, translateY(-3px), schaduw.
- Ronde foto 264×264 (`Tim-en-Clau.jpg`, `John-en-Atie.jpg`), rol (rood uppercase), naam (800 clamp(28px,2.6vw,40px)), subregel, 2 alinea's, italic signatuur.

### 04 · socials (`#socials`) — "volg ons *overal.*"
- 4 kolommen (≤980px 2, ≤520px 1), cards padding 28, min-height 200, radius 18. Hover: hele card zwart, tekst wit, pijl roteert -45deg.
- Boven: platformicoon (22px, #bbb → wit bij hover) + platformnaam; pijl rechts. Onder: handle (700 24px) + subregel (14px #9a9a9a).
- Volgorde: YouTube "LIFEHOUSE Nederland" (livestream volgen en terugzien) → `youtube.com/@GKPBNederland/streams` · Facebook "LIFEHOUSE Amsterdam" · Instagram "@lifehouseams" · YouTube "LFHS Worship". Alle extern, nieuw tabblad.

### 05 · geven (`#geven`) — "samen *bouwen.*"
- Intro (lead-stijl, max 900px) met referentie "(1 Petrus 4:10)" in #888.
- 2 cards (≤880px 1 kolom), border, radius 18, padding 40:
  1. **Bouw mee met je middelen** — IBAN `NL71 INGB 0005 5114 46` (700, tabular-nums), "t.n.v. LIFEHOUSE Amsterdam", knop **Kopieer IBAN**.
  2. **Bouw mee met je gaven** — teams (media & techniek, gebed, dankoffer, crèche) + mailto hello@lifehouse.nl.

### 06 · contact (`#contact`) — "tot *zondag.*"
- Zwarte sectie. 3 kolommen: Locatie (adres), Wanneer, Schrijf ons (mailto + witte pill-CTA "Stuur een bericht", hover rood).
- Footer: © {huidig jaar} LIFEHOUSE Amsterdam — een huis voor elke generatie. Links Blog, Privacy, ANBI.

## Interactions & Behavior
- **Smooth scroll** naar ankers; `scroll-margin-top:72px` voor de fixed header.
- **Scroll-spy**: actieve nav-link op basis van `scrollY + 140` t.o.v. secties home/dienst/over-ons/geven/contact.
- **Slider**: zie Hero. State `current` (0–2), interval 7000ms.
- **Kopieer IBAN**: `navigator.clipboard.writeText('NL71INGB0005511446')` → label "Gekopieerd ✓" 1800ms → terug; fallback toont IBAN als tekst.
- **Drawer**: open/close state, Escape sluit. Tip: body-scroll locken en focus trappen (niet in prototype, wel gewenst).
- Externe links altijd `target="_blank" rel="noopener"`.

## State
- Hero: `current`, autoplay-timer, `arrowsVisible` (IntersectionObserver).
- Header: `activeSection`.
- Drawer: `open`.
- CopyIban: `copied`.

## Assets (`design/assets/` → `public/assets/`)
logo.png · worship.jpg · worship-night.jpg · kerst.jpg (hero) · dienst-3.JPG (dienst) · over-ons-3.JPG (over ons) · Tim-en-Clau.jpg · John-en-Atie.jpg (voorgangers). Ongebruikt maar aanwezig: GWGWTG.jpg, bidden.jpg, dienst-8.JPG, heilig-avondmaal.jpg.
Tip: hernoem naar lowercase `.jpg` (Vercel/Linux is hoofdlettergevoelig) en comprimeer (WebP/AVIF via `next/image`).
Social-iconen zijn inline SVG in de HTML; mag ook via een iconset (bijv. `simple-icons`).

## Aandachtspunten / opschonen
- Footer-link "Blog" wijst nog naar `blog.lifehouse.nl`; menu gebruikt `https://www.lifehouse.nl/blog/` — gelijktrekken.
- Footer-link "ANBI" wijst naar `#geven`, maar ANBI-gegevens (RSIN 856 142 517, KvK 65513495, documenten) zijn uit die sectie gehaald. ANBI-instellingen moeten deze gegevens online publiceren → aparte `/anbi`-pagina of link naar lifehouse.nl.
- Menu-nummering (drawer 01–08) wijkt af van sectielabels (01–06); bewust of gelijktrekken.
- Ongebruikte CSS in prototype (`.geven`, `.iban-card`, `.docs`, `.ident`, `.tag-strip`, `.av.red/.dark`) niet overnemen.
- Hero-slides en teksten zijn goede kandidaten voor een content-bestand (`content/*.ts` of CMS).

## Files
- `design/index.html` — volledige design-referentie (HTML/CSS/JS in één bestand)
- `design/assets/` — alle afbeeldingen
