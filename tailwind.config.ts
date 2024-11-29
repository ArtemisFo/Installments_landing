import type { Config } from "tailwindcss";
import Colors_Theme from "./src/styles/Theme.ts";
const tw_colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Omit<Config, "content" | "presets"> = {
  content: ["./app/**/*.tsx", "./src/**/*.{tsx,ts}"],
  theme: {
    colors: {
      inherit: tw_colors.inherit,
      current: tw_colors.current,
      transparent: tw_colors.transparent,
      black: tw_colors.black,
      white: tw_colors.white,
      ...Colors_Theme,
    },
    fontSize: {
      xs: ["0.688rem"], // 11 px
      sm: ["0.75rem"], // 12 px
      base: ["0.813rem"], // 13 px
      lg: ["0.875rem"], // 14 px
      xl: ["0.938rem"], // 15 px
      "2xl": ["1rem"], // 16 px
      "3xl": ["1.125rem"], // 18 px
      "4xl": ["1.25rem"], // 20 px
      "5xl": ["1.5rem"], // 24 px
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      xl: ["0.625rem"], // 10 px
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      sm: "0px 1px 3px 0px #19213D1A",
      md: "0px 2px 4px 0px #19213D14",
      lg: "0px 8px 15px 0px #19213D1A",
      xl: "0px 8px 24px 0px #19213D1F",
    },
    zIndex: {
      ...defaultTheme.zIndex,
      1: "1",
      2: "2",
      3: "3",
      4: "4",
    },
    extend: {
      lineHeight: {
        11: "1.406rem", // 22.5 px
        12: "1.313rem", // 21 px
        14: "1.125rem", // 18 px
        15: "1.688rem", // 27 px
      },
      spacing: {
        "14.5": "3.625rem", // 58 px
        15: "3.75rem", // 60 px
        "15.5": "3.875rem", // 62 px
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
};

export default config;
