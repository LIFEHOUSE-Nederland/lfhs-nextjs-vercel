import { site } from "@/content/site";
import CopyIban from "./CopyIban";
import styles from "./Geven.module.css";

export default function Geven() {
  return (
    <section id="geven" className="section">
      <div className="section-head">
        <p className="section-no">05 · geven</p>
        <h2 className="h2">
          samen <span className="lt">bouwen.</span>
        </h2>
      </div>

      <p className={styles.intro}>
        Een kerk is geen gebouw maar een gemeenschap die samen bouwt, ieder met wat hij of zij
        ontvangen heeft. <span className={styles.ref}>(1 Petrus 4:10)</span>
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.label}>Bouw mee met je middelen</h3>
          <p>Giften en tienden kunnen worden geschonken via:</p>
          <div className={styles.iban}>{site.iban}</div>
          <div className={styles.row}>
            <span className={styles.small}>t.n.v. LIFEHOUSE Amsterdam</span>
            <CopyIban />
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.label}>Bouw mee met je gaven</h3>
          <p>Help mee in een team zoals media &amp; techniek, gebed, dankoffer, crèche, etc.</p>
          <p>
            Mail naar <a href={`mailto:${site.email}`}>{site.email}</a> of praat erover op zondag.
          </p>
        </div>
      </div>
    </section>
  );
}
