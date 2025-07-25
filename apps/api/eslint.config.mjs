import tseslint from "typescript-eslint";
import { createNodeConfig } from "@nexus/eslint-config-custom/node";

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  ...createNodeConfig({
    tsconfigRootDir: import.meta.dirname,
  })
);
