"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Animates a number from 0 to `target` once `ref`'s element enters the
 * viewport. Only runs once per mount, and resolves immediately under
 * reduced motion (EPS-005 §9, EPS-004 §21).
 */
export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  target: number,
  duration = 1.6,
): number {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        function tick(now: number) {
          const elapsed = (now - start) / 1000;
          const progress = Math.min(1, elapsed / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));

          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, duration, prefersReducedMotion]);

  return value;
}
