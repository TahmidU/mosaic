//import 'styled-components';
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

/** 
 * Styled-Components types
declare module 'styled-components' {
  export interface DefaultTheme {
     borderRadius: string;
     color: string;
  }
}*/
