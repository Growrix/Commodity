import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#111111",
          elevated: "#1A1A1A",
          high: "#242424",
          hover: "#2A2A2A",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D9BE6E",
          dark: "#A68730",
          muted: "rgba(201,168,76,0.10)",
          border: "rgba(201,168,76,0.25)",
        },
        border: {
          DEFAULT: "#1E1E1E",
          light: "#2A2A2A",
          medium: "#333333",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        container: "1280px",
        prose: "720px",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
