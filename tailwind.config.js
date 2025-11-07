/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0b14",
        card: "#161320",
        text: "#e8e6f2",
        textDim: "#b9b4c9",
        purple: "#7b5cff",
        purpleDark: "#5a3ee8",
        neonBlue: "#00e1ff",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 12px rgba(123, 92, 255, 0.6)",
        neon: "0 0 12px rgba(0, 225, 255, 0.6)"
      }
    },
  },
  plugins: [],
}
