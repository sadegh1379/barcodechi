import { Theme } from "./types";

export const appTheme: Theme = {
  light: {
    mode: "light",
    shadow: {
      sm: "0 0 28px -11px rgba(0, 0, 0, 0.3)",
      md: "0 0 28px -4px rgba(0, 0, 0, 0.3)",
      lg: "0 0 45px -1px rgba(0, 0, 0, 0.3)",
    },
    colors: {
        white: "#fff",
        primary: "#fefefe",
        primaryReverse: "#000000",
        secondary: "#e8e7ed",
        gray: "#494955",
        success: "#95c35a",
        danger: "#f88b9c",
        orange: "#feccb2",
        black: "#2b252f",
        border: "#CECECE"
    },
  },

  dark: {
    mode: "dark",
    shadow: {
      sm: "0 0 28px -11px rgba(0, 0, 0, 0.3)",
      md: "0 0 28px -4px rgba(0, 0, 0, 0.3)",
      lg: "0 0 45px -1px rgba(0, 0, 0, 0.3)",
    },
    colors: {
      white: "#fff",
        primary: "#fefefe",
        primaryReverse: "#000000",
        secondary: "#e8e7ed",
        gray: "#494955",
        success: "#95c35a",
        danger: "#f88b9c",
        orange: "#feccb2",
        black: "#2b252f",
        border: "#CECECE"
    },
  },
};
