const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      textColor: {
        secondary: '#d13f3f',
      },
      fontSize: {
        2: '2vw',
        4: '4vw',
        5: '5vw',
        6: '6vw',
        8: '8.5vw',
        15: '15.3vw',
      },
      fontFamily: {
        sans: ['HKGrotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
