import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { createPageMetadata, SITE_NAME, SITE_URL } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: `${SITE_NAME} | University of Florida`,
  description:
    "Join the Fall 2026 University of Florida virtual seminar series on Greek rhetoric, law, and society, organized by Ifigeneia Giannadaki.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "Seminar Series in Greek Rhetoric, Law, and Society",
    description:
      "A Fall 2026 virtual academic seminar series on Greek rhetoric, law, and society.",
    url: SITE_URL,
    image: `${SITE_URL}/social-card.png`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    organizer: {
      "@type": "Person",
      name: "Ifigeneia Giannadaki",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "University of Florida",
        url: "https://www.ufl.edu/",
      },
      sameAs: "https://florida.academia.edu/IfigeneiaGiannadaki",
    },
  };

  return (
    <div
      className="relative min-h-screen text-black"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navigation />
      <main className="min-h-screen" />
    </div>
  );
}
