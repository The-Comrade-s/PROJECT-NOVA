"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — multiplies the base delay for sequential reveals. */
  index?: number;
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Fades and lifts content into view once it enters the viewport. Used
 * across sections for scroll-triggered reveals (EPS-004 §12). When the
 * user prefers reduced motion, content renders in place with no transform.
 */
export function Reveal({ children, className, index = 0, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ duration: 0.6, delay: delay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
