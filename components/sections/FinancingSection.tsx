import React from "react";
import { SectionHeading, TrackCard } from "@/components/ui";

export const FinancingSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <SectionHeading
          eyebrow="Financing Architecture"
          title="Two tracks. One programme."
          description="Delivery and capitalisation run together. One track does the work in mills, bakeries and markets. The other endows the fund that keeps that work possible."
        />

        {/* 2 Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Track 1 */}
          <TrackCard
            number={1}
            badgeText="Track 1"
            title="Direct Programme Activities"
            description="Operational work across milling, MSME production, logistics and consumer campaigning."
            image="https://wheatness-test.vercel.app/images/photo-mill.jpg"
            imageAlt="Interior of an industrial flour mill"
            accentColor="green"
            features={[
              "Structuring Value chain development",
              "Providing Enterprise development support",
              "Driving the Made-in-Nigeria campaign",
            ]}
          />

          {/* Track 2 */}
          <TrackCard
            number={2}
            badgeText="Track 2"
            title="Fund Capitalisation"
            description="The financial spine of the programme: a self-renewing development fund designed to recycle capital into the chain."
            image="https://wheatness-test.vercel.app/images/photo-silos-2.jpg"
            imageAlt="Industrial grain storage facility"
            accentColor="gold"
            features={[
              "Public seed capital, then private and institutional inflows",
              "A fund that is intended to renew itself, not expire with a vote",
              "Capital allocated against clear value-chain use cases",
            ]}
          />
        </div>
      </div>
    </section>
  );
};
