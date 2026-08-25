import React from "react";
import Image from "next/image";
import { PATHWAYS } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

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
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
            Get involved
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
            Four doors into the same programme.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            WHEAT-NESS is built for millers, MSMEs, investors and the public. Choose the pathway that matches your role; the Delivery Unit will take it from there.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATHWAYS.map((pathway) => (
            <Card
              key={pathway.id}
              variant="default"
              className="bg-white p-0 overflow-hidden flex flex-col justify-between border border-brand-border hover:border-brand-gold transition-all"
            >
              <div>
                <div className="relative h-44 w-full">
                  <Image
                    src={pathway.image}
                    alt={pathway.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    {pathway.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pathway.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  onClick={() => onSelectPathway?.(pathway.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green hover:text-brand-gold transition-colors"
                >
                  <span>{pathway.actionText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
