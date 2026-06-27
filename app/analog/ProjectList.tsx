import Link from "next/link";
import type { AnalogProject } from "./projects";

type ProjectListProps = {
  basePath: string;
  projects: AnalogProject[];
  showInlineProjects?: boolean;
  showProjectTiles?: boolean;
  title: string;
};

export default function ProjectList({
  basePath,
  projects,
  showInlineProjects = false,
  showProjectTiles = false,
  title,
}: ProjectListProps) {
  return (
    <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
      <section className="mx-auto max-w-4xl" aria-labelledby="category-title">
        <h1 id="category-title" className="sr-only">
          {title}
        </h1>

        {showProjectTiles ? (
          <nav
            aria-label={`${title} project gallery links`}
            className="mb-10 grid grid-cols-3 gap-2 sm:grid-cols-6"
          >
            {projects.map((project) => (
              <Link
                key={`${project.number}-tile`}
                href={
                  showInlineProjects
                    ? `#${project.slug}`
                    : `${basePath}/${project.slug}#photo-gallery`
                }
                className="flex aspect-square w-full max-w-[4.5rem] items-center justify-center border border-[#0000ee] p-2 text-center text-sm leading-none text-black no-underline hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                aria-label={`Jump to ${project.number}`}
              >
                {project.number}
              </Link>
            ))}
          </nav>
        ) : null}

        {showInlineProjects ? (
          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <article
                key={project.number}
                id={project.slug}
                className="scroll-mt-8 grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <p className="text-sm leading-normal">{project.number}</p>
                <div>
                  <h2 className="mb-3 text-lg font-normal leading-normal underline underline-offset-4">
                    {project.title} ({project.year})
                  </h2>

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
                    className="flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
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
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <article
                key={project.number}
                className="grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <p className="text-sm leading-normal">{project.number}</p>
                <Link
                  href={`${basePath}/${project.slug}`}
                  className="text-lg font-normal leading-normal underline underline-offset-4"
                >
                  {project.title} ({project.year})
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
