import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Analog",
  description:
    "Analog portfolio projects by Artemis Koltsida, including physical art projects and media notes.",
  path: "/analog",
});

export default function AnalogPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[42vh] items-center justify-center bg-white px-6 py-6 text-center text-black sm:px-16">
        <div className="flex max-w-3xl flex-col gap-1 text-base leading-normal">
          <p>
            {"\u269b\ufe0e"} Open the dropdown analog menu for physical art
            projects. {"\u269b\ufe0e"}
          </p>
        </div>
      </main>
    </>
  );
}
