import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const siteUrl = "https://lifehouse.nl";

const description =
  "LIFEHOUSE Amsterdam is een Christelijk evangelische kerk met Indonesische roots, waar elke generatie welkom is. Elke zondag om 10:30u in Amsterdam Zuidoost.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LIFEHOUSE Amsterdam — een thuis voor elke generatie",
  description,
  keywords: ["kerk", "christelijke gemeenschap", "Amsterdam", "eredienst", "lifehouse"],

  openGraph: {
    title: "LIFEHOUSE Amsterdam",
    description,
    url: siteUrl,
    siteName: site.name,
    images: [
      { url: "/assets/worship.jpg", width: 2000, height: 1119, alt: "LIFEHOUSE Amsterdam" },
    ],
    locale: "nl_NL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LIFEHOUSE Amsterdam",
    description,
    images: ["/assets/worship.jpg"],
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
  name: site.name,
  description,
  url: siteUrl,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: "Amsterdam",
    postalCode: "1096 CJ",
    addressCountry: "NL",
  },
  openingHours: "Su 10:30-12:00",
  sameAs: [
    "https://www.instagram.com/lifehouseams/",
    "https://www.facebook.com/lifehouse.amsterdam",
    "https://www.youtube.com/@GKPBNederland/streams",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={manrope.variable}>
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
