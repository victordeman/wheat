import React from "react";
import Image from "next/image";
import { PARALLEL_TRACKS } from "@/lib/data";
import { Card, Badge } from "@/components/ui/Card";

export const ParallelTracksSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-deep">
            Parallel tracks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
            The programme also looks beyond today’s imported grain.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Domestic production will not replace 4.3 million tonnes overnight. These parallel tracks ensure the country moves intentionally toward long-horizon self-reliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARALLEL_TRACKS.map((track, idx) => (
            <Card key={idx} variant="default" className="bg-white space-y-6">
              <div className="relative h-60 w-full border border-brand-border overflow-hidden">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{track.subtitle}</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
