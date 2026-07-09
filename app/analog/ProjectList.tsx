import Link from "next/link";
import ProjectGallery from "../components/ProjectGallery";
import { getProjectPhotos } from "../gallery";
import type { AnalogProject } from "./projects";

type ProjectListProps = {
  basePath: string;
  layoutVariant?: "default" | "nisos";
  projects: AnalogProject[];
  showInlineProjects?: boolean;
  showProjectTiles?: boolean;
  title: string;
};

export default function ProjectList({
  basePath,
  layoutVariant = "default",
  projects,
  showInlineProjects = false,
  showProjectTiles = false,
  title,
}: ProjectListProps) {
  const isNisosLayout = layoutVariant === "nisos";

  return (
    <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
      <section className="mx-auto max-w-4xl" aria-labelledby="category-title">
        <h1 id="category-title" className="sr-only">
          {title}
        </h1>

        {showProjectTiles ? (
          <nav
            aria-label={`${title} project gallery links`}
            className={
              isNisosLayout ? "mb-10" : "mb-10 grid grid-cols-3 gap-2 sm:grid-cols-6"
            }
          >
            {isNisosLayout ? (
              <Link
                href="/nisos-afti/map"
                className="flex aspect-[4/3] w-full max-w-40 items-center justify-center border border-dashed border-black bg-white px-4 text-center text-sm leading-normal text-black no-underline hover:border-[#0000ee] hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                aria-label="Open Nisos Afti map"
              >
                map placeholder
              </Link>
            ) : (
              projects.map((project) => {
                const firstPhoto = getProjectPhotos(project.number, project.title)[0];

                return (
                  <Link
                    key={`${project.number}-tile`}
                    href={
                      showInlineProjects
                        ? `#${project.slug}`
                        : `${basePath}/${project.slug}#photo-gallery`
                    }
                    className="relative flex aspect-square w-full max-w-[4.5rem] items-center justify-center overflow-hidden border border-[#0000ee] bg-white p-2 text-center text-sm leading-none text-black no-underline hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                    aria-label={`Jump to ${project.number}`}
                  >
                    {firstPhoto ? (
                      <img
                        src={firstPhoto.src}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : null}
                    <span className="relative z-10 bg-white/80 px-1 py-0.5">
                      {project.number}
                    </span>
                  </Link>
                );
              })
            )}
          </nav>
        ) : null}

        {showInlineProjects ? (
          <div className="flex flex-col gap-12">
            {projects.map((project) => (
              <article
                key={project.number}
                id={project.slug}
                className={
                  isNisosLayout
                    ? "scroll-mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] sm:items-start"
                    : "scroll-mt-8 grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
                }
              >
                {isNisosLayout ? (
                  <ProjectGallery
                    gallery={project.gallery}
                    references={project.galleryReferences}
                    title={project.title}
                    number={project.number}
                    variant="nisos"
                  />
                ) : (
                  <p className="text-sm leading-normal">{project.number}</p>
                )}
                <div className={isNisosLayout ? "sm:pt-1" : undefined}>
                  <h2
                    className={`mb-3 font-normal leading-normal underline underline-offset-4 ${
                      isNisosLayout ? "text-sm" : "text-lg"
                    }`}
                  >
                    {isNisosLayout ? (
                      <>
                        {project.year ? (
                          <span className="block">{project.year}</span>
                        ) : null}
                        <span className="block">{project.title}</span>
                      </>
                    ) : (
                      <>
                        {project.title}
                        {project.year ? ` (${project.year})` : ""}
                      </>
                    )}
                  </h2>

                  <div
                    className={`mb-4 flex flex-col gap-1 leading-normal ${
                      isNisosLayout ? "text-sm" : "text-base"
                    }`}
                  >
                    {project.details.map((detail, index) => (
                      <p
                        key={`${project.number}-${index}`}
                        className={
                          typeof detail === "string"
                            ? undefined
                            : detail.underline
                              ? "underline underline-offset-4"
                              : undefined
                        }
                      >
                        {typeof detail === "string" ? detail : detail.text}
                      </p>
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

                  {!isNisosLayout ? (
                    <ProjectGallery
                      gallery={project.gallery}
                      references={project.galleryReferences}
                      title={project.title}
                      number={project.number}
                    />
                  ) : null}
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
                  {project.title}
                  {project.year ? ` (${project.year})` : ""}
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
