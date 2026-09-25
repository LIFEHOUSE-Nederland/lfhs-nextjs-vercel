"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, scrollSpyIds } from "@/content/site";
import Drawer from "./Drawer";
import { MenuIcon } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState(scrollSpyIds[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: de sectie die het dichtst boven de leesrand ligt is actief.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY + 140;
      let active = scrollSpyIds[0];
      for (const id of scrollSpyIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= y) active = id;
      }
      setActiveSection(active);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <a href="#home" className={styles.brand} aria-label="LIFEHOUSE home">
          <Image src="/assets/logo.png" alt="" width={22} height={22} priority />
          <span>lifehouse</span>
        </a>

        <nav className={styles.nav} aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.href === `#${activeSection}` ? styles.active : undefined}
              aria-current={item.href === `#${activeSection}` ? "true" : undefined}
              {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              <span className={styles.dot} />
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.menuBtn}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon />
        </button>
      </header>

      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
