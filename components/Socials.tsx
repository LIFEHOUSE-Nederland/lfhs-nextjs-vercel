import type { ReactElement } from "react";
import { socials, type Social } from "@/content/site";
import { ArrowUpRightIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "./icons";
import styles from "./Socials.module.css";

const platformIcons = {
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} satisfies Record<Social["platform"], (props: { className?: string }) => ReactElement>;

export default function Socials() {
  return (
    <section id="socials" className="section">
      <div className="section-head">
        <p className="section-no">04 · socials</p>
        <h2 className="h2">
          volg ons
          <br />
          <span className="lt">overal.</span>
        </h2>
      </div>

      <div className={styles.socials}>
        {socials.map((social) => {
          const Icon = platformIcons[social.platform];
          return (
            <a
              key={social.href + social.handle}
              className={styles.social}
              href={social.href}
              target="_blank"
              rel="noopener"
            >
              <div className={styles.top}>
                <span className={styles.plat}>
                  <Icon className={styles.brand} />
                  <span className={styles.platform}>{social.platform}</span>
                </span>
                <ArrowUpRightIcon className={styles.arrow} />
              </div>
              <div>
                <div className={styles.handle}>{social.handle}</div>
                <div className={styles.sub}>{social.sub}</div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
