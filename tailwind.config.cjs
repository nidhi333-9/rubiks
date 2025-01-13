module.exports = {
  content: [
    "./*.html", 
    "./src/pages/*.html", // Make sure index.html is listed here
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#ff6f61",
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
