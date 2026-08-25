import React from "react";
import Image from "next/image";
import { SectionHeading, Button, Card } from "@/components/ui";

export const CampaignSection: React.FC = () => {
  return (
    <section id="campaign" className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Made-in-Nigeria"
              title="Food that is baked, milled and bought at home."
              description="The consumer campaign is the demand side of the programme — a public invitation to choose wheat foods produced in Nigerian mills and MSME bakeries."
            />

            <p className="text-base text-gray-700 leading-relaxed">
              By connecting local processing capacity directly to household demand, Project WHEAT-NESS creates market certainty for domestic millers and bakers while supporting national food security.
            </p>

            <div className="pt-2">
              <a href="#involved">
                <Button variant="primary" size="lg">
                  Join the campaign
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image Panel */}
          <div className="lg:col-span-5">
            <Card className="p-0 border border-brand-border overflow-hidden bg-white shadow-xs">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src="/images/photo-bakery.jpg"
                  alt="Freshly baked Nigerian bread and wheat foods in a local bakery"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
