import type { AnalogProject } from "../analog/projects";

export const diplomaThesisProjects: AnalogProject[] = [
  {
    number: "D.03.01",
    slug: "furniture-in-the-production-of-space",
    title:
      "Furniture in the production of space: Network of local sex education centers",
    year: "2021",
    gallery: "1/13",
    galleryReferences: [
      "001_Koltsida A._Papadopoulou E.",
      "001_Koltsida A._Papadopoulou E.",
    ],
    details: [
      "Architectural Engineering NTUA, Dept III: Architectural language, communication and design",
      "Diploma Thesis by Koltsida A. and Papadopoulou E.",
      "Advisors: Stavridis S., Vasilatos P., Koutrolikou P.",
      "The present work concerns the establishment of a methodology towards the creation of a network of Neighborhood Centers for Sex Education. The aim is to reuse empty ground floors within the metropolitan area in terms of kit-housing. The kit consists of a construction vocabulary - flatpack design which resides within the selected shells, meeting the specifications of a sensitive space, ensuring safety, intimacy and visibility. The pilot study is applied at Gyzi, a neighborhood located in the centre of Athens.",
    ],
    links: [
      {
        label: "☁︎dspace.lib.ntua.gr/xmlui/handle/123456789/53148",
        href: "https://dspace.lib.ntua.gr/xmlui/handle/123456789/53148",
      },
    ],
  },
];

export const digitalProjectGroups = {
  "diploma-thesis-architecture": {
    title: "Diploma Thesis (Architecture)",
    basePath: "/digital/diploma-thesis-architecture",
    projects: diplomaThesisProjects,
  },
};
