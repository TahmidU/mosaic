import "../styles/globals.css";

import type { AppProps } from "next/app";
import GlobalContext from "../context/GlobalContext";
import Layout from "../components/organisms/Layout";
import React from "react";
import Scrollbar from "components/atoms/Scrollbar";
import { ThemeProvider } from "styled-components";
import useAxios from "../hooks/useAxios";
import useTheme from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const appTheme = useTheme();
  const axiosInstance = useAxios();

  return (
    <GlobalContext.Provider
      value={{
        theme: appTheme,
        axiosInstance: axiosInstance,
      }}
    >
      <ThemeProvider theme={appTheme.value}>
        <Scrollbar universal autoHeight autoHeightMin={"100vh"}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Scrollbar>
        <div id="modalPortal"></div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
