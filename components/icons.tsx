/** Inline SVG icons uit het design. Geen icon-library nodig. */

type IconProps = { className?: string };

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12 H19" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}

export function ArrowBackIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M14 6 L8 12 L14 18" />
      <path d="M8 12 L20 12" />
    </svg>
  );
}

export function ArrowForwardIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M10 6 L16 12 L10 18" />
      <path d="M4 12 L16 12" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M7 17 L17 7" />
      <path d="M9 7 H17 V15" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="M4 8 L20 8 M4 14 L20 14" transform="rotate(-25 12 11)" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15 V5 a2 2 0 0 1 2 -2 H15" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.5 7.2c-.25-.94-.99-1.68-1.93-1.93C18.88 4.8 12 4.8 12 4.8s-6.88 0-8.57.47c-.94.25-1.68.99-1.93 1.93C1.03 8.89 1.03 12 1.03 12s0 3.11.47 4.8c.25.94.99 1.68 1.93 1.93 1.69.47 8.57.47 8.57.47s6.88 0 8.57-.47c.94-.25 1.68-.99 1.93-1.93.47-1.69.47-4.8.47-4.8s0-3.11-.47-4.8zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.12 8.04H17V5.14C16.67 5.1 15.55 5 14.25 5 11.54 5 9.69 6.66 9.69 9.7v2.34H7v3.24h2.69V23h3.3v-7.72h2.58l.41-3.24h-2.99V10.02c0-.94.26-1.58 1.61-1.58z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
