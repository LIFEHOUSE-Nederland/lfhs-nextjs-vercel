"use client";

import Image from "next/image";
import { Fragment, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { heroSlides, site, type TitlePart } from "@/content/site";
import { ArrowBackIcon, ArrowForwardIcon, ArrowRightIcon } from "./icons";
import styles from "./Hero.module.css";

const AUTOPLAY_MS = 7000;

/** Breedte van elk segment in de voortgangsbalk (som = 100%). */
const BAR_SEGMENTS = [
  { left: "0", width: "33%" },
  { left: "33%", width: "34%" },
  { left: "67%", width: "33%" },
];

function renderTitle(lines: TitlePart[][]) {
  return lines.map((parts, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {parts.map((part, partIndex) => {
        if (part.style === "accent") {
          return (
            <em key={partIndex} className={styles.accent}>
              {part.text}
            </em>
          );
        }
        if (part.style === "light") {
          return (
            <span key={partIndex} className={styles.light}>
              {part.text}
            </span>
          );
        }
        return <Fragment key={partIndex}>{part.text}</Fragment>;
      })}
    </Fragment>
  ));
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance; stopt zodra de bezoeker zelf navigeert.
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(
      () => setCurrent((index) => (index + 1) % heroSlides.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [autoplay]);

  // Pijlen alleen tonen zolang de hero voldoende in beeld is.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setArrowsVisible(entry.isIntersecting && entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6, 1] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  function navigate(direction: -1 | 1) {
    setAutoplay(false);
    goTo(current + direction);
  }

  const segment = BAR_SEGMENTS[current];

  return (
    <>
      <div className={`${styles.arrows} ${arrowsVisible ? styles.visible : ""}`}>
        <button
          className={styles.arrow}
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Vorige slide"
        >
          <ArrowBackIcon />
        </button>
        <button
          className={styles.arrow}
          type="button"
          onClick={() => navigate(1)}
          aria-label="Volgende slide"
        >
          <ArrowForwardIcon />
        </button>
      </div>

      <section id="home" className={styles.hero} ref={heroRef} aria-label="Welkom">
        <div className={styles.stage}>
          {heroSlides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.image}
                className={`${styles.slide} ${isActive ? styles.active : ""}`}
                inert={!isActive}
              >
                <figure className={styles.figure}>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.overlay}>
                    <div className="eyebrow">{slide.eyebrow}</div>
                    {/* Alleen de zichtbare slide draagt de h1: precies één per pagina,
                        en nooit verborgen voor screenreaders. */}
                    {isActive ? (
                      <h1
                        className={styles.title}
                        style={{ letterSpacing: slide.titleLetterSpacing }}
                      >
                        {renderTitle(slide.title)}
                      </h1>
                    ) : (
                      <p
                        className={styles.title}
                        style={{ letterSpacing: slide.titleLetterSpacing }}
                      >
                        {renderTitle(slide.title)}
                      </p>
                    )}
                  </div>
                  <span className={styles.tag}>{slide.tag}</span>
                </figure>

                <div>
                  <p className={styles.lede}>{slide.lede}</p>
                  <div className={styles.cta}>
                    {slide.ctas.map((cta) => (
                      <a
                        key={cta.label}
                        href={cta.href}
                        className={cta.ghost ? "btn ghost" : "btn"}
                      >
                        {cta.label}
                        {!cta.ghost && <ArrowRightIcon />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.foot}>
          <div className={styles.pager}>
            <span className={styles.num}>{String(current + 1).padStart(2, "0")}</span> /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </div>
          <div
            className={styles.bar}
            style={
              {
                "--bar-left": segment.left,
                "--bar-width": segment.width,
              } as CSSProperties
            }
          />
          <div className={styles.meta}>
            <span>{site.shortAddress}</span>
          </div>
        </div>
      </section>
    </>
  );
}
