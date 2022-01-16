import { DefaultTheme } from "styled-components";
import { Theme } from "../types/context";

const colours = {
  almostBlack: "#261B00",
  red: "#EA2321",
  crimson: "#812626",
  white: "#FFFFFF",
  almostWhite: "#e8e8e8",
  black: "#000000",
};

const themes: { [key: string]: Partial<DefaultTheme> } = {
  light: {
    name: "light",
    main: colours.white,
    text: colours.almostBlack,
    accent: colours.red,
    reverseMain: colours.almostBlack,
  },
  dark: {
    name: "dark",
    main: colours.almostBlack,
    text: colours.almostWhite,
    accent: colours.red,
    reverseMain: colours.almostWhite,
  },
};

const fontSize = {
  xxxsmall: "8px",
  xxsmall: "11px",
  xsmall: "13px",
  small: "14px",
  medium: "16px",
  big: "18px",
  xbig: "20px",
  xxbig: "24px",
};

const fonts = {
  main: {
    roboto: '"Roboto", sans-serif',
  },
};

export default function getTheme(themeSelect: Theme): DefaultTheme {
  return {
    ...colours,
    fonts,
    fontSize,
    ...themes[themeSelect],
  };
}
