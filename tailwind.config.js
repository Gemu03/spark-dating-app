/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // gradiente caracteristico de tinder
        flame: {
          start: "#fd5068",
          end: "#fe7c4e",
        },
        like: "#3ad97d",
        nope: "#fd5068",
        superlike: "#1ec3f9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
