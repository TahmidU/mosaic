import { IColours, IFonts } from "../types/theme";

import { DefaultTheme } from "styled-components";
import { Theme } from "../types/context";

const colours: IColours = {
  almostBlack: "#211f1b",
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

const fonts: IFonts = {
  main: {
    small: `font-family: "Roboto", sans-serif;
    font-size: 11px;`,
    regular: `font-family: "Roboto", sans-serif;
      font-size: 14px;`,
    medium: `font-family: "Roboto", sans-serif;
    font-size: 16px;`,
    mediumBig: `font-family: "Roboto", sans-serif;
    font-size: 18px;`,
    big: `font-family: "Roboto", sans-serif;
    font-size: 20px;`,
    bigger: `font-family: "Roboto", sans-serif;
    font-size: 24px;`,
  },
};

export default function getTheme(themeSelect: Theme): DefaultTheme {
  return {
    ...colours,
    fonts,
    ...themes[themeSelect],
  };
}
