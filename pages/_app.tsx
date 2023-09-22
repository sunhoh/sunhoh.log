import 'styles/global.css';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

/* components */
import Helmet from 'components/html-head/Helmet';

const DynamicLayout = dynamic(() => import('../layout/Layout'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet title="next-blog" description="next-blog" image="" url="" keywords="" />
      <ThemeProvider theme={theme}>
        {GlobalStyle}
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </ThemeProvider>
    </>
  );
}
