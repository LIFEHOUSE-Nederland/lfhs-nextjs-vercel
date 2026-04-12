export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Contact</h2>

        <address className="not-italic space-y-2">
          <p>Van der Valk Hotel Amsterdam - Amstel</p>
          <p>Joan Muyskenweg 20</p>
          <p>1096 CJ Amsterdam</p>
        </address>

        <p>
          E-mail:{" "}
          <a href="mailto:hello@lifehouse.nl" className="underline">
            hello@lifehouse.nl
          </a>
        </p>

        <p>
          We verwelkomen je graag op zondag. Kom gerust een keer langs!
        </p>
      </div>
    </section>
  );
}
