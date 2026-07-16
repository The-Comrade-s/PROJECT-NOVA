import type { Statistic } from "@/types/content";

export const STATISTICS: Statistic[] = [
  { id: "lighthouse", label: "Lighthouse performance", value: 95, suffix: "+" },
  { id: "fps", label: "Target frame rate", value: 60, suffix: " fps" },
  { id: "devices", label: "Device classes supported", value: 5 },
  { id: "technologies", label: "Core technologies", value: 7 },
];
