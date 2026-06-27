import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Νήσος Αυτί",
  description: "Imaginary world by Artemis Koltsida.",
};

export default function NisosAftiPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6 py-8 text-center text-black sm:px-16">
      <h1 className="text-sm font-normal leading-normal">Νήσος Αυτί</h1>
    </main>
  );
}
