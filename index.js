const rule_import = require('./lib/import');
const rule_ts = require('./lib/typescript');
const rule_prettier = require('./lib/prettier');

module.exports = {
  env: { jest: true, browser: true, es6: true, node: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'log', '@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': ['error', rule_prettier],
    ...rule_ts,
    ...rule_import
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/']
};
