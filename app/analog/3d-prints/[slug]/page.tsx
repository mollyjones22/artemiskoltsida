import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../../../components/Navigation";
import ProjectPage from "../../ProjectPage";
import { analogProjectGroups } from "../../projects";
import { createPageMetadata } from "../../../seo";

const group = analogProjectGroups["3d-prints"];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return group.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = group.projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    title: `${project.title} (${project.year})`,
    description: `${project.number} 3D Prints project by Artemis Koltsida.`,
    path: `${group.basePath}/${project.slug}`,
  });
}

export default async function ThreeDPrintProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = group.projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = group.projects[projectIndex];

  return (
    <>
      <Navigation />
      <ProjectPage
        basePath={group.basePath}
        project={project}
        previousProject={group.projects[projectIndex - 1]}
        nextProject={group.projects[projectIndex + 1]}
      />
    </>
  );
}
