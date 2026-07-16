"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { FiLoader } from "react-icons/fi";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-sm font-medium " +
    "transition-all duration-200 ease-out focus-visible:outline-none " +
    "disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-accent-primary to-[#2563EB] text-white shadow-glow " +
          "hover:-translate-y-0.5 hover:shadow-[0_0_50px_-8px_rgba(59,130,246,0.55)] " +
          "active:translate-y-0",
        secondary:
          "glass text-text-primary hover:-translate-y-0.5 hover:border-white/20 " +
          "hover:bg-surface/80 active:translate-y-0",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

/**
 * Shared button primitive. Supports default, hover, focus, active, loading,
 * and disabled states per EPS-005 §13.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled ?? isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <FiLoader className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
