/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "hide-banner": "hideBanner .5s forwards",
      },
      keyframes: {
        hideBanner: {
          "50%": {
            transform: "translate(-50%, 30%)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(-50%, -150%)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}
