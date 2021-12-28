import "../styles/globals.css";

import React, { createContext, useState } from "react";

import type { AppProps } from "next/app";
import GlobalContext from "../context/GlobalContext";
import { ThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <GlobalContext.Provider value={{ theme: theme.current }}>
      <ThemeProvider theme={theme.value}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
