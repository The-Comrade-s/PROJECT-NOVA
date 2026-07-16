"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATISTICS } from "@/constants/statistics";
import { useCountUp } from "@/hooks/useCountUp";
import { formatNumber } from "@/utils/formatNumber";
import { useRef } from "react";
import type { Statistic } from "@/types/content";

function StatCard({ stat, index }: { stat: Statistic; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const value = useCountUp(ref, stat.value);

  return (
    <Reveal index={index}>
      <div ref={ref} className="flex flex-col items-center gap-2 text-center">
        <span className="text-hero-sm font-semibold text-text-primary">
          {formatNumber(value, stat.suffix)}
        </span>
        <span className="text-sm text-text-muted">{stat.label}</span>
      </div>
    </Reveal>
  );
}

export function Statistics() {
  return (
    <section id="statistics" className="container-content py-24 md:py-32">
      <SectionHeading
        eyebrow="By the numbers"
        title="Results, not adjectives."
      />

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {STATISTICS.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}
