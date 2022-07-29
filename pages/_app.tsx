import "../styles/globals.css";
import "../styles/fonts.css";
import "react-loading-skeleton/dist/skeleton.css";

import type { AppProps } from "next/app";
import GlobalContext from "../context/GlobalContext";
import { GlobalStyles } from "styles/GlobalStyles";
import Layout from "../components/organisms/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";
import useAxios from "../hooks/useAxios";
import useRoutes from "hooks/useRoutes";
import useTheme from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const appTheme = useTheme();
  const globalRequests = useAxios();
  const routes = useRoutes();

  return (
    <GlobalContext.Provider
      value={{
        theme: appTheme,
        globalRequests: globalRequests,
        routes: routes,
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
