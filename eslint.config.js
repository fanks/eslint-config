const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')
const prettierConfig = require('eslint-config-prettier')
const prettierPlugin = require('eslint-plugin-prettier')
const logPlugin = require('eslint-plugin-log')
const globals = require('globals')

const rulesTypescript = {
  "no-return-await": "error",
  "no-unused-vars": "off", // needs to off to use the typescript-eslint/no-unused-vars rule
  "@typescript-eslint/no-unused-vars": ["warn"],
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "no-console": "warn"
}

const rulesPrettier = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  tabWidth: 2
}

module.exports = [
  {
    name: 'magstandard/base',
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node,
        ...globals.jest
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'log': logPlugin,
      'prettier': prettierPlugin
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      'prettier/prettier': ['warn', rulesPrettier],
      ...rulesTypescript
    }
  },
  {
    name: 'magstandard/ignores',
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/']
  },
  prettierConfig
]
