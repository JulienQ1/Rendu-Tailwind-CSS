/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "design-text-cyan": "hsl(167, 40%, 24%)",
          "photo-text-blue": "hsl(198, 62%, 26%)",
          "footer-cyan": "hsl(168, 34%, 41%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(210, 4%, 67%)",
          300: "hsl(232, 10%, 55%)",
          400: "hsl(213, 9%, 39%)",
          500: "hsl(212, 27%, 19%)",
        },
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      screens: {
        md: "710px",
      },
    },
  },
};
  plugins: [],
}
