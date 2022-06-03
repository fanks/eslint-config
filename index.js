const rulesTypescript = require('./lib/typescript')
const rulesPrettier = require('./lib/prettier')

module.exports = {
  env: { jest: true, browser: true, es6: true, node: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'log', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['warn', rulesPrettier],
    ...rulesTypescript
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/']
}
