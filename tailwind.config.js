/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4/3",
      },
      boxShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      gridTemplateColumns: {
        product: "auto 1fr",
      },
    },
  },
  plugins: [],
};
