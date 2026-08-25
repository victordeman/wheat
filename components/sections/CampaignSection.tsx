import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const CampaignSection: React.FC = () => {
  return (
    <section id="campaign" className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
              Made-in-Nigeria
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
              Food that is baked, milled and bought at home.
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The consumer campaign is not decoration. It is the demand side of the programme — a public invitation to choose wheat foods produced in Nigerian mills and MSME bakeries.
            </p>
            <div>
              <a href="#involved">
                <Button variant="primary" size="lg">
                  Join the campaign
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 w-full border border-brand-border overflow-hidden">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-sliced-bread-clean.jpg"
                alt="Freshly sliced local bread"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-80 w-full border border-brand-border overflow-hidden mt-6">
              <Image
                src="https://wheatness-test.vercel.app/images/photo-agege-bread-clean.jpg"
                alt="Traditional Agege bread loaf"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
