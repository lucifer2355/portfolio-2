module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        "3xl": "2000px",
      },
    },
    fontFamily: {
      nunito: ["nunito-sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-pseudo-elements"),
  ],
};
