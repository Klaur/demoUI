module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': [2, 'never'],
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    quotes: [1, 'single'],
    'no-var': 2, //禁用var，用let和const代替
    'no-multiple-empty-lines': [2, { max: 0 }], // 不能有多的空行
    //'space-before-function-paren': [1, 'always'],
    'space-before-blocks': 2,
    semi: [2, 'never'],
    'vue/multi-word-component-names': 'off'
  }
}
