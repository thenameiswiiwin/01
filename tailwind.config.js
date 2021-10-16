const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      primary: 'rgb(236, 236, 236)',
      'primary-2': 'rgb(220, 220, 220)',
      secondary: 'rgb(29, 25, 26)',
    },
    extend: {
      maxHeight: {
        '9/10': '90%',
      },
      inset: {
        '2/25': '8%',
      },
      margin: {
        '1/20': '5%',
      },
      padding: {
        '1/100': '1%',
        '7/100': '7%',
      },
      borderWidth: {
        1: '1px',
      },
      textColor: {
        primary: 'rgb(29, 25, 26)',
        secondary: 'rgb(236, 236, 236)',
        orange: '#d13f3f',
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
