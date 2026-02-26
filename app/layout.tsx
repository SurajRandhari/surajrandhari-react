import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suraj Randhari - Portfolio",
  description: "Full Stack Developer & UI Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
