/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
  colors: {
    bg: {
      DEFAULT: "#0d0b14",
      light: "#ffffff"
    },
    card: {
      DEFAULT: "#1a1525",
      light: "#f3f2f8"
    },
    text: {
      DEFAULT: "#e8e6f2",
      light: "#1a1a1a"
    },
    textDim: {
      DEFAULT: "#b9b4c9",
      light: "#555"
    },
    purple: "#7b5cff",
    purpleDark: "#5a3ee8"
  },
}
  },
  plugins: [],
};
