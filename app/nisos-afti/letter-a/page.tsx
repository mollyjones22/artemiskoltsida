import type { Metadata } from "next";
import Link from "next/link";

const islandTitle = "\u039d\u03ae\u03c3\u03bf\u03c2 \u0391\u03c5\u03c4\u03af";

export const metadata: Metadata = {
  title: `Letter A | ${islandTitle}`,
  description: "A story and artwork entry from the imaginary island.",
};

export default function LetterAStoryPage() {
  return (
    <main className="bg-white px-6 py-8 text-black sm:px-12">
      <article className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <section className="max-w-3xl">
          <Link href="/nisos-afti" className="mb-6 inline-block">
            Back to {islandTitle}
          </Link>

          <p className="mb-2 text-sm leading-normal">letter entry</p>
          <h1 className="mb-4 text-2xl font-normal leading-normal underline underline-offset-4">
            A
          </h1>

          <div className="flex flex-col gap-4 text-base leading-normal">
            <p>
              Story placeholder. This is where the text connected to the
              letter A will live.
            </p>
            <p>
              You can send me the final story later and I will place it here
              with the same fake-wiki feeling.
            </p>
          </div>
        </section>

        <aside className="flex min-h-80 items-center justify-center border border-dashed border-black p-6 text-center text-sm leading-normal">
          Artwork placeholder
        </aside>
      </article>
    </main>
  );
}
