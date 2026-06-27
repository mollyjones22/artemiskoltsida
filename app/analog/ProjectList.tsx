import Link from "next/link";
import type { AnalogProject } from "./projects";

type ProjectListProps = {
  basePath: string;
  projects: AnalogProject[];
  title: string;
};

export default function ProjectList({
  basePath,
  projects,
  title,
}: ProjectListProps) {
  return (
    <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
      <section className="mx-auto max-w-4xl" aria-labelledby="category-title">
        <h1 id="category-title" className="sr-only">
          {title}
        </h1>

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
