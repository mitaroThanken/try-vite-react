// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  rangeStart: 0,
  rangeEnd: Number.POSITIVE_INFINITY,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  arrowParens: "always",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  quoteProps: "as-needed",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
};

module.exports = config;
