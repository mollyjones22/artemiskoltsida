import Link from "next/link";
import type { AnalogProject } from "./projects";

type ProjectListProps = {
  basePath: string;
  projects: AnalogProject[];
  showProjectTiles?: boolean;
  title: string;
};

export default function ProjectList({
  basePath,
  projects,
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
                href={`${basePath}/${project.slug}#photo-gallery`}
                className="flex aspect-square w-full max-w-[4.5rem] items-center justify-center border border-[#0000ee] p-2 text-center text-sm leading-none text-black no-underline hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                aria-label={`Open ${project.number} photo gallery`}
              >
                {project.number}
              </Link>
            ))}
          </nav>
        ) : null}

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
      </section>
    </main>
  );
}
