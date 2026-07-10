/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#005F73",
          "teal-light": "#0D7B8A",
          "teal-tint": "#E6F0F2",
          grey: "#94A3B8",
          charcoal: "#2A2A2A",
          paper: "#FAF9F6",
        },
      },
      fontFamily: {
        heading: ['"Crimson Text"', "Georgia", "serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "section-label": [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.2em", fontWeight: "700" },
        ],
      },
    },
  },
  plugins: [],
};
