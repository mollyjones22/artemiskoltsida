import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_SHORT_NAME } from "./seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description:
      "University of Florida seminar series on Greek rhetoric, law, and society.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#021263",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
