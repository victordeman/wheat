import React from "react";
import Image from "next/image";
import { GOVERNANCE_STEPS, LEADERSHIP_PROFILES } from "@/lib/data";
import { Card, Badge } from "@/components/ui/Card";

export const GovernanceSection: React.FC = () => {
  return (
    <section id="governance" className="py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
            Governance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
            Governance Structure.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The programme reports through a clear institutional line, combining federal authority with private-sector execution discipline.
          </p>
        </div>

        {/* 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {GOVERNANCE_STEPS.map((gov) => (
            <Card key={gov.step} variant="default" className="bg-white border-t-4 border-t-brand-dark space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-gold">
                {gov.step}
              </span>
              <h3 className="font-serif text-xl font-bold text-brand-dark">
                {gov.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {gov.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Leadership Profiles */}
        <div className="pt-8 border-t border-brand-border space-y-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
            Programme Leadership
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <Card key={idx} variant="default" className="bg-white flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6">
                <div className="relative w-32 h-36 flex-shrink-0 border border-brand-border overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <Badge variant="green" className="text-[10px]">
                    {leader.role}
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {leader.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
