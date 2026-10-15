import type { Metadata } from "next";
import { Fraunces, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/LanguageContext";

const display = Fraunces({ variable: "--font-display", subsets: ["latin"], weight: ["400", "600", "700", "900"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahra Chibane — Marketing & Communication Project Manager",
  description:
    "Portfolio of Zahra Chibane, Marketing & Communications project manager in Paris. SFR, TBWA, Third Advertising. Seeking a 1-year apprenticeship from Sept 2026.",
  keywords: ["Zahra Chibane", "marketing", "communication", "cheffe de projet", "portfolio", "alternance"],
  openGraph: {
    title: "Zahra Chibane — Create, Lead, Tell Stories",
    description: "Marketing & Communication portfolio — 50+ videos, 400 surveyed, 4 launches. Available Sept 2026.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body suppressHydrationWarning className="grain min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
