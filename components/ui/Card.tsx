"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Adds a subtle lift + glow on hover. Off by default for static cards. */
  hoverable?: boolean;
}

/**
 * Base glassmorphism surface used by Features, Technology, and
 * Testimonials cards, so hover behavior and elevation stay consistent
 * across the app (EPS-003 §12, EPS-005 §14).
 */
export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-md p-6 shadow-soft transition-shadow duration-300",
        hoverable && "hover:border-white/20 hover:shadow-glow",
        className,
      )}
      whileHover={hoverable ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
