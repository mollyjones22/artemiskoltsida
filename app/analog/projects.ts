export type AnalogProject = {
  number: string;
  slug: string;
  title: string;
  year: string;
  gallery: string;
  galleryReferences?: string[];
  details: (
    | string
    | {
        bold?: boolean;
        italic?: boolean;
        text: string;
        spacerBefore?: boolean;
        underline?: boolean;
      }
  )[];
  links?: {
    label: string;
    href: string;
    spacerBefore?: boolean;
  }[];
  mediaLinks?: {
    afterPhoto?: number;
    href: string;
    label: string;
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
      "3D-printed charm.",
      "Based on a digital drawing of Dima's sword.",
      "Scanned with a phone camera.",
      "Converted into a DWG file using free online conversion tools.",
      "Created using AutoCAD 2022, Rhino 6, and Cura Slicer.",
      "Printed on an Ender 3 Pro using Rosa3D PLA Magic Silk in Lagoon, 1.75 mm, 300 g.",
    ],
  },
  {
    number: "A.01.05",
    slug: "flokxistenz-zela004",
    title: "flokXistenZ [ZELA004] by FL\u00d6KOSH",
    year: "2024",
    gallery: "1/3",
    details: [
      "3D print included in the ZELA004 tape release.",
      "Based on Flokxy's marker-on-paper sketch.",
      "Scanned with a phone camera.",
      "Converted into a DWG file using free online conversion tools.",
      "Created using AutoCAD 2022, Rhino 6, and Cura Slicer.",
      "Printed on an Ender 3 Pro using copper PLA.",
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
      "Based on Molly's ‘Fat Flower’ marker-on-paper sketch.",
      "Scanned with a phone camera.",
      "Converted into a DWG file using free online conversion tools.",
      "Created using AutoCAD 2022, Rhino 6, and Cura Slicer.",
      "Printed on an Ender 3 Pro using white PLA.",
    ],
  },
  {
    number: "A.01.03",
    slug: "stencil-for-tipomata-airbrush",
    title: "Airbrush Stencil for Tipomata",
    year: "2023",
    gallery: "1/2",
    details: [
      "Drawings by Flokosh translated into an airbrush stencil.",
      "Pen on paper.",
      "Scanned with a phone camera.",
      "Converted into a DWG file using free online conversion tools.",
      "Created using AutoCAD 2022, Rhino 6, and Cura Slicer.",
      "Printed on an Ender 3 Pro using white PLA.",
    ],
  },
  {
    number: "A.01.02",
    slug: "tripialouda",
    title: "Tripialouda",
    year: "2023",
    gallery: "1/5",
    details: [
      "3D-printed object created as a festival prop.",
      "Design: Flokosh, Koketamc, and Molly.",
      "Printed by Tipomata.",
      "Created using Photoshop 2019, AutoCAD 2022, Rhino 6, and Cura Slicer.",
      "Printed on an Ender 3 Pro using white PLA.",
      "Painted with MONTANA COLORS water-based spray paint.",
    ],
  },
  {
    number: "A.01.01",
    slug: "seacreatures-headpiece",
    title: "Sea Creatures Headpiece",
    year: "2023",
    gallery: "photo gallery",
    details: [
      "A custom-made, 3D-printed headpiece for an extra-super-fancy queer wedding.",
      "Created using Nomad Sculpt, Rhino 6, Meshmixer, and Cura Slicer.",
      "Printed on an Ender 3 Pro using glow-in-the-dark blue PLA and 1.75 mm copper PLA.",
      "Attached to an existing headband. The star-shaped net was supported with thread, and all components were assembled using hot glue.",
    ],
  },
];

export const analogPhotographyProjects: AnalogProject[] = [
  {
    number: "A.02.01",
    slug: "mikri-enilikiosi",
    title:
      "\u039c\u03b9\u03ba\u03c1\u03ae \u0395\u03bd\u03b7\u03bb\u03b9\u03ba\u03af\u03c9\u03c3\u03b7 (Young Adulthood): A 7-Year Analog Calendar",
    year: "2014–2021",
    gallery: "1/53",
    details: [
      "Kodak 35 mm camera with a 28 mm lens; Minolta camera with a 50 mm lens.",
      "The film was developed at several photography labs. The photographs were then printed, scanned, and digitally edited for archival purposes.",
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
    number: "A.03.05",
    slug: "matter-in-the-park",
    title: "Matter in the Park",
    year: "2025",
    gallery: "photo gallery",
    details: [
      "Pedion tou Areos, Athens, Greece.",
      "Collaborative design and construction of a temporary bar, two entrance gateways, and a stage using the Clouds system by LUDD Studio.",
      "Scenography and decorative treatment of the stage and entrance gateways, developed in collaboration with Pits and Io. The work featured patchwork textile installations and large-scale airbrushed artwork.",
    ],
    links: [
      {
        label: "✦ ra.co/events/2253643",
        href: "https://ra.co/events/2253643",
      },
    ],
  },
  {
    number: "A.03.04",
    slug: "bench-from-found-stones",
    title: "Bench from Found Stones",
    year: "2024",
    gallery: "photo gallery",
    details: [
      "An outdoor bench constructed from stones found in the courtyard.",
    ],
  },
  {
    number: "A.03.03",
    slug: "tom",
    title: "Tom",
    year: "2022–2023",
    gallery: "1/14",
    galleryReferences: ["001_Thom", "001_Thom"],
    details: [
      "PVC zip-tie geodesic dome.",
      "Used as the DJ booth at a DIY festival.",
      "Design: Extended Kavlona Arch Team.",
      "Construction: Extended Kavlona Arch Team.",
      "Tent fabrication: D. Tzatzarakis and Kavlona Arch Team.",
    ],
    links: [
      {
        label: "✦ facebook.com/tzatzarakis.tentes",
        href: "https://www.facebook.com/tzatzarakis.tentes/?locale=el_GR",
      },
    ],
  },
  {
    number: "A.03.02",
    slug: "athens-conservatorium-megaron",
    title:
      "A History of the Theatre in Five Scenes and Ten Variations — Athens Conservatoire Drama School",
    year: "2018",
    gallery: "1/4",
    galleryReferences: ["Victor_01", "Victor_01"],
    details: [
      "Set and costume design and production for Roger Vitrac's Victor, or Power to the Children, presented as part of A History of the Theatre in Five Scenes and Ten Variations.",
      "Created as part of the course Transformations of Theatrical Space.",
      "Developed in collaboration with the Athens Conservatoire Drama School and presented at the Athens Concert Hall.",
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
      "Fifth-semester architecture project at LabNTUA, NTUA School of Architecture.",
      "School equipment reworked with aerial-yoga fabric and transformed into a hammock.",
      "Design: A. Koltsida, D. Mitsikostas, and E. Papadopoulou.",
      "Supervisors: I. Grigoriadis, G. Gyparakis, and K. Ntaflos.",
      "Created at ArchNTUA Lab.",
    ],
  },
];

export const drawingProjects: AnalogProject[] = [
  {
    number: "A.04.11",
    slug: "mothers-love",
    title: "Mother's Love",
    year: "2026",
    gallery: "photo gallery",
    details: [
      "Oil pastels on Fabriano Rosaspina paper (60% cotton), 285 gsm, 100 × 70 cm.",
    ],
  },
  {
    number: "A.04.10",
    slug: "dolce-vita-mesimeri",
    title: "Dolce Vita Mesimeri",
    year: "2026",
    gallery: "photo gallery",
    details: [
      "Oil pastels on Fabriano Rosaspina paper (60% cotton), 285 gsm, 100 × 70 cm.",
    ],
  },
  {
    number: "A.04.09",
    slug: "diloti",
    title: "Diloti",
    year: "2026",
    gallery: "photo gallery",
    details: ["Watercolour pencils on Fabriano paper, 35 × 50 cm."],
  },
  {
    number: "A.04.08",
    slug: "kitchen-party",
    title: "Kitchen Party",
    year: "2026",
    gallery: "photo gallery",
    details: [
      "Faber-Castell Polychromos coloured pencils on paper, 35 × 50 cm.",
    ],
  },
  {
    number: "A.04.07",
    slug: "zzz",
    title: "zzz",
    year: "2026",
    gallery: "photo gallery",
    details: [
      "Dry pastels on Fabriano Rosaspina paper (60% cotton), 285 gsm, 100 × 70 cm.",
    ],
  },
  {
    number: "A.04.06",
    slug: "everything-is-important",
    title: "Everything Is Important",
    year: "2025",
    gallery: "1/1",
    galleryReferences: ["everything is important2", "everything is important2"],
    details: [
      "Markers on Fabriano Rosaspina paper (60% cotton), 285 gsm, 100 × 70 cm.",
    ],
  },
  {
    number: "A.04.05",
    slug: "random-ikaria-dream",
    title: "Random Ikaria Dream",
    year: "2025",
    gallery: "1/1",
    galleryReferences: ["Ikaria Dream", "Ikaria Dream"],
    details: [
      "Kaweco SKETCH UP 5.6 mm Satin Chrome pencil on premium cotton watercolour paper, 300 gsm, 35 × 50 cm.",
    ],
  },
  {
    number: "A.04.04",
    slug: "mayi",
    title: "Mayi",
    year: "2024",
    gallery: "1/4",
    galleryReferences: ["001_Mayi", "001_Mayi"],
    details: [
      "Oil pastels on Fabriano Rosaspina paper (60% cotton), 285 gsm, 100 × 70 cm.",
      "Linocut: 12 × 16 cm, printed with red Caligo vegetable-oil-based ink.",
      "Three-colour Risograph print produced at Dolce Pub using soy- and rice-oil-based inks on slightly yellow Aralda paper, 200 gsm, A3.",
    ],
  },
  {
    number: "A.04.03",
    slug: "fraud-effect",
    title: "Fraud Effect",
    year: "2023–present",
    gallery: "1/17",
    galleryReferences: ["017_Fraud", "017_Fraud"],
    details: [
      "Painting crew: studio sessions.",
      "Media: airbrush paint, charcoal, markers, oil-based acrylics, oil pastels, pen, pencil, and spray paint.",
      "Photographed with a phone camera.",
      "Scanned using a CanoScan LiDE 120.",
      "Archive:",
      "⛓ 3E3",
    ],
    links: [
      {
        label: "☾ fraud-2023.tumblr.com",
        href: "https://fraud-2023.tumblr.com/",
      },
    ],
  },
  {
    number: "A.04.02",
    slug: "stoa",
    title: "Stoa",
    year: "2020",
    gallery: "1/22",
    galleryReferences: ["s16", "s16"],
    details: [
      "Painting inside a tunnel in Chalandri, Greece.",
      "Team: Dima, Jim, LeToulo, Molly, and Thanos.",
      "Media: spray paint and oil-based acrylics.",
      "Lighting: candles.",
      "Photographed with a phone camera.",
    ],
  },
  {
    number: "A.04.01",
    slug: "dragon-legend",
    title: "Dragon Legend",
    year: "2019",
    gallery: "1/20",
    galleryReferences: ["01 INTRO NOTE", "01 INTRO NOTE"],
    details: [
      "Outdoor painting walk in Amfikleia, Greece.",
      "Team: Dima, Jim, LeToulo, Molly, and Thanos.",
      "Media: spray paint, oil-based acrylics, and Posca markers.",
      "Photographed with a phone camera.",
      "Story by LeToulo.",
      "Created using Photoshop CC.",
    ],
  },
];

export const silkscreenPrintProjects: AnalogProject[] = [
  {
    number: "A.05.01",
    slug: "tipomata",
    title: "Tipomata",
    year: "2019–present",
    gallery: "1/8",
    galleryReferences: [
      "01_tipomata_aeroplanofront",
      "01_tipomata_aeroplanofront",
    ],
    details: [
      "Hand-pulled screen printing in a DIY studio.",
      "Affordable clothing featuring original artwork.",
      "Water-based inks.",
      {
        text: "Tipomata Diary",
        underline: true,
      },
      "2019: Dima, Pits, Tsolis, Maria Tolia",
      "2020: Dima for Qualia, Sophia-Danae Vorvyla, Marily Marouley, Kukuli (tags), Tsolis",
      "2021: Mr Egglemon and the headfish, Moska Antigoni, Siel Athens (tags), Boseque, Gatamavrh, Dima, Pits, Sophia-Danae Vorvyla, Marily Marouley",
      "2022: Demi, Aspalaxcomic, Flokosh, Dima, Pits, Tsolis, Sophia-Danae Vorvyla, Marily Marouley, Boseque, Gatamavrh, Moska Antigoni",
      "2023: Demi, Flokosh, Dima, Pits, Tsolis, Sophia-Danae Vorvyla, Marily Marouley, Moska Antigoni, KoketaMC, Palmer, Meper, Rengin, Latraac, Jinxygoat, Gioukoulele, mctsel, Thomas, FRAUD EFFECT",
      "2024: Demi, Flokosh, Dima, Pits, Tsolis, Sophia-Danae Vorvyla, Marily Marouley, Moska Antigoni, KoketaMC, Andreas Palmer, Meper, Rengin, Latraac, Jinxygoat, Gioukoulele, mctsel, Thomas, FRAUD EFFECT, RofosKnit, Georgia Zachari, Dolce Pub, Cottagecore.fm, Io Papadatou, Zela Archives",
      "2025: Dima, D-Eras, Makalle, Kiko, NetFree (a story by mctsel, Left, and Molly)",
      "2026: Kiko, Giouli, Akonisma, featuring Orama Archive",
      {
        text: "Tipomata Bazaar Diary",
        underline: true,
      },
      "2021: 5–6 June: Tourlou Zine Fest",
      "8 July: Navarinou 12",
      "9 October: Tourlou Fest 2",
      "10 October: ENSP",
      "16–17 October: 2510SPACE",
      "2022: 21 May: Tourlou 3",
      "12 June: DozenMinds Vol. 2",
      "7 October: Tourlou 4",
      "2023: 11–12 March: TERAS",
      "8–9 April: Spring Market",
      "3–4 June: IntoTheSpot",
      "21–22 October: TERAS",
      "9 December: TULPA",
      "28 December: Andreas Palmer × Tipomata at TETOIO VINTAGE",
      "2024: 18–19 May: Rejuv × Clofie at ROMANTSO",
      "5 June: Cottagecore.fm Merch Launch at Tetoio",
      "13 October: Showroom Ta Lelouda",
      "28 October: Tetoio Vintage with Rozzita",
      "2025: 30 June–1 July: IntoTheSpot; 13–14 December: Unbound Expressions; 20–21 December: IntoTheSpot",
      "2026: 22 March: FORMWAVE; 30–31 May: IntoTheSpot",
    ],
    links: [
      {
        label: "𓃰 instagram.com/tipomata/",
        href: "https://www.instagram.com/tipomata/",
      },
    ],
  },
];

export const zineProjects: AnalogProject[] = [
  {
    number: "A.06.06",
    slug: "netfree",
    title: "NetFree",
    year: "2025",
    gallery: "photo gallery",
    details: [
      "A story by mctsel, left, and molly.",
      "A dystopian story presented as a photographic zine, featuring a mini capsule of archival garments from the André Courrèges × La Redoute Summer 2007 collection. The garments were hand-painted and airbrushed by FlökosH and Molly.",
    ],
  },
  {
    number: "A.06.05",
    slug: "softathens",
    title: "SOFTATHENS by CARHARTT WIP × LATRAAC × TIPOMATA",
    year: "2023",
    gallery: "1/2",
    galleryReferences: ["softathens01", "softathens01"],
    details: [
      "An unbound zine made from a series of standalone Risograph prints.",
      "Two stories by Giannis Galiatsos.",
      "Printed at Dolce Pub.",
    ],
  },
  {
    number: "A.06.04",
    slug: "adelfes-spiti",
    title: "Αδελφές/Σπίτι",
    year: "2019",
    gallery: "1/5",
    galleryReferences: ["001_SistersHome", "001_SistersHome"],
    details: [
      "A self-published zine featuring a poem and photographs.",
      "Cover artwork: an iPad sketch.",
    ],
  },
  {
    number: "A.06.03",
    slug: "cd-booklet-desert-blues",
    title: "CD Booklet: Desert Blues",
    year: "2020",
    gallery: "1/7",
    galleryReferences: ["001_CD", "001_CD"],
    details: [
      "A photographic zine housed in a CD jewel case, featuring analog photographs taken during a trip to Morocco in 2020.",
      "Accompanied by a mixtape:",
    ],
    links: [
      {
        label:
          "♬ www.youtube.com/playlist?list=PLVHLus1cvQkD6fFY_VWW3l_RNTFEysujJ",
        href: "https://www.youtube.com/playlist?list=PLVHLus1cvQkD6fFY_VWW3l_RNTFEysujJ",
      },
    ],
  },
  {
    number: "A.06.02",
    slug: "fotografies-me-poihmata",
    title: "Φωτογραφίες με ποιήματα",
    year: "2018",
    gallery: "1/5",
    galleryReferences: ["photoanalogpoems00", "photoanalogpoems00"],
    details: [
      "A hand-sewn zine featuring photographs overlaid with poems handwritten on transparent paper.",
    ],
  },
  {
    number: "A.06.01",
    slug: "the-ballad-of-buster-scruggs",
    title: "The Ballad of Buster Scruggs",
    year: "2018",
    gallery: "photo gallery",
    details: [
      "The Coen brothers’ film The Ballad of Buster Scruggs, reimagined as an illustrated children’s storybook.",
    ],
  },
];

export const funProjects: AnalogProject[] = [
  {
    number: "A.07.06",
    slug: "mikri-festivalina-picnic",
    title: "Picnic Fabric for Mikri Festivalina",
    year: "",
    gallery: "photo gallery",
    details: [],
  },
  {
    number: "A.07.05",
    slug: "cigarette-tiara",
    title: "Cigarette Tiara",
    year: "2026",
    gallery: "photo gallery",
    details: [],
  },
  {
    number: "A.07.04",
    slug: "princess-nebula",
    title: "Princess Nebula",
    year: "2026",
    gallery: "photo gallery",
    details: [],
  },
  {
    number: "A.07.03",
    slug: "walls",
    title: "Walls",
    year: "",
    gallery: "photo gallery",
    details: [],
  },
  {
    number: "A.07.02",
    slug: "crochet",
    title: "Crochet",
    year: "",
    gallery: "photo gallery",
    details: [],
  },
  {
    number: "A.07.01",
    slug: "random-sketchbook-pages",
    title: "Random Sketchbook Pages",
    year: "",
    gallery: "photo gallery",
    details: [],
  },
];

export const analogProjectGroups = {
  "3d-prints": {
    title: "3D-Printed Works",
    basePath: "/analog/3d-prints",
    projects: threeDPrintProjects,
  },
  "analog-photography": {
    title: "Analog Photography",
    basePath: "/analog/analog-photography",
    projects: analogPhotographyProjects,
  },
  "constructions-installations": {
    title: "Constructions & Installations",
    basePath: "/analog/constructions-installations",
    projects: constructionInstallationProjects,
  },
  drawings: {
    title: "Drawings",
    basePath: "/analog/drawings",
    projects: drawingProjects,
  },
  "silkscreen-prints": {
    title: "Silkscreen Prints",
    basePath: "/analog/silkscreen-prints",
    projects: silkscreenPrintProjects,
  },
  zines: {
    title: "Zines",
    basePath: "/analog/zines",
    projects: zineProjects,
  },
  fun: {
    title: "Fun",
    basePath: "/analog/fun",
    projects: funProjects,
  },
};
