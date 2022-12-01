module.exports = {
  "no-return-await": "error",
  "no-unused-vars": "off", // needs to off to use the typescript-eslint/no-unused-vars rule
  "@typescript-eslint/no-unused-vars": ["warn"],
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "no-console": "warn",
  "react-hooks/exhaustive-deps": "error",
  "import/order": [
    "warn",
    {
      "newlines-between": "always",
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
        "unknown",
        "object",
        "type"
      ],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      },
      "pathGroups": [
        {
          "pattern": "react*",
          "group": "external",
          "position": "before"
        }
      ]
    }
  ]
}