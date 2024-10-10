import js from "@eslint/js";

export default [
  {
    ignores: ['node_modules'],
  },
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
  },
  js.configs.recommended,
  {
    rules: {
      semi: "error",
      "prefer-const": "error"
    }
  }
];
