import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../../analog/ProjectList";
import { createPageMetadata } from "../../seo";
import { digitalProjectGroups } from "../projects";

const group = digitalProjectGroups["how-to-be-curious"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "How to be curious video series by Artemis Koltsida.",
  path: group.basePath,
});

export default function HowToBeCuriousPage() {
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
