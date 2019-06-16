module.exports = {
  parser: 'babel-eslint',

  extends: [
    'standard',
    'standard-react',
  ],

  plugins: [
    'jest',
  ],

  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },

  "env": {
    'jest/globals': true,
  },

  globals: {
    __DEV__: true,
  },

  rules: {
    'react/prop-types': ['off'],
    'space-before-function-paren': ['error', 'never'],
  },
}
