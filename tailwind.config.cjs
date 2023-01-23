/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* primary purple */
        "primary-purple": "#7878FA",
        /* dark purple */
        "dark-purple": "#6262D9",
        /* purple-pink gradient */
        "purple-pink-gradient": "linear-gradient(5deg, #9D62D9, #6262D9)",
        /* purple gradient */
        "purple-gradient": "linear-gradient(105deg, #4358BF, #7087FA)",
        /* light blue gradient */
        "light-blue-gradient": "linear-gradient(60deg, #70C1FA, #3083BF)",
        /* dark purple gradient */
        "dark-purple-gradient":
          "linear-gradient(180deg, #7474F2, #7474F2 60%, #6262D9)",
        /* dark grey gradient */
        "dark-grey-gradient":
          "radial-gradient(circle at center, #232336, #232336 70%)",
        /* snow white */
        "snow-white": "#F2F2FA",
        /* light grey */
        "light-grey": "#E4E4F0",
        /* dusty grey */
        "dusty-grey": "#D5D5E0",
        /* storm grey */
        "storm-grey": "#A7A7CC",
        "darkD": "rgb(27 27 45)",
        /* dark grey */
        "dark-grey": "#232336",
        /* black */
        black: "#16171A",
      },
      fontFamily: {
        /* Hanken Grotesk */
        "hanken-grotesk": "Hanken Grotesk, sans-serif",
        /* Nunito Sans */
        "nunito-sans": "Nunito Sans, sans-serif",
      },
      padding: {
        "container-mobile": "2rem",
        "container-desktop": "4rem",
      },
    },
  },
  plugins: [],
};
