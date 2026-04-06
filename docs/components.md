# Component Ontwerp & Styling

## Component Map

```
components/
├── Hero.tsx            # Welkom + hoofdboodschap + quote
├── ServiceInfo.tsx     # Zondagsdienst, locatie en livestream
├── About.tsx           # Over ons, visie, missie en identiteit
├── Leadership.tsx      # Voorgangers en generatieverhaal
├── CommunityLinks.tsx  # Socials en blog verwijzingen
├── Giving.tsx          # ANBI, geven en documenten
├── Contact.tsx         # Bereikbaarheid en bezoekinformatie
├── Footer.tsx          # Footer met privacy en blog link
└── Navigation.tsx      # Sticky nav (optioneel)
```

---

## Component Specs

### 1. Hero / Welcome
- Open met `Welkom bij LIFEHOUSE Amsterdam` als duidelijke hoofdboodschap
- Combineer een warme, huiselijke intro met ruimte voor een korte geloofsquote of profetische tekst
- Gebruik een primaire CTA richting bezoek aan de zondagse dienst en een secundaire CTA voor livestream of locatie
- De hero moet voelen als uitnodigend en stedelijk, niet als corporate landing page of standaard kerksjabloon

### 2. Service Info
- Toon de zondagse kerkdienst als eerstvolgende praktische actie: tijd, venue en volledig adres
- Voeg praktische details toe: gratis parkeren op zondag, nabijheid van metro, koffie/thee rondom de dienst
- Maak livestream-kijken een duidelijke secundaire route
- Op mobiel snel scanbaar, bijvoorbeeld met compacte info-blokken

### 3. Over Ons / Missie
- Leg kort uit wie LIFEHOUSE Amsterdam is: christelijk-evangelisch, Indonesische roots, open voor elke generatie
- Gebruik `CONNECT, GROW, IMPACT` als terugkerend inhoudelijk en visueel anker
- Verwerk visie, missie en identiteit in overzichtelijke patronen, niet als lange ononderbroken tekst
- Toon: familiegericht, relevant en missionair

### 4. Leiderschap & Generaties
- Geef ruimte aan de huidige voorgangers en aan de oprichters / senior pastors
- Benadruk continuiteit tussen generaties, mentorschap en "welkom thuis"
- Portretten, korte introducties en een persoonlijke toon — geen formele bio's

### 5. Community Links
- Bundel socials, worship-content en livestream-archief in een eigen sectie of contentstrook
- Blog krijgt herkenbare plek als `LIFEHOUSE Stories`, met link naar de WordPress-subdomain
- Levendig en actueel, zonder de homepage te zwaar te maken

### 6. Giving / ANBI
- Transparante sectie voor geven, ANBI-status, bankgegevens en officiële documenten
- Documentlinks (beleidsplan, jaarbegroting, jaarverslagen, privacyverklaring) logisch gegroepeerd
- Uitstraling: vertrouwen en zorgvuldigheid, niet alleen administratieve tekst

### 7. Contact & Bezoek
- Herhaal locatie en bereikbaarheid aan het einde van de pagina
- Voeg contactadres, routehulp en een "plan je bezoek"-afsluiter toe
- Map-embed alleen als het performance en UX niet schaadt

### 8. Footer
- Compact maar volledig: copyright, privacy, ANBI/documenten en blog link
- **Blog link:** primair `href="https://blog.lifehouse.nl"` — alleen bij fallback `href="/blog"`

---

## Styling Richting

- Moderne editorial one-pager: duidelijke hiërarchie, royale spacing, sterke typografie
- **LIFEHOUSE kleuren:** rood = accentkleur, wit = rustpunt, donkergrijs = dragende neutrale kleur (zie CSS-variabelen in `globals.css`)
- Vermijd: paarse gradients, standaard SaaS-cards, brave "kerktemplate" uitstraling
- Kies voor: warme gastvrije uitstraling — thuisgevoel, aanbidding, stad en generaties
- Subtiele animaties en scroll-overgangen zijn oké, maar performance en rust zijn leidend
- Liever minder elementen met meer richting dan veel losse blokken

---

## Content Structuur (voorbeeld)

```typescript
// lib/content.ts
export const content = {
  hero: {
    title: "Welkom bij LIFEHOUSE Amsterdam",
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
    ]
  },
  contact: {
    address: "...",
    email: "...",
    phone: "..."
  }
}
```
