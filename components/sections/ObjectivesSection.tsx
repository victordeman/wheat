import React from "react";
import { PROGRAMME_OBJECTIVES } from "@/lib/data";
import { SectionHeading, Card, Badge } from "@/components/ui";

export const ObjectivesSection: React.FC = () => {
  return (
    <section id="programme" className="py-20 bg-brand-dark text-white border-b border-brand-green-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <SectionHeading
          variant="dark"
          eyebrow="What WHEAT-NESS does"
          title="Four objectives, one industrial purpose."
          description="The programme is built to raise idle capacity, ease consumer prices, expand MSME production and endow a fund that outlives any single budget cycle."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMME_OBJECTIVES.map((pillar) => (
            <Card
              key={pillar.id}
              variant="dark"
              className="border-l-4 border-l-brand-gold flex flex-col justify-between hover:border-brand-gold transition-colors space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-brand-gold opacity-80">
                    {pillar.id}
                  </span>
                  <Badge variant="gold" className="text-[10px]">
                    {pillar.tag.split(":")[0]}
                  </Badge>
                </div>
                <h3 className="font-serif text-xl font-bold text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-green-light/30">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  {pillar.tag}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
