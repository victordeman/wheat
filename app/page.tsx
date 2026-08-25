"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { FinancingSection } from "@/components/sections/FinancingSection";
import { GovernanceSection } from "@/components/sections/GovernanceSection";
import { ParallelTracksSection } from "@/components/sections/ParallelTracksSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { PathwaysSection } from "@/components/sections/PathwaysSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [selectedPathway, setSelectedPathway] = useState<string>("public");

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ChallengeSection />
        <ObjectivesSection />
        <FinancingSection />
        <GovernanceSection />
        <ParallelTracksSection />
        <ImpactSection />
        <CampaignSection />
        <PathwaysSection onSelectPathway={(p) => setSelectedPathway(p)} />
        <ContactSection defaultPathway={selectedPathway} />
      </main>
      <Footer />
    </div>
  );
}
