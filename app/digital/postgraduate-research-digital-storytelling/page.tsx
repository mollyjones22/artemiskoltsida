import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../../analog/ProjectList";
import { createPageMetadata } from "../../seo";
import { digitalProjectGroups } from "../projects";

const group = digitalProjectGroups["postgraduate-research-digital-storytelling"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description:
    "Postgraduate research projects in digital storytelling by Artemis Koltsida.",
  path: group.basePath,
});

export default function PostgraduateResearchDigitalStorytellingPage() {
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
