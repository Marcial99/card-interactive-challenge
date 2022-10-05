/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/images/bg-main-desktop.png')",
        mobile: "url('/images/bg-main-mobile.png')",
        cardFront: "url('/images/bg-card-front.png')",
        cardBack: "url('/images/bg-card-back.png')",
      },
      fontFamily: {
        space: ['"Space Grotesk"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
