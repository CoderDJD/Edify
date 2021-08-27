const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      white: "#f5f5f5",
      transparent: "transparent",
      accent: {
        default: "#6366F1",
        hover: "#A78BFA",
        disabled: "#C4B5FD",
      },
      dark: {
        100: "#91a3b0",
        200: "#5d7290",
        300: "#242c37",
        400: "#EDE9FE",
        500: "#222831",
      },
    },
  },
  variants: { scrollbar: ["rounded"] },
  plugins: [require("tailwind-scrollbar")],
};
