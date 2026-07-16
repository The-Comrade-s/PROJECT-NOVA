"use client";

import { useEffect, useState } from "react";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

/**
 * Reports whether the browser can render WebGL content. Returns `null`
 * during the initial server render so callers can wait for the client
 * check before deciding whether to mount the Three.js scene or its
 * fallback (EPS-004 §22).
 */
export function useWebGLSupport(): boolean | null {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  return supported;
}
