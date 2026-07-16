"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

interface HeroObjectProps {
  /** 0–1 scroll progress of the Hero section, used for a subtle scroll response. */
  scrollProgress: number;
}

/**
 * The visual centerpiece of the Hero scene: a slowly rotating, floating
 * glass icosahedron that tilts toward the cursor and nudges its rotation
 * with scroll — per EPS-004 §6 (rotate, float, react to mouse, respond to
 * scroll, physically based materials).
 */
export function HeroObject({ scrollProgress }: HeroObjectProps) {
  const meshRef = useRef<Mesh>(null);
  const { normalizedX, normalizedY } = useMousePosition();

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.y += delta * 0.15 + scrollProgress * 0.002;
    mesh.rotation.x += delta * 0.05;

    // Ease toward the cursor rather than snapping to it.
    const targetTiltX = normalizedY * 0.3;
    const targetTiltY = normalizedX * 0.3;
    mesh.rotation.x += (targetTiltX - mesh.rotation.x) * 0.02;
    mesh.rotation.y += (targetTiltY - mesh.rotation.y) * 0.02;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.06}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.03}
          backside
          color="#3B82F6"
        />
      </mesh>
    </Float>
  );
}
