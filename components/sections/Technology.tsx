"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECHNOLOGIES } from "@/constants/technologies";

export function Technology() {
  return (
    <section id="technology" className="container-content py-24 md:py-32">
      <SectionHeading
        eyebrow="Under the hood"
        title="The stack powering NOVA."
        description="A deliberately small set of best-in-class tools — each chosen for a
          clear purpose, none of them redundant."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TECHNOLOGIES.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <Reveal key={tech.id} index={index}>
              <Card className="h-full text-center" hoverable>
                <Icon className="mx-auto h-8 w-8 text-text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-text-primary">{tech.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{tech.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
