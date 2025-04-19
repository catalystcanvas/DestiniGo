import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      fontSize: {
        heading: ["clamp(1.5rem, 2vw, 2.25rem)", { lineHeight: "1.3" }],
        subheading: ["clamp(1.25rem, 1.5vw, 1.75rem)", { lineHeight: "1.4" }],
        body: ["clamp(1rem, 1.2vw, 1.125rem)", { lineHeight: "1.75" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
