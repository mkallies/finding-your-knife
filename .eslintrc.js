module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 1,
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    node: true,
  },
}
