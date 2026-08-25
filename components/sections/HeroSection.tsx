import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { BASELINE_STATS } from "@/lib/data";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-dark text-white overflow-hidden border-b border-brand-green-light/30">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="https://wheatness-test.vercel.app/images/hero-wheat.jpg"
          alt="Golden wheat fields at sunrise across rolling hills"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl space-y-6">
          <Badge variant="gold" className="bg-brand-gold/20 text-brand-gold border-brand-gold/40">
            Federal Republic of Nigeria — National Programme
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Strengthening Nigeria&apos;s Wheat Value Chain.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 font-sans leading-relaxed max-w-2xl font-normal">
            Project WHEAT-NESS is the national programme to optimise the wheat-based consumer foods value chain, lower costs, raise milling utilisation and build a self-renewing development fund for industry.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#programme">
              <Button variant="gold" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <span>Explore the Programme</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-dark">
                Why it matters
              </Button>
            </a>
          </div>
        </div>

        {/* Floating Stat Accent Bar */}
        <div className="mt-16 pt-8 border-t border-brand-green-light/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {BASELINE_STATS.map((stat, idx) => (
            <div key={idx}>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
