module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-red": '#d62828',
        "theme-green-light": '#fbfefb',
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-focus','group-hover'],
    },
  },
  plugins: [],
}
