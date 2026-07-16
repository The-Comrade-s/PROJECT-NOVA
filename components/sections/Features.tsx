"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES } from "@/constants/features";

export function Features() {
  return (
    <section id="features" className="container-content py-24 md:py-32">
      <SectionHeading
        eyebrow="Capabilities"
        title="Engineered, not assembled."
        description="Every feature below is implemented, not simulated — the same code
          running on this page is what ships."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.id} index={index}>
              <Card className="h-full">
                <Icon className="h-6 w-6 text-accent-primary" aria-hidden="true" />
                <h3 className="mt-4 text-card-title font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-text-secondary">{feature.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
