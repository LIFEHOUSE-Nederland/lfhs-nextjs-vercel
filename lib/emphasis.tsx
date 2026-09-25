import { Fragment, type ReactNode } from "react";

const MARKERS = /(\*[^*]+\*|\^[^^]+\^)/g;

/**
 * Rendert tekst met twee markeringen, zodat content-bestanden geen HTML bevatten:
 * `*cursief*` wordt <em> en `^e^` wordt superscript (bijv. "2^e^ verdieping").
 */
export function renderText(text: string): ReactNode[] {
  return text.split(MARKERS).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("^") && part.endsWith("^")) {
      return <sup key={index}>{part.slice(1, -1)}</sup>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
