import type { AnalogProject } from "../analog/projects";

type NisosAftiProjectGroup = {
  title: string;
  basePath: string;
  projects: AnalogProject[];
};

const lambdaProjects: AnalogProject[] = [
  {
    number: "Λ.01",
    slug: "lexiko-aftiou",
    title: "Λεξικό Αυτιού",
    year: "",
    gallery: "photo gallery",
    details: [
      "Dictionary entry from the imaginary island archive.",
      "A small vocabulary of names, places, sounds, and repeated phrases.",
      "Photo placeholders can be replaced with scans, drawings, or archival images.",
    ],
  },
  {
    number: "Λ.02",
    slug: "leukoma-xoriou",
    title: "Λεύκωμα Χωριού",
    year: "",
    gallery: "photo gallery",
    details: [
      "Album page for the capital of the island.",
      "Placeholder for photographs, handwritten labels, and domestic fragments.",
    ],
  },
];

const deltaProjects: AnalogProject[] = [
  {
    number: "Δ.01",
    slug: "deltio-aktis",
    title: "Δελτίο ακτής",
    year: "",
    gallery: "photo gallery",
    details: [
      "Coastal notice from the island edge.",
      "A project entry for maps, tide notes, warning signs, and sea-weather images.",
    ],
  },
  {
    number: "Δ.02",
    slug: "diadromes",
    title: "Διαδρομές",
    year: "",
    gallery: "photo gallery",
    details: [
      "Walking routes through the invented geography of Αυτί.",
      "Placeholder project for paths, crossings, and marked distances.",
    ],
  },
];

const piProjects: AnalogProject[] = [
  {
    number: "Π.01",
    slug: "prosopiko-arxeio",
    title: "Προσωπικό αρχείο",
    year: "",
    gallery: "photo gallery",
    details: [
      "Personal archive entry connected to the Νήσος Αυτί page.",
      "A container for notes, letters, scans, and image fragments.",
    ],
  },
  {
    number: "Π.02",
    slug: "parathyro",
    title: "Παράθυρο",
    year: "",
    gallery: "photo gallery",
    details: [
      "A small window into a separate project page.",
      "This entry keeps the same project structure used across the portfolio.",
    ],
  },
];

const pyroksanthaMalliaProjects: AnalogProject[] = [
  {
    number: "Α.01",
    slug: "pyroksantha-mallia",
    title: "πυρόξανθα μαλλιά",
    year: "",
    gallery: "photo gallery",
    details: [
      "Image-story entry from the mock wiki archive.",
      "Placeholder for the final photographs and accompanying text.",
    ],
  },
];

export const nisosAftiProjectGroups: Record<string, NisosAftiProjectGroup> = {
  lambda: {
    title: "Λ.",
    basePath: "/nisos-afti/lambda",
    projects: lambdaProjects,
  },
  delta: {
    title: "Δ.",
    basePath: "/nisos-afti/delta",
    projects: deltaProjects,
  },
  pi: {
    title: "Π.",
    basePath: "/nisos-afti/pi",
    projects: piProjects,
  },
  "pyroksantha-mallia": {
    title: "πυρόξανθα μαλλιά",
    basePath: "/nisos-afti/pyroksantha-mallia",
    projects: pyroksanthaMalliaProjects,
  },
};
