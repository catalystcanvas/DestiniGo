// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          manrope: ["var(--font-manrope)"],
        },
        fontSize: {
          heading: ["clamp(1.5rem, 2vw, 2.25rem)", { lineHeight: "1.3" }], // ~24-36px
          subheading: ["clamp(1.25rem, 1.5vw, 1.75rem)", { lineHeight: "1.4" }], // ~20-28px
          body: ["clamp(1rem, 1.2vw, 1.125rem)", { lineHeight: "1.75" }], // ~16-18px
          small: ["0.875rem", { lineHeight: "1.5" }], // ~14px
        },
      },
    },
    plugins: [],
  };
  