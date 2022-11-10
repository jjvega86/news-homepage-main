/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      "primary-orange": "hsl(35, 77%, 62%)",
      "primary-red": "hsl(5, 85%, 63%)",
      "neutral-white": "hsl(36, 100%, 99%)",
      "neutral-gray-blue": "hsl(233, 8%, 79%)",
      "neutral-drk-gry-blue": "hsl(236, 13%, 42%)",
      "neutral-vry-drk-blue": "hsl(240, 100%, 5%)",
    },
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
