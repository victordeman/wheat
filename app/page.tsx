"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ArrowRight, BookOpen, Layers, Users, Mail } from "lucide-react";
import { Card, Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-canvas">
      <Header />
      <main className="flex-grow">
        {/* Short Hero (includes headline, subhead, 2 CTAs, and compact 4-stat strip) */}
        <HeroSection />

        {/* Short "What is WHEAT-NESS?" Summary Blurb */}
        <section className="py-16 bg-white border-b border-brand-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
              Programme Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
              What is Project WHEAT-NESS?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              Project WHEAT-NESS is Nigeria&apos;s national initiative dedicated to resetting the economics of the wheat-based consumer foods value chain. By coordinating industrial milling offtake, expanding MSME bakery capacity, and establishing a self-renewing development fund, the programme drives sustainable domestic production while lowering food costs for households nationwide.
            </p>
          </div>
        </section>

        {/* Three Entry Cards: About, The Programme, Get Involved */}
        <section className="py-20 bg-brand-canvas border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
                Explore the Portal
              </span>
              <h2 className="font-serif text-3xl font-bold text-brand-dark">
                Key Entry Pathways
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Card */}
              <Card variant="default" className="bg-white p-8 flex flex-col justify-between hover:border-brand-gold transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                    <BookOpen className="w-6 h-6 text-brand-gold-deep" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    About WHEAT-NESS
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Understand the national economic challenge, import dependency data, and the Made-in-Nigeria campaign strategy.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/about">
                    <Button variant="outline" size="sm" className="w-full justify-between group">
                      <span>Learn About WHEAT-NESS</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* The Programme Card */}
              <Card variant="default" className="bg-white p-8 flex flex-col justify-between hover:border-brand-gold transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                    <Layers className="w-6 h-6 text-brand-gold-deep" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    The Programme
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Explore the four core objectives, dual-track financing architecture, and parallel miller & agronomy tracks.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/programme">
                    <Button variant="outline" size="sm" className="w-full justify-between group">
                      <span>Explore Objectives</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Get Involved Card */}
              <Card variant="default" className="bg-white p-8 flex flex-col justify-between hover:border-brand-gold transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-brand-dark/5 flex items-center justify-center text-brand-dark">
                    <Users className="w-6 h-6 text-brand-gold-deep" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark">
                    Get Involved
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Registration and engagement pathways for industrial millers, MSME bakeries, institutional investors, and citizens.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/involved">
                    <Button variant="outline" size="sm" className="w-full justify-between group">
                      <span>Access Pathways</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Optional Thin Strip CTA to Contact */}
        <section className="py-8 bg-brand-dark text-white border-b border-brand-green-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-gold" />
              <span className="text-sm font-medium text-gray-200">
                Have inquiries or want to write directly to the Programme Delivery Unit?
              </span>
            </div>
            <Link href="/contact">
              <Button variant="gold" size="sm" className="whitespace-nowrap">
                Contact Delivery Unit
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
