import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIFEHOUSE Amsterdam",
  description: "Statische one-pager basis voor LIFEHOUSE Amsterdam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
