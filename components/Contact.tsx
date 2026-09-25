import { site } from "@/content/site";
import { ArrowRightIcon } from "./icons";
import styles from "./Contact.module.css";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-head">
        <p className="section-no">06 · contact</p>
        <h2 className="h2">
          tot <span className="lt">zondag.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <h3>Locatie</h3>
          <address>
            Van der Valk Hotel
            <br />
            Amsterdam – Amstel
            <br />
            De Dam · 2<sup>e</sup> verdieping
            <br />
            {site.street}
            <br />
            {site.city}
          </address>
        </div>

        <div className={styles.col}>
          <h3>Wanneer</h3>
          <p>
            Elke zondag
            <br />
            10:30u — inloop 10:00u
            <br />
            <span className={styles.dim}>Gratis parkeren · 6 min vanaf metro Overamstel</span>
          </p>
        </div>

        <div className={styles.col}>
          <h3>Schrijf ons</h3>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <a className={styles.cta} href={`mailto:${site.email}`}>
            Stuur een bericht
            <ArrowRightIcon />
          </a>
        </div>
      </div>

      <div className={styles.foot}>
        <span>© {year} LIFEHOUSE Amsterdam — een huis voor elke generatie.</span>
        <span className={styles.footLinks}>
          <a href={site.blogUrl} target="_blank" rel="noopener">
            Blog
          </a>
          <a href={site.privacyUrl} target="_blank" rel="noopener">
            Privacy
          </a>
          <a href="#geven">ANBI</a>
        </span>
      </div>
    </section>
  );
}
