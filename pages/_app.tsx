import 'styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { fontSans, fontMono } from 'lib/font/fonts';

/* components */
import Helmet from 'components/html-head/Helmet';

const DynamicLayout = dynamic(() => import('../layout/Layout'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet title="next-blog" description="next-blog" image="" url="" keywords="" />
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
        }
      `}</style>

      <div className="font-sans">
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </div>
    </>
  );
}
