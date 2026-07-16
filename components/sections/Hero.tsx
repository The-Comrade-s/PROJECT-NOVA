"use client";

import { Reveal } from "@/components/animations/Reveal";
import { CanvasFallback } from "@/components/three/CanvasFallback";
import { Button } from "@/components/ui/Button";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

const Scene = dynamic(() => import("@/components/three/Scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => <CanvasFallback />,
});

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);
  const supportsWebGL = useWebGLSupport();

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),_transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-content grid flex-1 items-center gap-12 py-16 md:grid-cols-2 md:py-0">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="text-sm uppercase tracking-[0.3em] text-text-muted">
              Engineered for impact
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-hero-sm md:text-hero-lg font-semibold leading-[1.05] text-text-primary">
              Precision, in motion.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-md text-lg text-text-secondary">
              NOVA is a real-time interactive experience — built to prove that
              premium engineering and cinematic design belong in the same
              codebase.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Explore NOVA</Button>
              <Button variant="secondary" size="lg">
                View the tech
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative h-[360px] w-full md:h-[520px]">
          {supportsWebGL === false ? <CanvasFallback /> : <Scene scrollProgress={scrollProgress} />}
        </Reveal>
      </div>

      <div className="flex justify-center pb-10" style={{ opacity: 1 - scrollProgress * 4 }}>
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <FiArrowDown className="animate-bounce" size={16} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
