"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FiCode, FiPenTool, FiTrendingUp } from "react-icons/fi";

const HIGHLIGHTS = [
  {
    icon: FiPenTool,
    label: "Design",
    description: "A dark, glass-forward visual language inspired by premium product sites.",
  },
  {
    icon: FiCode,
    label: "Engineering",
    description: "Strict TypeScript, modular components, and zero placeholder code.",
  },
  {
    icon: FiTrendingUp,
    label: "Performance",
    description: "Built to hit 95+ Lighthouse scores without sacrificing the 3D experience.",
  },
];

export function About() {
  return (
    <section id="about" className="container-content py-24 md:py-32">
      <SectionHeading
        eyebrow="About NOVA"
        title="A benchmark, not a brochure."
        description="NOVA exists to prove a point: that AI-assisted engineering, guided by a
          comprehensive specification, can produce software that holds up to
          professional scrutiny — not just a demo that looks good in a screenshot."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {HIGHLIGHTS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.label} index={index}>
              <div className="flex flex-col items-start gap-3 rounded-md border border-white/10 p-6">
                <Icon className="h-6 w-6 text-accent-primary" aria-hidden="true" />
                <h3 className="text-card-title font-semibold text-text-primary">{item.label}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
