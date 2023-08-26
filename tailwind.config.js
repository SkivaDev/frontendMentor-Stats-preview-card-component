/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md : "875px",
        lg: "1080px",
      },
      lineHeight: {
        paragraph: "1.67",
        title: "1.22",
        stats: "1.42",
      },
      backgroundColor: {
        dark_blue: "hsl(233, 47%, 7%)",
        desaturated_blue: "hsl(244, 38%, 16%)",
        soft_violet: "hsl(277, 64%, 61%)",
        trans_white: "hsla(0, 0%, 100%, 0.75)",
        trans_white2: "hsla(0, 0%, 100%, 0.6)",
      },
      colors: {
        dark_blue: "hsl(233, 47%, 7%)",
        desaturated_blue: "hsl(244, 38%, 16%)",
        soft_violet: "hsl(277, 64%, 61%)",
        trans_white: "hsla(0, 0%, 100%, 0.75)",
        trans_white2: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
}

