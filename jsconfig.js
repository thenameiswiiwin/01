module.exports = {
  // extends: './jsconfig.paths.js',
  compilerOptions: {
    baseUrl: 'src',
    paths: {
      '@/*': ['./src/*'],
    },
  },
  exclude: ['node_modules', '**/node_modules/*'],
}
