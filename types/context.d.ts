import { DefaultTheme } from "styled-components";

export type Theme = "light" | "dark";

export interface ITheme {
  toggle: () => void;
  current: Theme;
  value: DefaultTheme;
}

export interface IGlobalContext {
  theme: ITheme;
}
