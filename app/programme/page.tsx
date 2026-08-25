"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { ParallelTracksSection } from "@/components/sections/ParallelTracksSection";

export default function ProgrammePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        <ObjectivesSection />
        <FinancingSection />
        <ParallelTracksSection />
      </main>
      <Footer />
    </div>
  );
}
