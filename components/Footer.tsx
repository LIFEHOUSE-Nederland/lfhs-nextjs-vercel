export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/60 text-sm py-8 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} LIFEHOUSE Amsterdam</p>

        <nav aria-label="Footer navigatie">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a
                href="https://blog.lifehouse.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.lifehouse.nl/privacyverklaring/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacyverklaring
              </a>
            </li>
            <li>
              <a
                href="https://www.lifehouse.nl/geven/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ANBI
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
