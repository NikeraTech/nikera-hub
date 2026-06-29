import type { Metadata } from "next";

const siteName = "Nikera Hub";
const siteTitle = "Hub by Nikera";
const defaultLocale = "en_GB";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  category?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noIndex?: boolean;
};

function getImagePath(path: string) {
  return path === "/" ? "/opengraph-image" : `${path}/opengraph-image`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  category,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  noIndex = false,
}: MetadataInput): Metadata {
  const imagePath = getImagePath(path);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    category,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: path,
      siteName,
      locale: defaultLocale,
      title,
      description,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteName}`,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    other: {
      "apple-mobile-web-app-title": siteTitle,
    },
  };
}

export const defaultSeoKeywords = [
  "mortgage calculators",
  "mortgage advice",
  "remortgage guidance",
  "protection insurance",
  "financial tools",
  "Nikera Hub",
];
