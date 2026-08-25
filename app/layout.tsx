import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Project WHEAT-NESS | Federal Republic of Nigeria",
  description:
    "Wheat-Based Consumer Foods Value Chain Optimisation and Cost Competitiveness Programme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-canvas text-brand-text font-sans selection:bg-brand-gold selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
