export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-16 px-4 bg-[var(--color-brand-gray)] text-[var(--color-brand-white)]">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-2xl font-bold">Contact & Bezoek</h2>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-brand-red)] text-lg" aria-hidden="true">📍</span>
            <h3 className="font-bold">Locatie</h3>
            <address className="not-italic text-sm leading-relaxed opacity-90">
              Van der Valk Hotel Amsterdam – Amstel<br />
              De Dam (2e verdieping)<br />
              Joan Muyskenweg 20<br />
              1096 CJ Amsterdam
            </address>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-brand-red)] text-lg" aria-hidden="true">🕙</span>
            <h3 className="font-bold">Wanneer</h3>
            <p className="text-sm opacity-90">Elke zondag om 10:30u</p>
            <p className="text-sm opacity-90">Parkeren op zondag gratis</p>
            <p className="text-sm opacity-90">6 min. lopen van metro Overamstel</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-brand-red)] text-lg" aria-hidden="true">✉️</span>
            <h3 className="font-bold">Schrijf ons</h3>
            <a
              href="mailto:hello@lifehouse.nl"
              className="text-sm underline opacity-90 hover:opacity-100"
            >
              hello@lifehouse.nl
            </a>
          </div>
        </div>

        <p className="text-sm opacity-75 border-t border-white/20 pt-6">
          We verwelkomen je graag — kom gerust een keer langs. Er is altijd koffie.
        </p>
      </div>
    </section>
  );
}
