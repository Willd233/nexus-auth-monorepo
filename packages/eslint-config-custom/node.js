import globals from "globals";
import tseslint from "typescript-eslint";
import { baseConfig } from "./base.js";

/**
 * Creates a type-aware ESLint configuration for a Node.js project.
 * @param {object} options
 * @param {string} options.tsconfigRootDir - The root directory for tsconfig.json discovery.
 * @returns {import('typescript-eslint').Config}
 */
export function createNodeConfig({ tsconfigRootDir }) {
  return tseslint.config(
    ...baseConfig,
    // Add type-aware linting rules
    ...tseslint.configs.recommendedTypeChecked,
    {
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.jest, // Assuming Jest for testing
        },
        // Configure the parser for type-aware linting
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
      rules: {
        // Add or override Node.js-specific rules
        "prefer-const": "error",
        "no-console": "warn",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "error",
      },
    }
  );
}
