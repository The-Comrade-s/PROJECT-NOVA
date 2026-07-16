"use client";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const PRIMARY_LINKS = NAV_LINKS.filter((link) => link.id !== "cta");
const CTA_LINK = NAV_LINKS.find((link) => link.id === "cta");

function scrollToSection(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { direction, isScrolled } = useScrollDirection();
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  const isHidden = direction === "down" && isScrolled && !isMobileOpen;

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "container-content flex items-center justify-between rounded-none py-4 transition-all duration-300",
            isScrolled && "mt-3 rounded-lg glass shadow-soft",
          )}
        >
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#hero");
            }}
            className="text-lg font-semibold tracking-tight text-text-primary"
          >
            NOVA
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
                aria-current={activeId === link.id ? "true" : undefined}
                className="relative text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent-primary"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            {CTA_LINK && (
              <Button
                size="sm"
                onClick={() => scrollToSection(CTA_LINK.href)}
              >
                {CTA_LINK.label}
              </Button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-text-primary md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                {isMobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileOpen}
        links={NAV_LINKS}
        activeId={activeId}
        onNavigate={scrollToSection}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
