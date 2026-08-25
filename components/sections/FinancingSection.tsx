import React from "react";
import Image from "next/image";
import { Card, Badge } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export const FinancingSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
            Financing Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
            Two tracks. One programme.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Delivery and capitalisation run together. One track does the work in mills, bakeries and markets. The other endows the fund that keeps that work possible.
          </p>
        </div>

        {/* 2 Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Track 1 */}
          <Card variant="default" className="border-t-4 border-t-brand-green space-y-6">
            <div className="relative h-56 w-full border border-brand-border overflow-hidden">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-mill.jpg"
                alt="Interior of an industrial flour mill"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="dark">Track 1</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                Direct Programme Activities
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Operational work across milling, MSME production, logistics and consumer campaigning.
              </p>
            </div>

            <ul className="space-y-3 pt-2 text-sm text-brand-dark">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>Structuring Value chain development</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>Providing Enterprise development support</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>Driving the Made-in-Nigeria campaign</span>
              </li>
            </ul>
          </Card>

          {/* Track 2 */}
          <Card variant="default" className="border-t-4 border-t-brand-gold space-y-6">
            <div className="relative h-56 w-full border border-brand-border overflow-hidden">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-silos-2.jpg"
                alt="Industrial grain storage facility"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="gold">Track 2</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                Fund Capitalisation
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The financial spine of the programme: a self-renewing development fund designed to recycle capital into the chain.
              </p>
            </div>

            <ul className="space-y-3 pt-2 text-sm text-brand-dark">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-deep flex-shrink-0 mt-0.5" />
                <span>Public seed capital, then private and institutional inflows</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-deep flex-shrink-0 mt-0.5" />
                <span>A fund that is intended to renew itself, not expire with a vote</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-deep flex-shrink-0 mt-0.5" />
                <span>Capital allocated against clear value-chain use cases</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
