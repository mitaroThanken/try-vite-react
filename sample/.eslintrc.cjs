module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', 'storybook-static'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      env: { node: true, es2020: true },
      files: ["vite.config.ts", ".storybook/main.ts"],
      parserOptions: {
        project: ["./tsconfig.node.json"],
      }
    },
    {
      env: { node: true, es2020: true },
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        project: ["./jsconfig.json"]
      }
    },
  ],
}
