"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactFormData } from "@/lib/validation";

export const ContactSectionClient: React.FC = () => {
  const searchParams = useSearchParams();
  const rawPathway = searchParams.get("pathway");
  const validPathways: ContactFormData["pathway"][] = ["millers", "msmes", "investors", "public"];
  const pathway: ContactFormData["pathway"] = validPathways.includes(rawPathway as ContactFormData["pathway"])
    ? (rawPathway as ContactFormData["pathway"])
    : "public";

  return <ContactSection defaultPathway={pathway} />;
};
