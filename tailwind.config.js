/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        charcoal: "#374151",          // Primary text, headers
        celadon: "#A9D8B8",           // Success color, accents, badges
        "ruddy-blue": "#60A5FA",      // Primary buttons, links, CTAs
        xanthous: "#FFC15E",          // Highlights, warnings, attention
        "anti-flash-white": "#F0F4F8",// Background, cards, light areas
        gray: {
          500: "#6B7280",             // Optional body text
        },
        white: "#FFFFFF",             // Optional background base
        blue: {
          600: "#3B82F6",             // CTA hover state
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}