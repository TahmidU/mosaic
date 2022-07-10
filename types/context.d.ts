import { IModalVisibilities } from "hooks/useModalControl";
import { DefaultTheme } from "styled-components";
import useAxios from "../hooks/useAxios";

export type Theme = "light" | "dark";

export interface IUseTheme {
  toggle: () => void;
  current: Theme;
  value: DefaultTheme;
}

export type GlobalRequests = ReturnType<typeof useAxios>;

export interface IUseRoutes {
  goToHomePage: () => void;
  goToMovieDetails: (movieId: number) => void;
  goToSearchPage: (search: string) => void;
}

export interface IGlobalContext {
  theme?: IUseTheme;
  globalRequests?: GlobalRequests;
  routes?: IUseRoutes;
}
