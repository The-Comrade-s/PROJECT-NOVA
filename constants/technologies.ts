import type { TechnologyItem } from "@/types/content";
import {
  SiFramer,
  SiGreensock,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    description: "App Router, server components, and zero-config deployment.",
    icon: SiNextdotjs,
  },
  {
    id: "react",
    name: "React",
    description: "Component-driven UI with a modern concurrent renderer.",
    icon: SiReact,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Strict typing across every component, hook, and utility.",
    icon: SiTypescript,
  },
  {
    id: "threejs",
    name: "Three.js",
    description: "Real-time WebGL rendering for the interactive hero scene.",
    icon: SiThreedotjs,
  },
  {
    id: "gsap",
    name: "GSAP",
    description: "Scroll-triggered timelines with frame-accurate control.",
    icon: SiGreensock,
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    description: "Declarative component animation and gesture handling.",
    icon: SiFramer,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "A consistent, utility-first design system at scale.",
    icon: SiTailwindcss,
  },
];
