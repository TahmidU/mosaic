import { ICColours, IColours, IFonts } from "../types/theme";

import Color from "color";
import type { IDefaultTheme } from "styled-components";
import { Theme } from "../types/context";

const colours: IColours = {
  almostBlack: "#211f1b",
  red: "#FD1C1C",
  crimson: "#812626",
  white: "#FFFFFF",
  almostWhite: "#e8e8e8",
  black: "#000000",
  grey: "#bebebe",
};

const cColours: ICColours = {
  cAlmostBlack: Color(colours.almostBlack),
  cRed: Color(colours.red),
  cCrimson: Color(colours.crimson),
  cWhite: Color(colours.white),
  cAlmostWhite: Color(colours.almostWhite),
  cBlack: Color(colours.black),
  cGrey: Color(colours.grey),
};

const themes: { [key: string]: Partial<IDefaultTheme> } = {
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
    small: `font-family: 'Nunito', sans-serif;
    font-size: 11px;`,
    regular: `font-family: 'Nunito', sans-serif;
      font-size: 14px;`,
    medium: `font-family: 'Nunito', sans-serif;
    font-size: 16px;`,
    mediumBig: `font-family: 'Nunito', sans-serif;
    font-size: 18px;`,
    big: `font-family: 'Nunito', sans-serif;
    font-size: 20px;`,
    bigger: `font-family: 'Nunito', sans-serif;
    font-size: 24px;`,
    massive: `font-family: 'Nunito', sans-serif;
    font-size: 32px;`,
    humongous: `font-family: 'Nunito', sans-serif;
    font-size: 72px;`,
  },
  secondary: {
    small: `font-family: 'Source Sans Pro', sans-serif;
    font-size: 11px;`,
    regular: `font-family: 'Source Sans Pro', sans-serif;
      font-size: 14px;`,
    medium: `font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;`,
    mediumBig: `font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;`,
    big: `font-family: 'Source Sans Pro', sans-serif; font-size: 24px`,
    bigger: `font-family: 'Source Sans Pro', sans-serif;
    font-size: 24px;`,
    massive: `font-family: 'Source Sans Pro', sans-serif; font-size: 32px`,
    humongous: `font-family: 'Source Sans Pro', sans-serif;
    font-size: 72px;`,
  },
  tertiary: {
    small: `font-family: 'Roboto', sans-serif;
    font-size: 11px;`,
    regular: `font-family: 'Roboto', sans-serif;
      font-size: 14px;`,
    medium: `font-family: 'Roboto', sans-serif;
    font-size: 16px;`,
    mediumBig: `font-family: 'Roboto', sans-serif;
    font-size: 18px;`,
    big: `font-family: 'Roboto', sans-serif;
    font-size: 20px;`,
    bigger: `font-family: 'Roboto', sans-serif;
    font-size: 24px;`,
    massive: `font-family: 'Roboto', sans-serif;
    font-size: 32px;`,
    humongous: `font-family: 'Roboto', sans-serif;
    font-size: 72px;`,
  },
};

export default function getTheme(themeSelect: Theme): IDefaultTheme {
  return {
    ...colours,
    ...cColours,
    fonts,
    ...themes[themeSelect],
  } as IDefaultTheme;
}
