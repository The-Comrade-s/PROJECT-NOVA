"use client";

import { useEffect, useState } from "react";

/**
 * Observes the given section ids and reports which one is currently most
 * visible in the viewport, so the Navbar can highlight the active link
 * (EPS-005 §4). Sections that don't yet exist in the DOM are skipped
 * safely — the hook re-attaches observers as sections are added.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
