"use client";

import { useEffect, useState } from "react";

/**
 * Reads the browser's `prefers-reduced-motion` setting so animation-heavy
 * components can degrade gracefully. Required by EPS-004 §21 and EPS-006 §17.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReduced(event.matches);
    }

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}
