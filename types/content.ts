import type { IconType } from "react-icons";

export interface Feature {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  description: string;
  icon: IconType;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
