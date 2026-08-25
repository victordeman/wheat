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
  title: {
    default: "Project WHEAT-NESS | Federal Republic of Nigeria",
    template: "%s | Project WHEAT-NESS",
  },
  description:
    "Nigeria's official national programme to optimise the wheat-based consumer foods value chain, lower costs, raise milling utilisation, and establish a self-renewing development fund.",
  openGraph: {
    title: "Project WHEAT-NESS | Federal Republic of Nigeria",
    description:
      "Nigeria's official national programme to optimise the wheat-based consumer foods value chain, lower costs, raise milling utilisation, and establish a self-renewing development fund.",
    url: "https://projectwheatness.gov.ng",
    siteName: "Project WHEAT-NESS",
    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand-gold focus:text-brand-dark focus:font-bold focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
