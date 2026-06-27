import type { Metadata } from "next";

export const SITE_NAME = "Artemis Koltsida";
export const SITE_SHORT_NAME = "Artemis Koltsida";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mollyjones22.github.io/artemiskoltsida"
).replace(/\/$/, "");

export const DEFAULT_DESCRIPTION =
  "Portfolio of Artemis Koltsida, an architect and creative practitioner working across analog and digital media.";

const SOCIAL_IMAGE = {
  url: "/social-card.png",
  width: 1200,
  height: 630,
  alt: "Artemis Koltsida portfolio",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      images: [SOCIAL_IMAGE],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}
