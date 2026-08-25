import { Metadata } from "next";
import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSectionClient } from "@/components/sections/ContactSectionClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Official correspondence channel for Project WHEAT-NESS Programme Delivery Unit.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<div className="py-20 text-center text-gray-600 font-medium">Loading contact options...</div>}>
          <ContactSectionClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
