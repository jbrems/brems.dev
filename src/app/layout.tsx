import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "../components/navigation/Navigation";

export const metadata: Metadata = {
  title: {
    template: '%s | Brems.dev',
    default: 'Jonas Brems - Web developer',
  },
  description: "My very own place on the world wide web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div style={{ padding: '0 1em' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
