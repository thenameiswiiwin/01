const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const path = require('path')

module.exports = {
  style: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@sections': path.resolve(__dirname, 'src/components/sections/'),
    },
  },
}
