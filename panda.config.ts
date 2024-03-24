import { defineConfig } from "@pandacss/dev";
import { simpleButton } from "./src/SimpleButton.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        simpleButton,
      },
    },
  },
  jsxFramework: "vue",
  // The output directory for your css system
  outdir: "styled-system",
});
