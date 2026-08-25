import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

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
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">~4.3m MT</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Wheat Imported / Year</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">$3bn+</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Annual FX Outlay</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">~50%</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">Milling Utilisation</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">72%</div>
            <div className="text-xs uppercase tracking-wider text-gray-300 mt-1">SME Bakery Market Share</div>
          </div>
        </div>
      </div>
    </section>
  );
};
