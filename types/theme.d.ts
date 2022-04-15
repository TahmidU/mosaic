import "styled-components";
import { Theme } from "./context";
export interface IColours {
  almostBlack: string;
  red: string;
  crimson: string;
  white: string;
  almostWhite: string;
  black: string;
}

export interface IFonts {
  main: {
    small: string;
    regular: string;
    medium: string;
    mediumBig: string;
    big: string;
    bigger: string;
    massive: string;
    humongous: string;
  };
  secondary: {
    small: string;
    regular: string;
    medium: string;
    mediumBig: string;
    big: string;
    bigger: string;
    massive: string;
    humongous: string;
  };
  tertiary: {
    small: string;
    regular: string;
    medium: string;
    mediumBig: string;
    big: string;
    bigger: string;
    massive: string;
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
}

declare module "styled-components" {
  export interface DefaultTheme {
    almostBlack: string;
    red: string;
    crimson: string;
    white: string;
    almostWhite: string;
    black: string;

    fonts: IFonts;

    cAlmostBlack: Color<string>;
    cRed: Color<string>;
    cCrimson: Color<string>;
    cWhite: Color<string>;
    cAlmostWhite: Color<string>;
    cBlack: Color<string>;

    name: Theme;
    main: string;
    text: string;
    accent: string;
    reverseMain: string;
  }
}
