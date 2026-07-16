"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 900;

/**
 * Full-screen loading sequence: animated logo, progress indicator, and a
 * smooth fade-out once the page has settled. Enforces a minimum visible
 * duration so the sequence never flashes, and never blocks longer than
 * necessary (EPS-004 §18).
 */
export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();

    function finish() {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => setIsVisible(false), remaining);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-semibold uppercase text-text-primary"
          >
            NOVA
          </motion.span>

          <div className="h-px w-32 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-accent-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
