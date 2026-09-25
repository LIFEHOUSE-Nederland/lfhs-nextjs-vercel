/**
 * Alle teksten en gegevens van de one-pager op één plek.
 * Content is Nederlands; de structuur volgt de secties uit het design.
 */

export const site = {
  name: "LIFEHOUSE Amsterdam",
  email: "hello@lifehouse.nl",
  street: "Joan Muyskenweg 20",
  city: "1096 CJ Amsterdam",
  shortAddress: "Joan Muyskenweg 20, Amsterdam",
  blogUrl: "https://www.lifehouse.nl/blog/",
  privacyUrl: "https://www.lifehouse.nl/privacyverklaring/",
  livestreamUrl: "https://www.youtube.com/@GKPBNederland/streams",
  iban: "NL71 INGB 0005 5114 46",
  ibanPlain: "NL71INGB0005511446",
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Hoofdnavigatie in de header (desktop). */
export const navItems: NavItem[] = [
  { label: "home", href: "#home" },
  { label: "dienst", href: "#dienst" },
  { label: "over ons", href: "#over-ons" },
  { label: "geven", href: "#geven" },
  { label: "contact", href: "#contact" },
  { label: "blog", href: site.blogUrl, external: true },
];

/** Secties waarop de scroll-spy de actieve navigatie bepaalt. */
export const scrollSpyIds = ["home", "dienst", "over-ons", "geven", "contact"];

/** Volledig menu in de drawer, genummerd 01–08. */
export const drawerItems: NavItem[] = [
  { label: "home", href: "#home" },
  { label: "de dienst", href: "#dienst" },
  { label: "over ons", href: "#over-ons" },
  { label: "voorgangers", href: "#leiderschap" },
  { label: "socials", href: "#socials" },
  { label: "geven", href: "#geven" },
  { label: "contact", href: "#contact" },
  { label: "blog", href: site.blogUrl, external: true },
];

export type TitlePart = { text: string; style?: "accent" | "light" };

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  /** Titel als regels; `accent` kleurt rood, `light` is de dunne cursieve variant. */
  title: TitlePart[][];
  /** Extra letter-spacing voor slide 2, zoals in het design. */
  titleLetterSpacing?: string;
  tag: string;
  lede: string;
  ctas: { label: string; href: string; ghost?: boolean }[];
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/assets/worship.jpg",
    alt: "Worship op zondagochtend bij LIFEHOUSE Amsterdam",
    eyebrow: "Lifehouse Amsterdam · sinds 1994",
    title: [
      [{ text: "een " }, { text: "thuis", style: "accent" }],
      [{ text: "voor elke" }],
      [{ text: "generatie.", style: "light" }],
    ],
    tag: "Zondag · 10:30u",
    lede: "Een Christelijk evangelische kerk met Indonesische roots — waar verbinding, groei en impact samenkomen. Elke zondag in Amsterdam Zuidoost.",
    ctas: [
      { label: "Bezoek een dienst", href: "#dienst" },
      { label: "Over ons", href: "#over-ons", ghost: true },
    ],
  },
  {
    image: "/assets/worship-night.jpg",
    alt: "Worship night bij LIFEHOUSE Amsterdam",
    eyebrow: "Onze missie",
    title: [
      [{ text: "connect." }],
      [{ text: "grow." }],
      [{ text: "impact.", style: "accent" }],
    ],
    titleLetterSpacing: "-3.8px",
    tag: "Worship · Night",
    lede: "Levens verbinden met Jezus, samen groeien als familie en een positieve impact maken op onze naasten. Drie woorden, één huis.",
    ctas: [{ label: "Lees meer", href: "#over-ons" }],
  },
  {
    image: "/assets/kerst.jpg",
    alt: "Kerstviering bij LIFEHOUSE Amsterdam — kinderen op het podium",
    eyebrow: "Welkom in de kerk",
    title: [
      [{ text: "voel je" }],
      [{ text: "thuis", style: "light" }, { text: "." }],
    ],
    tag: "Familie · Elke generatie",
    lede: "“Ik ga jullie een huis geven, dat een thuis zal zijn voor elke generatie. Zij zullen zich daar thuis voelen.” — Beit Sahur, Israël 2019.",
    ctas: [{ label: "Kom langs", href: "#contact" }],
  },
];

export type DienstRow = {
  term: string;
  value: string;
  sub?: string;
  link?: string;
};

export const dienstRows: DienstRow[] = [
  {
    term: "Locatie",
    value: "Van der Valk Hotel Amsterdam – Amstel",
    sub: "De Dam · 2^e^ verdieping",
  },
  { term: "Adres", value: site.street, sub: site.city },
  {
    term: "Aanvang",
    value: "Zondag · 10:30u",
    sub: "Inloop met koffie & thee vanaf 10:00u",
  },
  {
    term: "Parkeren",
    value: "Gratis bij het hotel",
    sub: "Of 6 minuten lopen vanaf metro Overamstel",
  },
  {
    term: "Live",
    value: "YouTube livestream →",
    link: site.livestreamUrl,
    sub: "Mis je een dienst? Kijk terug.",
  },
];

/** Markeringen: *cursief* en 2^e^ superscript — zie lib/emphasis.tsx. */
export const aboutLead =
  "LIFEHOUSE Amsterdam is een Christelijk evangelische kerk met Indonesische *roots*, waar elke generatie welkom is. We willen elk leven met Jezus Christus verbinden, samen groeien als familie en een positieve impact maken op onze naasten.";

export type Pillar = { n: string; keyword: string; value: string };

export const pillars: Pillar[] = [
  {
    n: "01",
    keyword: "connect.",
    value: "Levens verbinden met Jezus — een ontmoeting die alles verandert.",
  },
  {
    n: "02",
    keyword: "grow.",
    value: "Samen groeien als familie — door woord, gebed en echte relaties.",
  },
  {
    n: "03",
    keyword: "impact.",
    value: "Een positieve impact maken op elk leven om ons heen.",
  },
];

export type Pastor = {
  image: string;
  alt: string;
  role: string;
  name: string;
  since: string;
  paragraphs: string[];
  signature: string;
};

export const pastors: Pastor[] = [
  {
    image: "/assets/tim-en-clau.jpg",
    alt: "Timothy & Claudia",
    role: "Lead Pastors · sinds 2018",
    name: "Timothy & Claudia",
    since: "Lifehouse Amsterdam",
    paragraphs: [
      "Wij zijn gepassioneerd om een kerk te bouwen die midden in het leven staat — een plek waar je jezelf kunt zijn, groeit in geloof en samen het verschil maakt in je omgeving.",
      "We dromen van een community die Jezus volgt en zichtbaar impact maakt. Met Zijn leiding willen we altijd gaan waar God wilt gaan *(GWGWTG)*. Bij LIFEHOUSE draait het niet om perfectie, maar om echte relaties, groei en een duidelijke missie.",
    ],
    signature: "— Welkom thuis. 💛",
  },
  {
    image: "/assets/john-en-atie.jpg",
    alt: "John & Atie",
    role: "Senior Pastors · oprichters 1994",
    name: "John & Atie",
    since: "Mentors & support",
    paragraphs: [
      "Oprichters van LIFEHOUSE Amsterdam (toen nog Air Hidup). Wat begon als een roeping naar de Indonesische community in Amsterdam, groeide uit tot een kerk waar mensen van alle achtergronden samenkomen.",
      "Na jarenlang leiderschap zijn we nu op de achtergrond betrokken als mentors en support voor het team. We zijn dankbaar om te zien hoe de nieuwe generatie met visie en vuur doorgaat.",
    ],
    signature: "— Voel je thuis. ❤️",
  },
];

export type Social = {
  platform: "YouTube" | "Facebook" | "Instagram";
  handle: string;
  sub: string;
  href: string;
};

export const socials: Social[] = [
  {
    platform: "YouTube",
    handle: "LIFEHOUSE Nederland",
    sub: "Zondagdienst livestream volgen en terugzien",
    href: site.livestreamUrl,
  },
  {
    platform: "Facebook",
    handle: "LIFEHOUSE Amsterdam",
    sub: "Updates en zondagdienst livestream",
    href: "https://www.facebook.com/lifehouse.amsterdam",
  },
  {
    platform: "Instagram",
    handle: "@lifehouseams",
    sub: "Impressies van de kerk",
    href: "https://www.instagram.com/lifehouseams/",
  },
  {
    platform: "YouTube",
    handle: "LFHS Worship",
    sub: "Lofprijs en aanbiddingsmuziek",
    href: "https://www.youtube.com/@LFHSWorship/",
  },
];
