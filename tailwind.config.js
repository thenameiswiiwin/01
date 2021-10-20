const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: 'rgb(236, 236, 236)',
      'primary-2': 'rgb(220, 220, 220)',
      secondary: 'rgb(29, 25, 26)',
    }),
    extend: {
      maxHeight: {
        '1/10': '10%',
        '9/10': '90%',
      },
      inset: {
        '1/100': '1%',
        '1/20': '5%',
        '7/100': '7%',
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
        1: '1.3vw',
        2: '2vw',
        4: '4vw',
        5: '5vw',
        6: '6vw',
        8: '8.5vw',
        14: '14vw',
        15: '15.3vw',
        18: '18vw',
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
