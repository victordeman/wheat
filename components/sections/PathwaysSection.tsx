import React from "react";
import { PATHWAYS } from "@/lib/data";
import { SectionHeading, PathwayCard } from "@/components/ui";

interface PathwaysSectionProps {
  onSelectPathway?: (pathwayId: string) => void;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({
  onSelectPathway,
}) => {
  return (
    <section id="involved" className="py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <SectionHeading
          eyebrow="Get involved"
          title="Four doors into the same programme."
          description="WHEAT-NESS is built for millers, MSMEs, investors and the public. Choose the pathway that matches your role; the Delivery Unit will take it from there."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATHWAYS.map((pathway) => (
            <PathwayCard
              key={pathway.id}
              id={pathway.id}
              title={pathway.title}
              description={pathway.description}
              actionText={pathway.actionText}
              image={pathway.image}
              onSelect={onSelectPathway}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
