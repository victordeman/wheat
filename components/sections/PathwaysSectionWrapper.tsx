"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PathwaysSection } from "@/components/sections/PathwaysSection";

export const PathwaysSectionWrapper: React.FC = () => {
  const router = useRouter();

  const handleSelectPathway = (pathway: string) => {
    router.push(`/contact?pathway=${pathway}`);
  };

  return <PathwaysSection onSelectPathway={handleSelectPathway} />;
};
