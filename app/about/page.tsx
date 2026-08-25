import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { ImpactSection } from "@/components/sections/ImpactSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Understand the national economic challenge, baseline import dependency data, and Made-in-Nigeria strategy of Project WHEAT-NESS.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main id="main-content" className="flex-grow">
        <ChallengeSection />
        <CampaignSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
}
