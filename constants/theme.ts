/**
 * Central design tokens mirrored from EPS-003 (UI/UX Design System) and
 * tailwind.config.ts. Import these when a raw value is needed outside of
 * Tailwind classes (e.g. inside Three.js materials or GSAP timelines).
 */
export const COLORS = {
  background: "#050505",
  surface: "#101010",
  accentPrimary: "#3B82F6",
  accentSecondary: "#8B5CF6",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  textPrimary: "#FFFFFF",
  textSecondary: "#B8B8B8",
  textMuted: "#808080",
} as const;

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  ultrawide: 1920,
} as const;

export const MOTION_DURATION = {
  fast: 0.2,
  base: 0.4,
  slow: 0.8,
  cinematic: 1.2,
} as const;

export const SITE_CONFIG = {
  name: "NOVA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
