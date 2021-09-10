module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-red": '#d62828',
        "theme-white": '#fbfefb',
        "theme-white-1": '#f1faee',
        "theme-green-light": '#fbfefb',
        "theme-green-dark": '#f0f5f0',
      }
    },
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
      scale: ['group-focus','group-hover'],
    },
  },
  plugins: [],
}
