const base = require("./rules/base.js")

module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended"
  ],
  rules: {
    ...base
  }
}
