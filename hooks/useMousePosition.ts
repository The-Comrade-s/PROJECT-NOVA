"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  /** Position normalized to a -1..1 range, useful for Three.js scenes. */
  normalizedX: number;
  normalizedY: number;
}

/**
 * Tracks the pointer position across the viewport. Used to drive
 * mouse-responsive 3D objects, magnetic buttons, and cursor-following
 * effects per EPS-004 §16.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    function handleMove(event: PointerEvent) {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1;

      setPosition({
        x: event.clientX,
        y: event.clientY,
        normalizedX,
        normalizedY,
      });
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
