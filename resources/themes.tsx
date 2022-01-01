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
    is: "light",
    main: colours.white,
    text: colours.almostBlack,
    accent: colours.red,
    reverseMain: colours.almostBlack,
  },
  dark: {
    is: "dark",
    main: colours.almostBlack,
    text: colours.almostWhite,
    accent: colours.red,
    reverseMain: colours.almostWhite,
  },
};

export default function getTheme(themeSelect: Theme): DefaultTheme {
  return {
    ...colours,
    ...themes[themeSelect],
  };
}
