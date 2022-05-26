import "../styles/globals.css";

import React, { useEffect, useRef } from "react";

import type { AppProps } from "next/app";
import GlobalContext from "../context/GlobalContext";
import { GlobalStyles } from "styles/GlobalStyles";
import Layout from "../components/organisms/Layout";
import Scrollbar from "components/atoms/Scrollbar";
import { ThemeProvider } from "styled-components";
import useAxios from "../hooks/useAxios";
import useTheme from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const appTheme = useTheme();
  const globalRequests = useAxios();

  return (
    <GlobalContext.Provider
      value={{
        theme: appTheme,
        globalRequests: globalRequests,
      }}
    >
      <ThemeProvider theme={appTheme.value}>
        <GlobalStyles theme={appTheme.value} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div id="modalPortal"></div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
