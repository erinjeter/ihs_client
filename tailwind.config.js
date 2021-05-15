module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('./assets/Optimized-BonaImage.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
