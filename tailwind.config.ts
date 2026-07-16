import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#101010",
        accent: {
          primary: "#3B82F6",
          secondary: "#8B5CF6",
        },
        status: {
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B8B8B8",
          muted: "#808080",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-sm": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-lg": ["6rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "section-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "section-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "card-title": ["1.75rem", { lineHeight: "1.25" }],
      },
      maxWidth: {
        content: "1440px",
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59, 130, 246, 0.35)",
        "glow-purple": "0 0 40px -10px rgba(139, 92, 246, 0.35)",
        soft: "0 8px 30px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
