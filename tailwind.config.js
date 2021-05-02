module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('./src/assets/Optimized-BonaImage.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
