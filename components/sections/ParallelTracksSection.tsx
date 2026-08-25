import React from "react";
import { PARALLEL_TRACKS } from "@/lib/data";
import { SectionHeading, TrackCard } from "@/components/ui";

export const ParallelTracksSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-canvas border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Parallel tracks"
          title="The programme also looks beyond today’s imported grain."
          description="Domestic production will not replace 4.3 million tonnes overnight. These parallel tracks ensure the country moves intentionally toward long-horizon self-reliance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARALLEL_TRACKS.map((track, idx) => (
            <TrackCard
              key={idx}
              badgeText={track.subtitle}
              title={track.title}
              description={track.description}
              image={track.image}
              accentColor="gold"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
