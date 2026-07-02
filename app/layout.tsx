import type { Metadata } from "next";
import Footer from "./components/Footer";
import SiteAudio from "./components/SiteAudio";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
} from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_SHORT_NAME,
  authors: [
    {
      name: "Artemis Koltsida",
    },
  ],
  creator: "Artemis Koltsida",
  publisher: "Artemis Koltsida",
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ["/social-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="antialiased">
      <body className="flex min-h-screen flex-col bg-white text-black">
        <SiteAudio />
        <div className="relative flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
