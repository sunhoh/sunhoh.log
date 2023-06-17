import { ThemeProvider } from '@emotion/react';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

/* components */
import Helmet from 'components/html-head/Helmet';

const DynamicLayout = dynamic(() => import('../layout/Layout'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet title="달달" description="달달" image="" url="" keywords="" />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          {GlobalStyle}
          <DynamicLayout>
            <Component {...pageProps} />
          </DynamicLayout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
