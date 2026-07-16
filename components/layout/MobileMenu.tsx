"use client";

import type { NavLink } from "@/types/content";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  activeId: string | null;
  onNavigate: (href: string) => void;
  onClose: () => void;
}

/**
 * Full-screen overlay menu for small viewports. Locks background scroll
 * while open and closes itself after a link is chosen (EPS-005 §4).
 */
export function MobileMenu({ isOpen, links, activeId, onNavigate, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
            {links.map((link, index) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => {
                  onNavigate(link.href);
                  onClose();
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                aria-current={activeId === link.id ? "true" : undefined}
                className="w-full max-w-xs rounded-md px-4 py-4 text-center text-2xl font-medium
                  text-text-secondary transition-colors hover:text-text-primary
                  aria-[current=true]:text-text-primary"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
