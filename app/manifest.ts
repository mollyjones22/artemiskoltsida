import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME } from "./seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#800080",
  };
}
