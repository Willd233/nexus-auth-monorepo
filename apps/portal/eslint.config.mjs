import baseConfig from "@nexus/eslint-config-custom/react";
import tseslint from "typescript-eslint";

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  ...baseConfig,

  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {},
  }
);
