"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BASELINE_STATS, CHALLENGE_TABS } from "@/lib/data";
import { SectionHeading, StatCard } from "@/components/ui";
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
          <SectionHeading
            eyebrow="About the Programme"
            title="Nigeria consumes wheat at industrial scale, but produces almost none of it."
            description="An imbalance that shapes the price of bread, noodles, pasta and other staples in every market in the Federation."
          />

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BASELINE_STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                subtext={stat.subtext}
                variant="default"
                accentBorderPosition="top"
              />
            ))}
          </div>
        </div>

        {/* Interactive Tab Switcher Block */}
        <div className="bg-brand-card border border-brand-border p-6 sm:p-10 space-y-8">
          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 border-b border-brand-border pb-4" role="tablist">
            {CHALLENGE_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
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
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
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
                    ? "/images/farmers-wheat-field.jpg"
                    : activeTab === "evidence"
                    ? "/images/photo-bakery.jpg"
                    : activeTab === "consequence"
                    ? "/images/photo-grain-pile.jpg"
                    : "/images/photo-mill.jpg"
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
