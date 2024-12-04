/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3579d5",
      },
      padding: {
        "7px": "7px",
        "18px": "18px",
        "23px": "23px",
      },
      height: {
        "30px": "30px",
        "115px": "115px",
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle, #3081B4 0%, #1948BC 100%)",
        "linear-yellow": "linear-gradient(to right, #f7cb40, #ddad1c)",
        "linear-blue": "linear-gradient(to right, #44a2e5, #2e7ec2)",
        "linear-blue-grad-1":
          "linear-gradient(to right, rgba(167, 222, 253, 0) 0%, rgba(167, 222, 253, 1) 55%, rgba(167, 222, 253, 0) 100%)",
      },
      maxWidth: {
        "360px": "360px",
      },
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
        movaviGrotesque: ["Movavi Grotesque", "sans-serif"],
      },
      fontSize: {
        "10px": "10px",
      },
    },
  },
};
