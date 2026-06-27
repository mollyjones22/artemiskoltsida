export type AnalogProject = {
  number: string;
  slug: string;
  title: string;
  year: string;
  gallery: string;
  galleryReferences?: string[];
  details: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const threeDPrintProjects: AnalogProject[] = [
  {
    number: "A.01.06",
    slug: "spatha-dima",
    title: "Spatha Dima",
    year: "2025",
    gallery: "1/1",
    details: [
      "3d printed charm",
      "Dima's sword (digital drawing)",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, Rosa3D PLA Magic Silk - 1.75mm 300g Lagoon",
    ],
  },
  {
    number: "A.01.05",
    slug: "flokxistenz-zela004",
    title: "flokXistenZ [ZELA004] by FL\u00d6KOSH",
    year: "2024",
    gallery: "1/3",
    details: [
      "3d print included in ZELA004 TAPE release",
      "Flokxy's sketch (marker on paper)",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, PLA copper",
      "\u0f12\ufe0e",
      "Cassette tape and digital",
      "Collection of Flokxy's tracks since 2016 - 2024.",
      "Limited edition of 25",
      "C60",
      "Including printed insert, 3D print + CD-R",
      "\u0f12\ufe0e",
      "digital vandalism",
    ],
    links: [
      {
        label: "\u2605 zelaarchives.bandcamp.com/album/flokxistenz-zela004",
        href: "https://zelaarchives.bandcamp.com/album/flokxistenz-zela004",
      },
    ],
  },
  {
    number: "A.01.04",
    slug: "rofos-knit-stencil",
    title: "Rofos Knit Stencil",
    year: "2024",
    gallery: "1/2",
    details: [
      "Molly's Fat Flower sketch (marker on paper)",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, PLA White",
    ],
  },
  {
    number: "A.01.03",
    slug: "stencil-for-tipomata-airbrush",
    title: "Stencil for Tipomata Airbrush",
    year: "2023",
    gallery: "1/2",
    details: [
      "Drawings of Flokosh translated into stencil",
      "Pen on paper",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, PLA White",
    ],
  },
  {
    number: "A.01.02",
    slug: "tripialouda",
    title: "Tripialouda",
    year: "2023",
    gallery: "1/5",
    details: [
      "3d printed object as a festival prop.",
      "Design: Flokosh, Koketamc, Molly",
      "Printed by Tipomata",
      "Created with Photoshop 2019, Autocad 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, white PLA",
      "Colored with MONTANA COLORS waterbased SPRAY",
    ],
  },
  {
    number: "A.01.01",
    slug: "seacreatures-headpiece",
    title: "SeaCreatures Headpiece",
    year: "2023",
    gallery: "photo gallery",
    details: [
      "3D printed custom made headpiece for an extrasuperfancyqueerwedding.",
      "Created with Nomad Sculpt, Rhino 6, Meshmixer, Cura Slicer",
      "Printed with Ender 3 Pro, PLA glow in the dark blue, PLA-1.75-Copper",
      "Attached to an existing headband, star-net supported by threads, all assembled with hot glue.",
    ],
  },
];

export const analogPhotographyProjects: AnalogProject[] = [
  {
    number: "A.02.01",
    slug: "mikri-enilikiosi",
    title:
      '7 years Analog Calendar  "\u039c\u03b9\u03ba\u03c1\u03ae \u0395\u03bd\u03b7\u03bb\u03b9\u03ba\u03af\u03c9\u03c3\u03b7" (Young Adulthood)',
    year: "2014-2021",
    gallery: "1/53",
    details: [
      "Kodak, 28mm, 35mm I Minolta 50mm",
      "The photos were developed at multiple studios, printed, scanned, and digitally edited for archival purposes.",
    ],
    links: [
      {
        label: "\u2661 https://www.instagram.com/mollyjones22/",
        href: "https://www.instagram.com/mollyjones22/",
      },
    ],
  },
];

export const constructionInstallationProjects: AnalogProject[] = [
  {
    number: "A.03.03",
    slug: "tom",
    title: "Tom",
    year: "2022, 2023",
    gallery: "1/14",
    galleryReferences: ["001_Thom", "001_Thom"],
    details: [
      "PVC Zip Tie Geodesic Dome",
      "Used for the djbooth at diy festival",
      "Design: Extended Kavlona Arch Team",
      "Construction: Extended Kavlona Arch Team",
      "Tent: D.Tzatzarakis and Kavlona Arch Team",
    ],
    links: [
      {
        label: "✮www.facebook.com/tzatzarakis.tentes",
        href: "https://www.facebook.com/tzatzarakis.tentes/?locale=el_GR",
      },
    ],
  },
  {
    number: "A.03.02",
    slug: "athens-conservatorium-megaron",
    title:
      "6 7/6 Δραματική Σχολή Ωδείου Αθηνών στο Μέγαρο / Athens Conservatorium Megaron & The Athens Concert Hall",
    year: "2018",
    gallery: "1/4",
    galleryReferences: ["Victor_01", "Victor_01"],
    details: [
      "Design and production of Set and Costumes",
      "for the play “All the Theatre (in Five Scenes and Ten Variations),",
      "Victor or Power to the Children”",
      "as part of the course Transformations of the Theatrical Space",
      "with the Drama School of the Athens Conservatoire",
      "at the Athens Concert Hall.",
    ],
  },
  {
    number: "A.03.01",
    slug: "distorted-desk",
    title: "Distorted Desk",
    year: "2017",
    gallery: "photo gallery",
    galleryReferences: ["001_Distorted Desk"],
    details: [
      "LabNTUA Arch School Project (5th Semester)",
      "Reworked school equipment with aerial yoga fabrics, transformed into a hammock.",
      "Design: Koltsida A., Mitsikostas D., Papadopoulou E.",
      "Supervisors: Grigoriadis I., Gyparakis G., Ntaflos K.",
      "Created at ArchNTUA Lab",
    ],
  },
];

export const analogProjectGroups = {
  "3d-prints": {
    title: "3D Prints",
    basePath: "/analog/3d-prints",
    projects: threeDPrintProjects,
  },
  "analog-photography": {
    title: "Analog Photography",
    basePath: "/analog/analog-photography",
    projects: analogPhotographyProjects,
  },
  "constructions-installations": {
    title: "Constructions - Installations",
    basePath: "/analog/constructions-installations",
    projects: constructionInstallationProjects,
  },
};
