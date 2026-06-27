import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import ProjectList from "../ProjectList";
import { analogProjectGroups } from "../projects";
import { createPageMetadata } from "../../seo";

const group = analogProjectGroups["analog-photography"];

export const metadata: Metadata = createPageMetadata({
  title: group.title,
  description: "Analog photography projects by Artemis Koltsida.",
  path: group.basePath,
});

export default function AnalogPhotographyPage() {
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
