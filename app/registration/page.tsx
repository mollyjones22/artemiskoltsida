import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Registration",
};

export default function RegistrationPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base sm:px-16 sm:text-lg">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          Seminar in Greek Rhetoric, Law, and Society (Fall&nbsp;2026)
        </h2>
        <p className="mb-4">
          Register{" "}
          <a
            href="https://ufl.zoom.us/meeting/register/yEKkh4B5Qw2oOP51ByiaTg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#231e59] underline hover:text-black"
          >
            here
          </a>{" "}
          in advance for these meetings: the same link will be used for the
          entire series.
        </p>
      </main>
    </>
  );
}
