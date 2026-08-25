import { Metadata } from "next";
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AltPageClient } from "@/components/sections/AltPageClient";

export const metadata: Metadata = {
  title: "Alternate View",
  description:
    "Institutional high-contrast dark theme overview of Project WHEAT-NESS baseline stats, objectives, governance, and pathways.",
};

export default function AltPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0D0F0D] text-gray-100 selection:bg-brand-gold selection:text-brand-dark">
      <Header />
      <main id="main-content" className="flex-grow space-y-16 pb-20">
        <AltPageClient />
      </main>
      <Footer />
    </div>
  );
}
