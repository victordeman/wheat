import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GovernanceSection } from "@/components/sections/GovernanceSection";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Institutional reporting line and programme leadership structure for Project WHEAT-NESS.",
};

export default function GovernancePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main id="main-content" className="flex-grow">
        <GovernanceSection />
      </main>
      <Footer />
    </div>
  );
}
