/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(100%)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        "slide-down": {}
      },
      animation: {
        "slide-up": "slide-up 150ms ease-out"
      },
      boxShadow: {
        xxl: "0px 3px 10px rgba(0, 0, 0, 0.24)"
      }
    }
  },
  plugins: [require("tailwindcss-radix")({ variantPrefix: "rdx" })]
};
