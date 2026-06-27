import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../ProjectList";
import { analogProjectGroups } from "../projects";
import { createPageMetadata } from "../../seo";

const group = analogProjectGroups["silkscreen-prints"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "Silkscreen print projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function SilkscreenPrintsPage() {
  return (
    <>
      <Navigation />
      <ProjectList
        basePath={group.basePath}
        projects={group.projects}
        showInlineProjects
        showProjectTiles
        title={group.title}
      />
    </>
  );
}
