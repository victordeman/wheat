"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactFormData } from "@/lib/validation";

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const rawPathway = searchParams.get("pathway");
  const validPathways: ContactFormData["pathway"][] = ["millers", "msmes", "investors", "public"];
  const pathway: ContactFormData["pathway"] = validPathways.includes(rawPathway as ContactFormData["pathway"])
    ? (rawPathway as ContactFormData["pathway"])
    : "public";

  return <ContactSection defaultPathway={pathway} />;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div className="py-20 text-center">Loading contact options...</div>}>
          <ContactFormWrapper />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
