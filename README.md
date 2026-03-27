# LFHS Website

Moderne kerkwebsite landing page, naast bestaande aparte blog. In feite dus twee volledig aparte websites: 
* nieuwe website voor **landing page**: gebouwd met *Next.js* en gehost op *Vercel*
* oude website voor de **blog**: gebouwd met *Wordpress* en gehost op *Vimexx*

## Tech Stack

| Onderdeel | Technologie |
|---|---|
| Frontend | Next.js (Static Export) |
| Hosting & CDN | Vercel (Global Edge Network) |
| SSL | Automatisch via Let's Encrypt |
| DNS | Vimexx |
| Blog | WordPress op Vimexx Hosting |
| Database (blog) | MySQL (via Vimexx) |

## Architectuur

```mermaid
flowchart TD
    DEV[Developer]
    GH[GitHub Repository - waar code staat]
    VC[Vercel - website hosting]
    SITE[Next.js - landing page website]
    DA[DirectAdmin - server beheer]
    WB[Wordpress - website beheer]
    BS[Blogschrijver]
    BLOG[Wordpress - Blog]

    DEV --> GH
    GH --> VC
    VC --> SITE
    DA --> WB
    WB --> BLOG
    BS --> WB
    DEV --> DA

    %% Classes
    classDef dev fill:#E3F2FD,stroke:#1E88E5,color:#0D47A1;
    classDef infra fill:#E8F5E9,stroke:#43A047,color:#1B5E20;
    classDef web fill:#FFF3E0,stroke:#FB8C00,color:#E65100;

    %% Assign
    class DEV,BS dev;
    class GH,VC,SITE,DA,WB infra;
    class SITE,BLOG web;
```
🔵 Mensen
🟢 Platform
🟠 Website

## Hoe werkt de deployment?

1. De developer pusht code naar de **GitHub repository**
2. Vercel detecteert de push en start automatisch een **build**
3. Next.js genereert statische bestanden (HTML/CSS/JS) via `next export`
4. De statische bestanden worden uitgerold naar Vercel's **globaal CDN** (100+ edge locaties)
5. Bezoekers worden via DNS (Vimexx) naar het dichtstbijzijnde CDN-punt gerouteerd

## DNS Configuratie (Vimexx)

| Record | Waarde | Doel |
|---|---|---|
| `A` / `CNAME` (root) | `cname.vercel-dns.com` | Hoofdsite → Vercel |
| `CNAME` (www) | `cname.vercel-dns.com` | www → Vercel |
| `A` of `CNAME` (blog) | Vimexx IP / subdomein | Blog → WordPress |

## Lokaal ontwikkelen

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Productie build testen
npm run build
npm run start
```

## Projectdoelstellingen

- **Prestaties**: Lighthouse score 95–100, sub-seconde laadtijden
- **Kosten**: €0–5/maand (Vercel Free Tier)
- **Veiligheid**: Minimaal aanvalsoppervlak dankzij statische bestanden
- **Beheer**: WordPress voor contentbeheer blog door niet-technische teamleden
