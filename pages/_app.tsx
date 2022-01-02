import "../styles/globals.css";

import type { AppProps } from "next/app";
import GlobalContext from "../context/GlobalContext";
import React from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const appTheme = useTheme();

  return (
    <GlobalContext.Provider value={{ theme: appTheme }}>
      <ThemeProvider theme={appTheme.value}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
