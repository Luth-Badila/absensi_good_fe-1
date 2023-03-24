/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        register: "url('./src/assets/background.png')",
      },
      width: {
        sidebar: "350px",
        search: "400px",
      },
      rotate: {
        137: "137deg",
      },
      backgroundColor: {
        packed: "#EEF6FF",
        // packed: "#f2f2f2", you can use this color if you like
      },
      colors: {
        primary: "#4F46E5",
      },
      fontFamily: {
        lexend: "'Lexend', sans-serif",
      },
    },
  },

  plugins: [],
};
