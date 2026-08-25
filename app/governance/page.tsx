"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GovernanceSection } from "@/components/sections/GovernanceSection";

export default function GovernancePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  );
}
