import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PathwaysSectionWrapper } from "@/components/sections/PathwaysSectionWrapper";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Stakeholder registration and participation pathways for millers, MSMEs, investors, and the public.",
};

export default function InvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main id="main-content" className="flex-grow">
        <PathwaysSectionWrapper />
      </main>
      <Footer />
    </div>
  );
}
