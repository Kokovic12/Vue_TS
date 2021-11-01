module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint",
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  // 'extends': [
  //   'plugin:vue/vue3-recommended',
  //   'eslint:recommended',
  //   '@vue/typescript/recommended',
  //   '@vue/prettier',
  //   '@vue/prettier/@typescript-eslint',
  //   'plugin:vue/vue3-essential',
  //   '@vue/standard'
  // ]
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  'extends': [
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ]
};
