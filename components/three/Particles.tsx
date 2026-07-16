"use client";

import { Sparkles } from "@react-three/drei";

/**
 * Subtle floating particles behind the hero object — slow motion, soft
 * opacity, depth variation, minimal count to protect frame rate
 * (EPS-004 §10).
 */
export function Particles() {
  return (
    <Sparkles
      count={80}
      scale={[8, 6, 4]}
      size={2}
      speed={0.2}
      opacity={0.25}
      color="#8B5CF6"
    />
  );
}
