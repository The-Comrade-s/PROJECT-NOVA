"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns the vertical scroll progress (0–1) of `ref`'s element relative to
 * the viewport: 0 when its top enters the bottom of the viewport, 1 when
 * its bottom leaves the top. Used for hero parallax and the scroll
 * indicator's fade-out (EPS-004 §7, §11).
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    function measure() {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const traveled = window.innerHeight - rect.top;
      const value = Math.min(1, Math.max(0, traveled / total));

      setProgress(value);
    }

    function handleScroll() {
      if (frameId !== null) return;
      frameId = requestAnimationFrame(() => {
        measure();
        frameId = null;
      });
    }

    measure();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [ref]);

  return progress;
}
