const path = require('path')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@sections': path.resolve(__dirname, 'src/sections/'),
    },
  },
}
