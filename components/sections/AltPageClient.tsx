"use client";

import React, { useState } from "react";
import { Badge, Button, StatCard, GovernanceLeaderCard, PathwayCard } from "@/components/ui";
import { BASELINE_STATS, PROGRAMME_OBJECTIVES, LEADERSHIP_PROFILES, PATHWAYS } from "@/lib/data";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactFormData } from "@/lib/validation";

export const AltPageClient: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<ContactFormData["pathway"]>("public");

  return (
    <>
      {/* Editorial Dark Hero */}
      <section className="relative border-b border-gray-800 bg-[#0F382C]/40 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Badge variant="gold" className="bg-brand-gold/20 text-brand-gold border-brand-gold/50">
            Institutional High-Contrast View — Mode Alt
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            PROJECT <span className="text-brand-gold">WHEAT-NESS</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-serif max-w-3xl leading-relaxed italic border-l-2 border-brand-gold pl-6 py-1">
            &ldquo;Wheat-Based Consumer Foods Value Chain Optimisation and Cost Competitiveness Programme.&rdquo;
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
            An institutional executive overview outlining baseline stats, dual-track financing architecture, and stakeholder engagement pathways for the Federal Republic of Nigeria.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <a href="#alt-involved">
              <Button variant="gold" size="lg">
                Access Pathways
              </Button>
            </a>
            <a href="#alt-stats">
              <Button variant="outline" size="lg" className="border-gray-700 text-gray-200 hover:bg-gray-800">
                Data Baseline
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Dense Stat Strip */}
      <section id="alt-stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BASELINE_STATS.map((stat, idx) => (
            <StatCard
              key={idx}
              variant="dark"
              value={stat.value}
              label={stat.label}
              subtext={stat.subtext}
              valueColor="text-white"
              className="bg-[#141814] border-gray-800"
            />
          ))}
        </div>
      </section>

      {/* Pillars / Objectives High-Contrast */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border border-gray-800 bg-[#141814] p-8 md:p-12 space-y-8">
          <div className="space-y-2 border-b border-gray-800 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
              &#47;&#47; EXECUTIVE MANDATE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Four Objectives & Pillar Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAMME_OBJECTIVES.map((pillar) => (
              <div key={pillar.id} className="p-6 border border-gray-800 bg-[#0D0F0D] space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-brand-gold">{pillar.id} &#47;&#47; OBJECTIVE</span>
                  <Badge variant="gold" className="text-[9px]">{pillar.tag.split(":")[0]}</Badge>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
                <div className="pt-2 text-xs font-mono text-brand-gold">{pillar.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Leadership Alt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white border-b border-gray-800 pb-4">
            Institutional Governance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <GovernanceLeaderCard
                key={idx}
                variant="dark"
                name={leader.name}
                role={leader.role}
                title={leader.title}
                image={leader.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Pathways Dark */}
      <section id="alt-involved" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white border-b border-gray-800 pb-4">
            Stakeholder Entry Pathways
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PATHWAYS.map((p) => (
              <PathwayCard
                key={p.id}
                variant="dark"
                id={p.id}
                title={p.title}
                description={p.description}
                actionText={p.actionText}
                onSelect={(id) => setSelectedPathway(id as ContactFormData["pathway"])}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ContactSection defaultPathway={selectedPathway} />
      </div>
    </>
  );
};
