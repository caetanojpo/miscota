import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        primary: { value: "#F7C657" },
        secondary: { value: "#893733" },
        light: { value: "#F5F2E9" },
        red: { value: "#DC3545" },
        yellow: { value: "#FFC107" },
        green: { value: "#198754" },
      },
      fonts: {
        body: { value: "RemoraSans, Arial, sans-serif" },
        heading: { value: "RemoraSans, Arial, sans-serif" },
        mono: { value: "Courier New, monospace" },
      },
      fontWeights: {
        thin: { value: "100" },
        light: { value: "300" },
        normal: { value: "400" },
        medium: { value: "500" },
        bold: { value: "700" },
        black: { value: "900" },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
        warning: { value: "{colors.yellow}" },
        success: { value: "{colors.green}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
