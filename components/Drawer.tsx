"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { drawerItems, site } from "@/content/site";
import { CloseIcon } from "./icons";
import styles from "./Drawer.module.css";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function Drawer({ open, onClose }: DrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape sluit het menu; body-scroll blijft vergrendeld zolang het open is.
  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      // Houd focus binnen het paneel.
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={`${styles.drawer} ${open ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
    >
      <button className={styles.bg} type="button" aria-label="Sluit menu" onClick={onClose} />
      <aside className={styles.panel} ref={panelRef}>
        <div className={styles.head}>
          <span className={styles.brand}>
            <Image src="/assets/logo.png" alt="" width={22} height={22} />
            <span>lifehouse</span>
          </span>
          <button
            className={styles.close}
            type="button"
            onClick={onClose}
            aria-label="Sluit menu"
            ref={closeRef}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className={styles.nav} aria-label="Volledig menu">
          {drawerItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              <span className={styles.n}>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.foot}>
          <span>{site.email}</span>
          <span>{site.shortAddress}</span>
        </div>
      </aside>
    </div>
  );
}
