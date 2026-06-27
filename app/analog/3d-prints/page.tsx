import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../ProjectList";
import { analogProjectGroups } from "../projects";
import { createPageMetadata } from "../../seo";

const group = analogProjectGroups["3d-prints"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "3D print projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function ThreeDPrintsPage() {
  return (
    <>
      <Navigation />
      <ProjectList
        basePath={group.basePath}
        projects={group.projects}
        title={group.title}
      />
    </>
  );
}
