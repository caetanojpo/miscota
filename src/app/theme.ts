import { createSystem, defineConfig } from "@chakra-ui/react";

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

export const miscotaSystem = createSystem(config);
