import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Analog",
  description:
    "Analog portfolio projects by Artemis Koltsida, including physical art projects and media notes.",
  path: "/analog",
});

const lines = [
  { text: "\u269b\ufe0e Open the dropdown analog menu for physical art projects. \u269b\ufe0e" },
  { text: "\u200b" },
  { text: "\u200b" },
  { text: "Yearly Shorted Projects including:" },
  { text: "Project Name (Year)\u200b", underline: true },
  { text: "Project Description" },
  { text: "Medias Used" },
  { text: "*Link" },
];

export default function AnalogPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-8 text-center text-black sm:px-16">
        <div className="flex max-w-3xl flex-col gap-1 text-sm leading-normal">
          {lines.map((line, index) => (
            <p
              key={`${line.text}-${index}`}
              className={line.underline ? "underline underline-offset-4" : undefined}
            >
              {line.text}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}
