import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../../analog/ProjectList";
import { createPageMetadata } from "../../seo";
import { digitalProjectGroups } from "../projects";

const group = digitalProjectGroups["web-design"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "Web design and visual identity projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function WebDesignPage() {
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
