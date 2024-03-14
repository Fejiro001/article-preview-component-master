/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      md: "850px",
    },
    extend: {
      colors: {
        "desaturated-blue": "hsl(214, 17%, 35%)",
        "dark-grayish-blue": "hsl(217, 19%, 35%)",
        "grayish-blue": "hsl(212, 23%, 35%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: "clamp(1rem, 1.45vw, 3rem)",
        paragraph: "clamp(0.819rem, .45vw, 2rem)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

