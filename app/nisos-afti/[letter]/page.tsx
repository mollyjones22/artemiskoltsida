import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import ProjectList from "../../analog/ProjectList";
import { createPageMetadata } from "../../seo";
import { pendingNisosAftiProjects } from "../project-index";

export const dynamicParams = false;

export function generateStaticParams() {
  return pendingNisosAftiProjects.map((project) => ({ letter: project.slug }));
}

type PageProps = {
  params: Promise<{ letter: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { letter } = await params;
  const project = pendingNisosAftiProjects.find((item) => item.slug === letter);

  if (!project) return {};

  return createPageMetadata({
    title: `Νήσος Αυτί ${project.letter}.`,
    description: `Pending project for the ${project.letter} section of Nisos Afti.`,
    path: `/nisos-afti/${project.slug}`,
  });
}

export default async function PendingLetterPage({ params }: PageProps) {
  const { letter } = await params;
  const project = pendingNisosAftiProjects.find((item) => item.slug === letter);

  if (!project) notFound();

  const basePath = `/nisos-afti/${project.slug}`;

  return (
    <>
      <Navigation />
      <ProjectList
        basePath={basePath}
        layoutVariant="nisos"
        projects={[
          {
            number: `${project.letter}.01`,
            slug: project.slug,
            title: "Pending project",
            year: "Pending",
            gallery: "photo gallery",
            details: ["Material will be added gradually."],
          },
        ]}
        showInlineProjects
        showProjectTiles
        title={`${project.letter}.`}
      />
    </>
  );
}
