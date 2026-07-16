import type { Feature } from "@/types/content";
import { FiCpu, FiLayers, FiShield, FiSmartphone, FiWind, FiZap } from "react-icons/fi";

export const FEATURES: Feature[] = [
  {
    id: "realtime-3d",
    icon: FiZap,
    title: "Real-time 3D",
    description:
      "A physically-based Three.js scene renders live in the browser — no pre-baked video, no shortcuts.",
  },
  {
    id: "cinematic-motion",
    icon: FiWind,
    title: "Cinematic motion",
    description:
      "GSAP, Framer Motion, and Lenis work together for scroll storytelling that never fights the user.",
  },
  {
    id: "modular-architecture",
    icon: FiLayers,
    title: "Modular architecture",
    description:
      "Every section is an isolated, reusable component with a single responsibility and typed props.",
  },
  {
    id: "performance-first",
    icon: FiCpu,
    title: "Performance first",
    description:
      "Lazy loading, dynamic imports, and optimized assets keep the experience smooth on every device.",
  },
  {
    id: "accessible-by-default",
    icon: FiShield,
    title: "Accessible by default",
    description:
      "Keyboard navigation, semantic HTML, and reduced-motion support are built in, not bolted on.",
  },
  {
    id: "responsive-everywhere",
    icon: FiSmartphone,
    title: "Responsive everywhere",
    description:
      "From ultrawide monitors to small phones, layouts adapt without ever breaking or overlapping.",
  },
];
