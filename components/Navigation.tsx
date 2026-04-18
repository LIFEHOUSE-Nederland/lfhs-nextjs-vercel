// Navigation links naar elke sectie op de pagina
const links = [
  { label: "Dienst", href: "#dienst" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Leiderschap", href: "#leiderschap" },
  { label: "Community", href: "#community" },
  { label: "Geven", href: "#geven" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav
      id="navigation"
      aria-label="Hoofdnavigatie"
      className="sticky top-0 z-50 bg-[var(--color-brand-gray)]"
    >
      <div className="max-w-3xl mx-auto px-4">
        <ul className="flex gap-6 overflow-x-auto py-3 list-none m-0">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="text-sm text-white whitespace-nowrap no-underline hover:text-[var(--color-brand-red)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
