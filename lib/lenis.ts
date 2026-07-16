import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/**
 * Initializes the shared Lenis smooth-scroll instance and wires it into
 * requestAnimationFrame. Call once from a client-side root component
 * (e.g. the app shell) and call `destroyLenis` on unmount.
 */
export function initLenis(): Lenis {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenisInstance;
}

export function destroyLenis(): void {
  lenisInstance?.destroy();
  lenisInstance = null;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}
