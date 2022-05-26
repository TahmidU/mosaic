import { IModalVisibilities } from "hooks/useModalControl";
import { IDefaultTheme } from "styled-components";
import useAxios from "../hooks/useAxios";

export type Theme = "light" | "dark";

export interface ITheme {
  toggle: () => void;
  current: Theme;
  value: IDefaultTheme;
}

export type GlobalRequests = ReturnType<typeof useAxios>;

export interface IGlobalContext {
  theme: ITheme;
  globalRequests: GlobalRequests;
}
