module.exports = {
  root: true,
  env: { es2020: true },
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist", "storybook-static"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      env: { browser: true, es2020: true },
      settings: {
        react: {
          version: "detect",
        },
      },
      files: ["src/**/*.{ts,tsx}", ".storybook/preview.ts"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      plugins: ["react-refresh"],
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
    {
      env: { node: true, es2020: true },
      files: ["vite.config.ts", ".prettierrc.cjs", ".storybook/main.ts"],
      parserOptions: {
        project: ["./tsconfig.node.json"],
      },
    },
    {
      env: { node: true, es2020: true },
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        project: ["./jsconfig.json"],
      },
    },
  ],
};
