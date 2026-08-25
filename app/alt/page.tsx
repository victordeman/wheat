"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BASELINE_STATS, PROGRAMME_OBJECTIVES, LEADERSHIP_PROFILES, PATHWAYS } from "@/lib/data";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowUpRight, CheckSquare, ShieldCheck } from "lucide-react";

export default function AltPage() {
  const [selectedPathway, setSelectedPathway] = useState<string>("public");

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0D0F0D] text-gray-100 selection:bg-brand-gold selection:text-brand-dark">
      <Header />

      <main className="flex-grow space-y-16 pb-20">
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
              <div key={idx} className="bg-[#141814] border border-gray-800 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-mono">
                    METRIC 0{idx + 1}
                  </span>
                  <div className="font-serif text-3xl font-bold text-white mt-1">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800/80">
                  <div className="text-xs font-semibold text-gray-300">{stat.label}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars / Objectives High-Contrast */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="border border-gray-800 bg-[#141814] p-8 md:p-12 space-y-8">
            <div className="space-y-2 border-b border-gray-800 pb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                // EXECUTIVE MANDATE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                Four Objectives & Pillar Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROGRAMME_OBJECTIVES.map((pillar) => (
                <div key={pillar.id} className="p-6 border border-gray-800 bg-[#0D0F0D] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-brand-gold">{pillar.id} // OBJECTIVE</span>
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
                <div key={idx} className="bg-[#141814] border border-gray-800 p-6 flex items-center gap-6">
                  <div className="relative w-24 h-28 flex-shrink-0 border border-gray-700">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="green" className="bg-brand-green/30 text-emerald-400 border-emerald-800">
                      {leader.role}
                    </Badge>
                    <h3 className="font-serif text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{leader.title}</p>
                  </div>
                </div>
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
                <div key={p.id} className="bg-[#141814] border border-gray-800 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.description}</p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedPathway(p.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-gold uppercase hover:underline"
                  >
                    <span>{p.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ContactSection defaultPathway={selectedPathway} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
