import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../../analog/ProjectList";
import { createPageMetadata } from "../../seo";
import { digitalProjectGroups } from "../projects";

const group = digitalProjectGroups["film-editing"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "Film and editing projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function FilmEditingPage() {
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
