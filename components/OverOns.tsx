import Image from "next/image";
import { aboutLead, pillars } from "@/content/site";
import { renderText } from "@/lib/emphasis";
import styles from "./OverOns.module.css";

export default function OverOns() {
  return (
    <section id="over-ons" className="section">
      <div className="section-head">
        <p className="section-no">02 · over ons</p>
        <h2 className="h2">
          een familie
          <br />
          onmisbaar voor <span className="lt">haar omgeving.</span>
        </h2>
      </div>

      <div className={styles.aboutLead}>
        <div className={styles.leadImage}>
          <Image
            src="/assets/over-ons-3.jpg"
            alt="LIFEHOUSE Amsterdam — over ons"
            fill
            sizes="(max-width: 880px) 100vw, 30vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p>{renderText(aboutLead)}</p>
      </div>

      <div className={styles.pillars}>
        {pillars.map((pillar) => (
          <article key={pillar.keyword} className={styles.pillar}>
            <span className={styles.n}>{pillar.n}</span>
            <h3 className={styles.k}>{pillar.keyword}</h3>
            <p className={styles.v}>{pillar.value}</p>
            <span className={styles.arr} aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
