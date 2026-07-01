import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
import { analogPhotographyProjects, threeDPrintProjects } from "./analog/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/analog", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/analog/3d-prints",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/analog/analog-photography",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    ...threeDPrintProjects.map((project) => ({
      path: `/analog/3d-prints/${project.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    ...analogPhotographyProjects.map((project) => ({
      path: `/analog/analog-photography/${project.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    { path: "/digital", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/digital/3d-visualization-architectural-projects",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/digital/how-to-be-curious",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { path: "/nisos-afti", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/nisos-afti/letter-a",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-06-18"),
    changeFrequency,
    priority,
  }));
}
