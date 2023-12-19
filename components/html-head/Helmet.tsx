import Head from 'next/head';

type HelmetProps = {
  title?: string | undefined;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

const Helmet = ({ title, description, image, keywords, url }: HelmetProps) => {
  const basicConfig = {
    title: 'sunhoh.log',
    siteTitle: '>daldal',
    description: '쿠키 굽',
    url: '',
    image: '',
    keywords: `개발자, 기술블로그`,
  };

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta charSet="utf-8" />
      <meta name="description" content={basicConfig.description} />
      <meta name="keywords" content={`${basicConfig.keywords}, ${keywords ? keywords : ''}`} />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${basicConfig.siteTitle} | ${title ?? basicConfig.title}`}
      />
      <meta property="og:description" content={basicConfig.description} />
      <meta property="og:site_name" content={basicConfig.siteTitle} />
      <meta property="og:url" content={url ? `${basicConfig.url}${url}` : basicConfig.url} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content={image ?? basicConfig.image} />
    </Head>
  );
};

export default Helmet;
