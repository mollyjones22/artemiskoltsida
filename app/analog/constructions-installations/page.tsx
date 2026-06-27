import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../ProjectList";
import { analogProjectGroups } from "../projects";
import { createPageMetadata } from "../../seo";

const group = analogProjectGroups["constructions-installations"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "Construction and installation projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function ConstructionsInstallationsPage() {
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
