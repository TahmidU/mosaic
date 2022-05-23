import { IModalVisibilities } from "hooks/useModalControl";
import { DefaultTheme } from "styled-components";
import useAxios from "../hooks/useAxios";

export type Theme = "light" | "dark";

export interface ITheme {
  toggle: () => void;
  current: Theme;
  value: DefaultTheme;
}

export type GlobalRequests = ReturnType<typeof useAxios>;

export interface IGlobalContext {
  theme: ITheme;
  globalRequests: GlobalRequests;
}
