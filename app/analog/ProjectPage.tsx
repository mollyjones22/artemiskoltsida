import Link from "next/link";
import type { AnalogProject } from "./projects";

type ProjectPageProps = {
  basePath: string;
  project: AnalogProject;
  previousProject?: AnalogProject;
  nextProject?: AnalogProject;
};

export default function ProjectPage({
  basePath,
  project,
  previousProject,
  nextProject,
}: ProjectPageProps) {
  return (
    <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
      <article className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]">
        <p className="text-sm leading-normal">{project.number}</p>
        <div>
          <h1 className="mb-3 text-lg font-normal leading-normal underline underline-offset-4">
            {project.title} ({project.year})
          </h1>

          <div className="mb-4 flex flex-col gap-1 text-base leading-normal">
            {project.details.map((detail, index) => (
              <p key={`${project.number}-${index}`}>{detail}</p>
            ))}
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            id="photo-gallery"
            className="mb-6 flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
            aria-label={`${project.title} photo gallery placeholder`}
          >
            <p>
              Photo gallery placeholder
              <br />
              {project.galleryReferences?.map((reference) => (
                <span key={reference}>
                  {reference}
                  <br />
                </span>
              ))}
              {project.gallery}
            </p>
          </div>

          <nav
            className="flex justify-between gap-4 text-base leading-normal"
            aria-label="Project navigation"
          >
            {previousProject ? (
              <Link href={`${basePath}/${previousProject.slug}`}>
                Previous: {previousProject.number}
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link href={`${basePath}/${nextProject.slug}`}>
                Next: {nextProject.number}
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </main>
  );
}
