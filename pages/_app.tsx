import Layout from "@/layout/Layout";

import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";

/* components */
import Helmet from "@/components/html-head/Helmet";

import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet title="달달" description="달달" image="" url="" keywords="" />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          {GlobalStyle}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
