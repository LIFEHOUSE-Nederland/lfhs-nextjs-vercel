import Image from "next/image";
import { pastors } from "@/content/site";
import { renderText } from "@/lib/emphasis";
import styles from "./Voorgangers.module.css";

export default function Voorgangers() {
  return (
    <section id="leiderschap" className="section">
      <div className="section-head">
        <p className="section-no">03 · voorgangers</p>
        <h2 className="h2">
          wie ons <span className="lt">voorgaat.</span>
        </h2>
      </div>

      <div className={styles.pastors}>
        {pastors.map((pastor) => (
          <article key={pastor.name} className={styles.pastor}>
            <div className={styles.photo}>
              <Image src={pastor.image} alt={pastor.alt} width={264} height={264} />
            </div>
            <div>
              <p className={styles.role}>{pastor.role}</p>
              <h3 className={styles.name}>{pastor.name}</h3>
              <p className={styles.since}>{pastor.since}</p>
            </div>
            {pastor.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={styles.body}>
                {renderText(paragraph)}
              </p>
            ))}
            <p className={styles.sig}>{pastor.signature}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
