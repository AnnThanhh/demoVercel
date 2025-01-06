/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: "#D9EAFD",
        secondColor: "#BCCCDC",
      },
      padding:{
        80: "350px"
      }
    },
  },
  plugins: [],
};
