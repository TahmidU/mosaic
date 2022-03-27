import "../styles/globals.css";

import type { AppProps } from "next/app";
import GlobalContext from "../context/GlobalContext";
import Layout from "../components/organisms/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";
import useAxios from "../hooks/useAxios";

function MyApp({ Component, pageProps }: AppProps) {
  const appTheme = useTheme();
  const axiosInstance = useAxios();

  return (
    <GlobalContext.Provider
      value={{ theme: appTheme, axiosInstance: axiosInstance }}
    >
      <ThemeProvider theme={appTheme.value}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
