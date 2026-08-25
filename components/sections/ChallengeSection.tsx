"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BASELINE_STATS, CHALLENGE_TABS } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { cn } from "@/components/ui/Button";

export const ChallengeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CHALLENGE_TABS[0].id);

  const currentTabData =
    CHALLENGE_TABS.find((t) => t.id === activeTab) || CHALLENGE_TABS[0];

  return (
    <section id="about" className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header & Baseline Stat Grid */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-border">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
                About the Programme
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mt-2">
                Nigeria consumes wheat at industrial scale, but produces almost none of it.
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-700 max-w-xl leading-relaxed">
              An imbalance that shapes the price of bread, noodles, pasta and other staples in every market in the Federation.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BASELINE_STATS.map((stat, idx) => (
              <Card key={idx} variant="default" className="border-t-4 border-t-brand-gold">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm text-brand-green mt-2">
                  {stat.label}
                </div>
                {stat.subtext && (
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {stat.subtext}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Tab Switcher Block */}
        <div className="bg-brand-card border border-brand-border p-6 sm:p-10 space-y-8">
          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 border-b border-brand-border pb-4">
            {CHALLENGE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer border-b-2",
                  activeTab === tab.id
                    ? "border-brand-gold text-brand-dark bg-white shadow-xs"
                    : "border-transparent text-gray-600 hover:text-brand-dark hover:bg-white/50"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                {currentTabData.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {currentTabData.body}
              </p>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full overflow-hidden border border-brand-border">
              <Image
                src={
                  activeTab === "challenge"
                    ? "https://wheatness-test.vercel.app/images/farmers-wheat-field.jpg"
                    : activeTab === "evidence"
                    ? "https://wheatness-test.vercel.app/images/photo-bakery.jpg"
                    : activeTab === "consequence"
                    ? "https://wheatness-test.vercel.app/images/photo-grain-pile.jpg"
                    : "https://wheatness-test.vercel.app/images/photo-mill.jpg"
                }
                alt={currentTabData.title}
                fill
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
