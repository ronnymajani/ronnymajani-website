import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  {
    ignores: [".astro/", "dist/", ".git/"],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },
];
