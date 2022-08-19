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
        overlay: "rgba(0, 0, 0, 0.12)",
        cart: "#212529",
        cartItem: "#343a40",
      },

      gridTemplateColumns: {
        "products-containter": "auto 1fr auto",
        products: "repeat(auto-fill, 300px)",
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
