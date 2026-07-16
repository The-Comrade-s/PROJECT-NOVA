/**
 * Rendered in place of the Three.js canvas when WebGL is unavailable.
 * Keeps the same footprint as the canvas so no layout shift occurs, and
 * preserves the premium feel with a CSS-only glow (EPS-004 §22).
 */
export function CanvasFallback() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl"
      role="img"
      aria-label="Abstract glowing sphere illustration"
    >
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-gradient-to-br from-accent-primary/40 to-accent-secondary/30 blur-3xl"
      />
      <div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full
          border border-white/10 bg-surface/60 shadow-glow backdrop-blur-sm"
      />
    </div>
  );
}
