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
    slug: "dracocasa",
    title: "Dracocasa",
    year: "2025",
    gallery: "photo gallery",
    details: [
      "Story by Molly",
      "Music by NAEUS",
      "For KRAMA ENTRIES, aired on March 25, 2025",
      "In the northern part of Afti, a towering column crowned by a great cauldron rises above the fog. Similar structures stretch down the Pindus mountains, once used to signal threats of disease. A dragon, guardian of the island’s health, kept watch, lighting the fire whenever the Peloponnese cauldron burned, a constant reality in recent months.",
      "A band of pirates, lost at sea, sought refuge in a cave near the dragon’s lair, Dracocasa. Determined to extinguish the beast’s fire and enter the island unhindered, they devised a trap: they soaked a body they found in the cave in alcohol. When the dragon devoured it, its flames erupted violently, exploding the beast and snuffing out the undetected fire.",
      "Unaware, the people of Afti welcomed travelers home, unknowingly inviting tragedy. When the fog lifted, they found the dragon’s remains. The Big Disease swept through Afti, Antikythera, and Crete. Too late, they realized, none were left to warn them.",
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
