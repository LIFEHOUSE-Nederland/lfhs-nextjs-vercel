"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { CopyIcon } from "./icons";
import styles from "./Geven.module.css";

const RESET_MS = 1800;

export default function CopyIban() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.ibanPlain);
      setStatus("copied");
      timerRef.current = window.setTimeout(() => setStatus("idle"), RESET_MS);
    } catch {
      // Zonder clipboard-toegang tonen we het nummer zodat het handmatig kan.
      setStatus("failed");
    }
  }

  const label =
    status === "copied"
      ? "Gekopieerd ✓"
      : status === "failed"
        ? `IBAN: ${site.ibanPlain}`
        : "Kopieer IBAN";

  return (
    <button className={styles.copy} type="button" onClick={copy}>
      <CopyIcon />
      <span aria-live="polite">{label}</span>
    </button>
  );
}
