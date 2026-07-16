"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants/testimonials";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const AUTO_ROTATE_MS = 6000;

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const current = TESTIMONIALS[index];

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  function goTo(nextIndex: number) {
    setIndex((nextIndex + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  if (!current) return null;

  return (
    <section id="testimonials" className="container-content py-24 md:py-32">
      <SectionHeading eyebrow="What people are saying" title="Trusted by builders." />

      <div
        className="relative mx-auto mt-16 max-w-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
      >
        <div className="glass overflow-hidden rounded-lg p-8 md:p-10" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-1" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FiStar
                    key={starIndex}
                    className={
                      starIndex < current.rating
                        ? "fill-accent-primary text-accent-primary"
                        : "text-white/20"
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-lg text-text-primary md:text-xl">
                “{current.quote}”
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-primary/20
                    text-sm font-semibold text-accent-primary"
                  aria-hidden="true"
                >
                  {initials(current.name)}
                </span>
                <span>
                  <span className="block font-medium text-text-primary">{current.name}</span>
                  <span className="block text-sm text-text-muted">
                    {current.role}, {current.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10
              text-text-secondary transition-colors hover:text-text-primary"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((testimonial, dotIndex) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={`h-1.5 w-6 rounded-full transition-colors ${
                  dotIndex === index ? "bg-accent-primary" : "bg-white/15"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10
              text-text-secondary transition-colors hover:text-text-primary"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
