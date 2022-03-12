import { ReactElement } from "react";
import { Theme } from "types/context";
import { ThemeProvider } from "styled-components";
import getTheme from "resources/themes";

interface TestThemeProviderProps {
  children: any;
  theme?: Theme;
}

export default function TestThemeProvider({
  children,
  theme = "light",
}: TestThemeProviderProps): ReactElement {
  return <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>;
}
