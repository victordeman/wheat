import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { ParallelTracksSection } from "@/components/sections/ParallelTracksSection";

export const metadata: Metadata = {
  title: "The Programme",
  description:
    "Explore the four core objectives, dual-track financing architecture, and parallel milling & agronomy tracks of Project WHEAT-NESS.",
};

export default function ProgrammePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main id="main-content" className="flex-grow">
        <ObjectivesSection />
        <FinancingSection />
        <ParallelTracksSection />
      </main>
      <Footer />
    </div>
  );
}
