/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blackCustom: "#0B0B0B",
        goldLight: "#D8B85A",
        goldDark: "#B8902E"
      }
    }
  },
  plugins: []
};
