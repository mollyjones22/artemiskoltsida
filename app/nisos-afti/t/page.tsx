import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../../analog/ProjectList";
import { createPageMetadata } from "../../seo";
import { nisosAftiProjectGroups } from "../projects";

const group = nisosAftiProjectGroups.t;

export const metadata: Metadata = createPageMetadata({
  title: `Νήσος Αυτί ${group.title}`,
  description: "Project entries for the T section of Nisos Afti.",
  path: group.basePath,
});

export default function TPage() {
  return (
    <>
      <Navigation />
      <ProjectList
        basePath={group.basePath}
        layoutVariant="nisos"
        projects={group.projects}
        showInlineProjects
        showProjectTiles
        title={group.title}
      />
    </>
  );
}
