import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  twitterHandle,
}: SEOProps) => {
  const siteTitle = 'DM | Dreamer NFT';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Explore and collect unique digital art on Dreamer NFT. A curated marketplace for visionary artists and collectors in the Web3 space.';
  const metaDescription = description || defaultDescription;
  
  const baseUrl = 'https://dreamer-nft.vercel.app';
  const url = typeof window !== 'undefined' ? window.location.href : baseUrl;
  
  // Use hero.PNG as default OG image if none provided
  const defaultOgImage = `${baseUrl}/assets/hero.PNG`;
  const metaImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`) : defaultOgImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* OpenGraph tags */}
      <meta property="og:site_name" content="Dreamer NFT" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
