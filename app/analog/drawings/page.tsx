import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../ProjectList";
import { analogProjectGroups } from "../projects";
import { createPageMetadata } from "../../seo";

const group = analogProjectGroups.drawings;

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "Drawing projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function DrawingsPage() {
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
