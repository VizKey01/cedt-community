import { colors, nextui } from "@nextui-org/theme";
const typography = require("@tailwindcss/typography");

const primary = "#FA8946";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: primary,
        secondary: colors.white,
        darksecondary: colors.black,
      },
      typography: {
        // make default top and bottom margin 1
        DEFAULT: {
          css: {
            "*": {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      }
    },
  },
  darkMode: "class",
  plugins: [
    typography,
    nextui({
      prefix: "nextui",
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: primary,
            secondary: colors.black,
            content1: primary,
            content2: colors.black,
            content3: colors.black,
            content4: colors.black,
            content5: colors.black,
            background: colors.white,
            danger: colors.red[500],
            success: colors.green[500],
            warning: colors.yellow[500],
          },
          layout: {
            fontSize: {
              // large: "1.25rem",
              // medium: "1rem",
              // small: "0.875rem",
              // tiny: "0.75rem",
            },
          },
        },
        dark: {
          colors: {
            primary: primary,
            secondary: colors.white,
            content1: primary,
            content2: colors.white,
            content3: colors.white,
            content4: colors.white,
            content5: colors.white,
            background: colors.black,
            danger: colors.red[500],
            success: colors.green[500],
            warning: colors.yellow[500],
          },
          layout: {
            fontSize: {
              // large: "1.25rem",
              // medium: "1rem",
              // small: "0.875rem",
              // tiny: "0.75rem",
            },
          },
        },
      },
    }),
  ],
};
