import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        "accent-blue": "#3b82f6",
        "accent-green": "#16a34a",
        "accent-purple": "#8b5cf6",
        "background-light": "#ffffff",
        "background-dark": "#0a0a0a",
        "surface-light": "#f8f9fa",
        "surface-dark": "#141414",
        "text-light": "#111827",
        "text-dark": "#f3f4f6",
        "muted-light": "#6b7280",
        "muted-dark": "#9ca3af",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
