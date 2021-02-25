module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': 'off',
    'arrow-parens': 0,
    'import/no-unresolved': 2,
    'prettier/prettier': 'error'
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/airbnb'
  ]
};
