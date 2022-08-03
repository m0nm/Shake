/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
        secondary: "Poiret One",
      },

      backgroundColor: {
        pinky: "#FFB8C9",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    base: false,

    themes: [
      {
        light: {
          primary: "#dd2d50",
          secondary: "#161e29",
          accent: "#e1f3fa",
          neutral: "#110E0E",
          "base-100": "#171212",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
