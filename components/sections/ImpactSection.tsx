import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-brand-dark text-white border-b border-brand-green-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Key Programme Impact Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The work is visible in fields, mills and bakeries.
          </h2>
        </div>

        {/* 3 Showcase Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primary Production */}
          <Card variant="dark" className="p-0 border border-brand-green-light/40 overflow-hidden space-y-4">
            <div className="relative h-52 w-full">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-wheat-ears.jpg"
                alt="Close view of ripening wheat ears in late sun"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
                Primary production
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Agronomic Resilience
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Building domestic seed stock, farmer cluster models, and dry-season irrigation wheat schemes.
              </p>
            </div>
          </Card>

          {/* Industrial Milling */}
          <Card variant="dark" className="p-0 border border-brand-green-light/40 overflow-hidden space-y-4">
            <div className="relative h-52 w-full">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-mill.jpg"
                alt="Roller mill interior used for wheat processing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
                Industrial milling
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Raise milling utilisation
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Idle capacity is a cost the country already pays for. Structured offtake raises utilisation from 50% to 65%.
              </p>
            </div>
          </Card>

          {/* MSME Production */}
          <Card variant="dark" className="p-0 border border-brand-green-light/40 overflow-hidden space-y-4">
            <div className="relative h-52 w-full">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-nigerian-pastries.jpg"
                alt="Hands scoring a loaf before it goes to market"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold">
                MSME production
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Scale the MSME bakery base
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Seventy-two percent of baked goods are made by artisans and SMEs. The programme is designed around that majority.
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Impact Summary Grid */}
        <div className="pt-8 border-t border-brand-green-light/30 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-brand-gold">
              Ease the price of wheat foods
            </h4>
            <p className="text-gray-300 leading-relaxed">
              The 5–10% consumer-cost range is a target, not a claim of results. It is pursued through a more efficient value chain, not a permanent fiscal subsidy.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-bold text-brand-gold">
              Strengthen Enterprise Support
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Direct flour allocation, credit guarantees, and business development support for thousands of commercial and community bakeries across Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
