"use client";

import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

interface ScrollState {
  direction: ScrollDirection;
  /** True once the page has scrolled past `hideThreshold`. */
  isScrolled: boolean;
}

/**
 * Tracks scroll direction and whether the page has scrolled past a
 * threshold, so the navigation bar can blur its background and hide on
 * scroll-down / reveal on scroll-up, per EPS-005 §4.
 */
export function useScrollDirection(hideThreshold = 24): ScrollState {
  const [state, setState] = useState<ScrollState>({ direction: "up", isScrolled: false });
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      const direction: ScrollDirection = currentY > lastY.current ? "down" : "up";
      const isScrolled = currentY > hideThreshold;

      setState((prev) => {
        if (prev.direction === direction && prev.isScrolled === isScrolled) return prev;
        return { direction, isScrolled };
      });

      lastY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideThreshold]);

  return state;
}
