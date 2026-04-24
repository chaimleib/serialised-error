import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import mochaPlugin from "eslint-plugin-mocha";

export default defineConfig([
  mochaPlugin.configs.recommended,
  {
      files: ["**/*.{js,mjs,cjs}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: { globals: globals.node },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
