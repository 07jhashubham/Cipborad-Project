/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "980px",
      xl: "1344px"
    },

    extend: {
      fontFamily: {
        sans : ["Bai Jamjuree", "sans-serif"]
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBule: "#303b8d",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [],
}
