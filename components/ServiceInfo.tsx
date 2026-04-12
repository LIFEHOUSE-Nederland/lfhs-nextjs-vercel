export default function ServiceInfo() {
  return (
    <section id="dienst" aria-label="Dienst informatie" className="py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Onze kerkdienst</h2>

        <p>Elke zondag vanaf 10:30u in De Dam (2e verdieping).</p>

        <address className="not-italic">
          Van der Valk Hotel Amsterdam - Amstel
          <br />
          Joan Muyskenweg 20
          <br />
          1096 CJ Amsterdam
        </address>

        <ul className="list-disc pl-6 space-y-1">
          <li>Parkeren nabij het hotel is op zondag gratis</li>
          <li>6 minuten lopen vanaf metrostation Overamstel</li>
        </ul>

        <p>
          Voor en na de dienst is er gelegenheid voor koffie en thee ☕️
        </p>

        <p>
          Je kunt onze diensten ook live bekijken via{" "}
          <a
            href="https://www.youtube.com/@GKPBNederland/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
