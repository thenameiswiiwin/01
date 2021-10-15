module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/order': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'babel/quotes': 0,
    'babel/camelcase': 0,
    'jsx-a11y/label-has-for': 0,
    'max-lines-per-function': 0,
    'consistent-return': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.d.ts', '.tsx'],
      },
    },
  },
}
