import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://reveraging.com";

export const SEO = ({
  title,
  description,
  canonical,
  image = "/og-image.png",
  type = "website",
  publishedTime,
  jsonLd,
}: SEOProps) => {
  const url = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`
    : SITE_URL;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const trimmedTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const trimmedDesc =
    description.length > 160 ? description.slice(0, 157) + "..." : description;

  return (
    <Helmet>
      <title>{trimmedTitle}</title>
      <meta name="description" content={trimmedDesc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={trimmedTitle} />
      <meta property="og:description" content={trimmedDesc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Rever" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={trimmedTitle} />
      <meta name="twitter:description" content={trimmedDesc} />
      <meta name="twitter:image" content={imageUrl} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
