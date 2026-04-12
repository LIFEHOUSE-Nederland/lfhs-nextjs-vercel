export default function Giving() {
  return (
    <section id="geven" aria-label="Geven" className="py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-2xl font-bold">Geven</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">ANBI</h3>
          <p>
            Juridisch gezien is LIFEHOUSE Amsterdam een kerkgenootschap met een
            ANBI-status dat bij de Kamer van Koophandel staat ingeschreven onder
            &lsquo;LIFEHOUSE AMSTERDAM&rsquo;. Donaties zijn dus fiscaal
            aftrekbaar.
          </p>
        </div>

        <div className="space-y-4">
          <dl className="space-y-2">
            <div>
              <dt className="font-bold">Naam</dt>
              <dd>LIFEHOUSE Amsterdam</dd>
            </div>
            <div>
              <dt className="font-bold">RSIN</dt>
              <dd>856 142 517</dd>
            </div>
            <div>
              <dt className="font-bold">Vestigingsplaats</dt>
              <dd>Amsterdam</dd>
            </div>
            <div>
              <dt className="font-bold">KvK-nummer</dt>
              <dd>65513495</dd>
            </div>
            <div>
              <dt className="font-bold">Contact</dt>
              <dd>
                <a href="mailto:hello@lifehouse.nl" className="underline">
                  hello@lifehouse.nl
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Bankgegevens</h3>
          <dl className="space-y-2">
            <div>
              <dt className="font-bold">Tenaamstelling</dt>
              <dd>LIFEHOUSE Amsterdam</dd>
            </div>
            <div>
              <dt className="font-bold">IBAN</dt>
              <dd>NL71 INGB 000 5511 446</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Doelstelling</h3>
          <p>
            LIFEHOUSE Amsterdam heeft als doel om mensen tot geloof in Jezus
            Christus te brengen. Wij streven om een relevante lokale kerk te
            zijn, onmisbaar voor haar omgeving. Dit willen we bereiken door een
            ieder met Jezus te verbinden, samen als familie te groeien en een
            positieve impact te hebben op onze naasten. Onze grondslag en
            doelstelling staan uitgewerkt in ons beleidsplan dat je hieronder kan
            vinden.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Documenten</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://www.lifehouse.nl/wp-content/uploads/2024/09/20240423-Beleidsplan-LIFEHOUSE-Amsterdam-versie-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Beleidsplan
              </a>
            </li>
            <li>
              <a
                href="https://www.lifehouse.nl/wp-content/uploads/2024/09/20240424-ANBI-Lifehouse-Amsterdam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ANBI informatie
              </a>
            </li>
            <li>
              Financiele jaarverslagen –{" "}
              <a
                href="https://www.lifehouse.nl/geven/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                bekijk op lifehouse.nl
              </a>
            </li>
            <li>
              Jaarbegroting 2026 – <em>nog niet beschikbaar</em>
            </li>
            <li>
              <a
                href="https://www.lifehouse.nl/privacyverklaring/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Privacyverklaring
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
