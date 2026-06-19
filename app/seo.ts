import type { Metadata } from "next";

export const SITE_NAME = "Seminar in Greek Rhetoric, Law, and Society";
export const SITE_SHORT_NAME = "Greek Rhetoric Seminar";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mollyjones22.github.io/rhetoricseminar"
).replace(/\/$/, "");

export const DEFAULT_DESCRIPTION =
  "Fall 2026 University of Florida seminar series exploring Greek rhetoric, law, and society through free virtual talks by international scholars.";

const SOCIAL_IMAGE = {
  url: "/social-card.png",
  width: 1200,
  height: 630,
  alt: "Seminar Series in Greek Rhetoric, Law, and Society — Fall 2026, University of Florida",
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
