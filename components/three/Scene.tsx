"use client";

import { HeroObject } from "@/components/three/HeroObject";
import { Particles } from "@/components/three/Particles";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";

interface SceneProps {
  scrollProgress: number;
}

/**
 * The primary hero 3D scene. Modular by design (EPS-004 §5): camera,
 * lighting, environment, hero object, and particles are each isolated so
 * later phases can extend the scene without restructuring it.
 */
export function Scene({ scrollProgress }: SceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={45} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow />
      <pointLight position={[-3, -2, -2]} intensity={0.6} color="#8B5CF6" />

      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.6} />
        <HeroObject scrollProgress={scrollProgress} />
        <Particles />
        <EffectComposer>
          <Bloom
            intensity={0.6}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
