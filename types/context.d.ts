import { IModalVisibilities } from "hooks/useModalControl";
import { DefaultTheme } from "styled-components";
import useAuth from "../hooks/useAxios";

export type Theme = "light" | "dark";

export interface ITheme {
  toggle: () => void;
  current: Theme;
  value: DefaultTheme;
}

export type AxiosInstance = ReturnType<typeof useAxios>;

export interface IGlobalContext {
  theme: ITheme;
  axiosInstance: AxiosInstance;
}
