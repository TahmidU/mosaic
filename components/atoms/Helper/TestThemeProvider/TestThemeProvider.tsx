import { ReactElement } from "react";
import { Theme } from "types/context";
import { ThemeProvider } from "styled-components";
import getTheme from "resources/themes";

interface ITestThemeProviderProps {
  children: any;
  theme?: Theme;
}

export default function TestThemeProvider({
  children,
  theme = "light",
}: ITestThemeProviderProps): ReactElement {
  return <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>;
}
