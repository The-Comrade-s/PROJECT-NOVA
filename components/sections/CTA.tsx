"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="cta" className="container-content py-24 md:py-32">
      <div className="relative overflow-hidden rounded-xl border border-white/10 px-8 py-16 text-center md:px-16">
        <div
          className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.18),_transparent_65%)]"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-6">
          <Reveal>
            <h2 className="text-section-sm md:text-section-lg font-semibold text-text-primary">
              Ready to see it in motion?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-lg text-text-secondary">
              Explore the source, inspect the architecture, or deploy your own
              copy in minutes.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">View on GitHub</Button>
              <Button variant="secondary" size="lg">
                Read the docs
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
