import Head from 'next/head';
import { FC, useMemo } from 'react';

interface SEOProps {
  description: string;
  title?: string;
  siteTitle?: string;
  fullTitle?: string;
}

const SEO: FC<SEOProps> = ({
  description,
  title,
  siteTitle = 'Pokécardmaker.net',
  fullTitle,
}) => {
  const finalTitle = useMemo<string>(
    () => fullTitle ?? `${title} | ${siteTitle}`,
    [fullTitle, title, siteTitle],
  );

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta
        property="og:image"
        content="https://pokecardmaker.net/assets/images/metaImage.png"
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://pokecardmaker.net/assets/images/metaImage.png"
      />
    </Head>
  );
};

export default SEO;
