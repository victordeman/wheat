import React from "react";
import { GOVERNANCE_STEPS, LEADERSHIP_PROFILES } from "@/lib/data";
import { SectionHeading, GovernanceStepCard, GovernanceLeaderCard } from "@/components/ui";

export const GovernanceSection: React.FC = () => {
  return (
    <section id="governance" className="py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <SectionHeading
          eyebrow="Governance"
          title="Governance Structure."
          description="The programme reports through a clear institutional line, combining federal authority with private-sector execution discipline."
        />

        {/* 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {GOVERNANCE_STEPS.map((gov) => (
            <GovernanceStepCard
              key={gov.step}
              step={gov.step}
              title={gov.title}
              description={gov.description}
            />
          ))}
        </div>

        {/* Leadership Profiles */}
        <div className="pt-8 border-t border-brand-border space-y-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
            Programme Leadership
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <GovernanceLeaderCard
                key={idx}
                name={leader.name}
                role={leader.role}
                title={leader.title}
                image={leader.image}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
