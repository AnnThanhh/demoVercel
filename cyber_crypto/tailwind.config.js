/** @type {import('tailwindcss').Config} */
module.exports = {
  // module: "JIT",
  // content = purge 
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundColor: {
        darkBlue: "#151937",
      },
      backgroundImage: {
        "orangePink": "linear-gradient(to left, #fc8e51, #fa61f9)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
