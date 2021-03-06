import "styled-components";
import { Theme } from "./context";
export interface IColours {
  almostBlack: string;
  red: string;
  crimson: string;
  white: string;
  almostWhite: string;
  black: string;
  grey: string;
}

export interface IFonts {
  main: {
    extraSmall: string;
    small: string;
    regular: string;
    medium: string;
    mediumBig: string;
    big: string;
    bigger: string;
    massive: string;
    colossal: string;
    humongous: string;
  };
  secondary: {
    extraSmall: string;
    small: string;
    regular: string;
    medium: string;
    mediumBig: string;
    big: string;
    bigger: string;
    massive: string;
    colossal: string;
    humongous: string;
  };
  tertiary: {
    extraSmall: string;
    small: string;
    regular: string;
    medium: string;
    mediumBig: string;
    big: string;
    bigger: string;
    massive: string;
    colossal: string;
    humongous: string;
  };
}

export interface ICColours {
  cAlmostBlack: Color<string>;
  cRed: Color<string>;
  cCrimson: Color<string>;
  cWhite: Color<string>;
  cAlmostWhite: Color<string>;
  cBlack: Color<string>;
  cGrey: Color<string>;
}

declare module "styled-components" {
  export interface DefaultTheme {
    almostBlack: string;
    red: string;
    crimson: string;
    white: string;
    almostWhite: string;
    black: string;
    grey: string;

    fonts: IFonts;

    cAlmostBlack: Color<string>;
    cRed: Color<string>;
    cCrimson: Color<string>;
    cWhite: Color<string>;
    cAlmostWhite: Color<string>;
    cBlack: Color<string>;
    cGrey: Color<string>;

    name: Theme;
    main: string;
    text: string;
    accent: string;
    reverseMain: string;
  }
}
