import { Fragment } from 'react';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { fontSans, fontMono } from 'lib/font/fonts';
import Script from "next/script";
import * as gtag from "../lib/gtag"; 

/* components */
import Helmet from 'components/html-head/Helmet';

const DynamicLayout = dynamic(() => import('../layout/Layout'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Helmet title="next-blog" description="next-blog" image="" url="" keywords="" />
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
        }
      `}</style>
           <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gtag.GA_ID}', {
                page_path: window.location.pathname
              });
            `}
          </Script>
        </>

      <ThemeProvider attribute="class">
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </ThemeProvider>
    </Fragment>
  );
}
