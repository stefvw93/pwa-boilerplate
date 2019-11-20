module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:prettier/recommended", "prettier/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-member-accessibility": "error",
  },
  settings: {
    react: {
      version: "16.10"
    }
  }
};
