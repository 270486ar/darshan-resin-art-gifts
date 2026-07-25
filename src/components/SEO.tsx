// React 19 automatically hoists <title>, <meta>, and <link> tags rendered
// anywhere in the component tree up into the document <head>. That means
// this component needs no external library (like react-helmet) to manage
// per-page SEO tags — it just renders them directly.
interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_URL = "https://pondyresinart.github.io/darshan-resin-art-gifts";

export default function SEO({ title, description, path = "/", image }: SEOProps) {
  const fullTitle = `${title} | Darshan Resin Art & Gifts`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/images/hero/hero-01.svg`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
