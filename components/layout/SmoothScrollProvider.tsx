"use client";

import { destroyLenis, initLenis } from "@/lib/lenis";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Mounts once at the app root. Initializes Lenis for the luxurious inertial
 * scroll described in EPS-004 §11, and skips it entirely when the user has
 * requested reduced motion — native scroll behavior is used instead.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    initLenis();
    return () => destroyLenis();
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
