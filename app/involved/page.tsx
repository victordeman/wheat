"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PathwaysSection } from "@/components/sections/PathwaysSection";
import { ContactFormData } from "@/lib/validation";

export default function InvolvedPage() {
  const router = useRouter();

  const handleSelectPathway = (pathway: string) => {
    router.push(`/contact?pathway=${pathway}`);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        <PathwaysSection onSelectPathway={handleSelectPathway} />
      </main>
      <Footer />
    </div>
  );
}
