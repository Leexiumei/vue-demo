module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'template-curly-spacing': ['error', 'never'],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'max-len': ['error', {code: 120}],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
