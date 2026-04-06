# SEO & Performance

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95-100 |
| Lighthouse Accessibility | 95-100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| LCP (Largest Contentful Paint) | <2.5s |
| FID (First Input Delay) | <100ms |
| CLS (Cumulative Layout Shift) | <0.1 |

Optimalisatietechnieken die dit mogelijk maken:
- Static HTML (geen hydration delay)
- Optimized images (WebP, lazy loading)
- Minimal JavaScript
- CSS tree-shaking via Tailwind
- CDN edge caching via Vercel

---

## Metadata (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: 'LIFEHOUSE Amsterdam - Welkom',
  description: 'Welkom bij LIFEHOUSE Amsterdam. Een levendige christelijke gemeenschap waar iedereen welkom is.',
  keywords: ['kerk', 'christelijke gemeenschap', 'Amsterdam', 'eredienst'],

  openGraph: {
    title: 'LIFEHOUSE Amsterdam',
    description: '...',
    url: 'https://lifehouse.nl',
    siteName: 'LIFEHOUSE Amsterdam',
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

---

## Structured Data (JSON-LD)

Gebruik Schema.org `Church` markup in `app/layout.tsx` of `app/page.tsx`:

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'LIFEHOUSE Amsterdam',
  description: '...',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '...',
    addressLocality: 'Amsterdam',
    postalCode: '...',
    addressCountry: 'NL'
  },
  telephone: '...',
  url: 'https://lifehouse.nl',
}
```

Embed in de HTML via:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

## Sitemap

Automatisch gegenereerd via Next.js (`app/sitemap.ts`):

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://lifehouse.nl',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

---

## Pre-launch SEO Checklist

- [ ] Lighthouse score 95+ op alle categorieën
- [ ] Mobile responsive (iPhone + Android)
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] Blog link werkt correct
- [ ] Images geoptimaliseerd (WebP)
- [ ] Sitemap.xml accessible via `/sitemap.xml`
- [ ] robots.txt geconfigureerd
- [ ] Meta tags preview correct (LinkedIn, Twitter)
- [ ] Google Search Console verified
