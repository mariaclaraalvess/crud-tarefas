/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0d0b14",
        card: "#1a1525",
        purple: "#7b5cff",
        purpleDark: "#5a3ee8",
        text: "#e8e6f2",
        textDim: "#b9b4c9",
      },
      borderRadius: {
        soft: "12px",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.4)",
      }
    },
  },
  plugins: [],
};
