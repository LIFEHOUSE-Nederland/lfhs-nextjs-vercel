import Image from "next/image";
import { dienstRows } from "@/content/site";
import { renderText } from "@/lib/emphasis";
import styles from "./Dienst.module.css";

export default function Dienst() {
  return (
    <section id="dienst" className="section">
      <div className="section-head">
        <p className="section-no">01 · de dienst</p>
        <h2 className="h2">
          elke zondag, <span className="lt">10:30u.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        <dl className={styles.list}>
          {dienstRows.map((row) => (
            <div key={row.term} className={styles.row}>
              <dt>{row.term}</dt>
              <dd>
                {row.link ? (
                  <a href={row.link} target="_blank" rel="noopener">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
                {row.sub && <small>{renderText(row.sub)}</small>}
              </dd>
            </div>
          ))}
        </dl>

        <div className={styles.card}>
          <Image
            src="/assets/dienst-3.jpg"
            alt="LIFEHOUSE zondagdienst — gezamenlijke worship"
            fill
            sizes="(max-width: 980px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
          <span className={styles.badge}>
            <span className={styles.live} />
            Live op zondag
          </span>
        </div>
      </div>
    </section>
  );
}
