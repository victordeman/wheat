"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { ImpactSection } from "@/components/sections/ImpactSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        <ChallengeSection />
        <CampaignSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
}
