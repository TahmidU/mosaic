import React, { FC, ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import getTheme from "../themes";

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={getTheme("light")}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
