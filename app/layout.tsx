import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://lifehouse.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LIFEHOUSE Amsterdam – Welkom",
  description:
    "Welkom bij LIFEHOUSE Amsterdam. Een levendige christelijke gemeenschap waar iedereen welkom is. Elke zondag om 10:30u.",
  keywords: ["kerk", "christelijke gemeenschap", "Amsterdam", "eredienst", "lifehouse"],

  openGraph: {
    title: "LIFEHOUSE Amsterdam",
    description:
      "Een levendige christelijke gemeenschap waar iedereen welkom is. Elke zondag om 10:30u.",
    url: siteUrl,
    siteName: "LIFEHOUSE Amsterdam",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "LIFEHOUSE Amsterdam" }],
    locale: "nl_NL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LIFEHOUSE Amsterdam",
    description: "Een levendige christelijke gemeenschap waar iedereen welkom is.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "LIFEHOUSE Amsterdam",
  description:
    "Een levendige christelijke gemeenschap waar iedereen welkom is. Elke zondag om 10:30u.",
  url: siteUrl,
  email: "hello@lifehouse.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Joan Muyskenweg 20",
    addressLocality: "Amsterdam",
    postalCode: "1096 CJ",
    addressCountry: "NL",
  },
  openingHours: "Su 10:30-12:00",
  sameAs: ["https://www.instagram.com/lifehouseamsterdam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
