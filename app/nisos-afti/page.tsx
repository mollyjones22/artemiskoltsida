import type { Metadata } from "next";
import Link from "next/link";

const title = "\u039d\u03ae\u03c3\u03bf\u03c2 \u0391\u03c5\u03c4\u03af";

export const metadata: Metadata = {
  title,
  description: "A fake wiki page for Artemis Koltsida's imaginary island.",
};

export default function NisosAftiPage() {
  return (
    <main className="bg-white px-6 py-8 text-black sm:px-12">
      <article className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <section className="max-w-3xl">
          <p className="mb-2 text-sm leading-normal">from the free imaginary encyclopedia</p>
          <h1 className="mb-4 text-2xl font-normal leading-normal underline underline-offset-4">
            {title}
          </h1>
          <p className="mb-4 text-base leading-normal">
            {title} is an imaginary island, an archive territory, and a
            soft map for stories, images, objects, and invented evidence.
          </p>
          <p className="mb-4 text-base leading-normal">
            Its geography changes depending on who remembers it. Some entries
            are written like documents, some like gossip, and some like letters
            found before they were sent.
          </p>
          <p className="text-base leading-normal">
            This page is a placeholder for the island wiki. More districts,
            myths, dates, artifacts, and witnesses can be added here later.
          </p>
        </section>

        <aside className="border border-black p-3 text-sm leading-normal">
          <h2 className="mb-3 text-center text-base font-normal underline underline-offset-4">
            {title}
          </h2>

          <Link
            href="/nisos-afti/letter-a"
            className="group block no-underline"
            aria-label="Open letter A story"
          >
            <div className="mb-3 flex h-16 items-center justify-center border border-[#0000ee] text-3xl leading-none text-black group-hover:text-[#0000ee]">
              A
            </div>
            <div className="flex aspect-[4/5] items-center justify-center border border-dashed border-black p-4 text-center">
              Island image placeholder
            </div>
          </Link>

          <dl className="mt-4 grid grid-cols-[5rem_minmax(0,1fr)] gap-x-3 gap-y-1">
            <dt>Type</dt>
            <dd>Imaginary island</dd>
            <dt>Status</dt>
            <dd>Unverified</dd>
            <dt>Known for</dt>
            <dd>Letters, stories, artifacts</dd>
          </dl>
        </aside>
      </article>
    </main>
  );
}
