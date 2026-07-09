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
        text: string;
        underline?: boolean;
      }
  )[];
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
    number: "A.03.05",
    slug: "matter-in-the-park",
    title: "Matter in the Park",
    year: "2025",
    gallery: "photo gallery",
    details: [
      "Pedion tou Areos, Athens, Greece",
      "Design and construction of a temporary bar, two entrance gateways, and a stage using the Clouds system by LUDD Studio, as part of a collaborative team.",
      "Scenography and decorative treatment of the stage and entrance gateways, developed in collaboration with Pits and Io, featuring patchwork textile installations and large-scale airbrushed artwork.",
    ],
    links: [
      {
        label: "✹ https://ra.co/events/2253643",
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
      "Outdoor bench constructed using stones found on site in the courtyard.",
    ],
  },
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

export const drawingProjects: AnalogProject[] = [
  {
    number: "A.04.10",
    slug: "dolce-vita-mesimeri",
    title: "Dolce Vita Mesimeri",
    year: "2026",
    gallery: "photo gallery",
    details: [
      "Oil Pastels on cotton paper, 285 gsm, 100X70cm (Fabriano Rosaspina Paper Cotton 60%)",
    ],
  },
  {
    number: "A.04.09",
    slug: "diloti",
    title: "Diloti",
    year: "2026",
    gallery: "photo gallery",
    details: [],
  },
  {
    number: "A.04.08",
    slug: "kitchen-party",
    title: "Kitchen Party",
    year: "2026",
    gallery: "photo gallery",
    details: ["colored pencils", "35 X 50"],
  },
  {
    number: "A.04.07",
    slug: "zzz",
    title: "zzz",
    year: "2026",
    gallery: "photo gallery",
    details: [
      "dry pastels on cotton paper, 285 gsm, 100X70cm (Fabriano Rosaspina Paper Cotton 60%)",
    ],
  },
  {
    number: "A.04.06",
    slug: "everything-is-important",
    title: "Everything is important",
    year: "2025",
    gallery: "1/1",
    galleryReferences: ["everything is important2", "everything is important2"],
    details: [
      "Color Markers on cotton paper, 285 gsm, 100X70cm (Fabriano Rosaspina Paper Cotton 60%)",
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
      "Kaweco Sketch Up Brass Satin Chrome Pencil, 35X50 cm",
      "Cotton Watercolour Paper Block Premium 300gsm",
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
      "Oil pastels on cotton paper, 285 gsm, 100X70cm (Fabriano Rosaspina Paper Cotton 60%)",
      "Etching: Linoleum 12X16cm. Red Caligo ink: Vegetable oil-based inks",
      "Print: Riso at Dolce Pub, 3 colors (based on soy and rice oil), on Aralda paper, 200gr, slightly yellow, A3 size.",
    ],
  },
  {
    number: "A.04.03",
    slug: "fraud-effect",
    title: "Fraud Effect",
    year: "2023-Today",
    gallery: "1/17",
    galleryReferences: ["017_Fraud", "017_Fraud"],
    details: [
      "Painting Crew Studio Sessions",
      "Mediums used: Airbrush paint, Charcoal, Markers, Oilbased acrylics, Oil Pastels, Pen, Pnecil, Spray paint",
      "Photographed with phone camera",
      "Scanned with CanoScan LiDE 120",
      "Archived:",
      "☾ fraud-2023.tumblr.com/",
      "⛓3E3",
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
      "Painting inside a tunnel at Chalandri, Greece.",
      "Team: Dima, Jim, LeToulo, Molly, Thanos",
      "Mediums used: Spray paint, Oilbased acrylics,",
      "Candle lighting",
      "Phone camera",
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
      "Nature Painting walk at Amfikleia, Greece.",
      "Team: Dima, Jim, LeToulo, Molly, Thanos",
      "Mediums used: Spray paint, Oilbased acrylics, Posca",
      "Photographed with phone camera",
      "Story by LeToulo",
      "Created with Photoshop CC",
    ],
  },
];

export const silkscreenPrintProjects: AnalogProject[] = [
  {
    number: "A.05.01",
    slug: "tipomata",
    title: "Tipomata",
    year: "2019-Today",
    gallery: "1/8",
    galleryReferences: [
      "01_tipomata_aeroplanofront",
      "01_tipomata_aeroplanofront",
    ],
    details: [
      "Handpulled silkscreen printing at DIY studio.",
      "Affordable wearables with original artworks.",
      "Water-based inks.",
      {
        text: "Tipomata Diary",
        underline: true,
      },
      "2019: Mitsi, Pits, Tsolis, Maria Tolia",
      "2020: Mitsi for Qualia, Sophia-Danae Vorvyla, Marily Marouley, Kukuli (tags), Tsolis",
      "2021: Mr Egglemon and the headfish, Moska Antigoni, Siel Athens (tags), Boseque, Gatamavrh, Mitsi, Pits, Sophia-Danae Vorvyla, Marily Marouley,",
      "2022: Demi, Aspalaxcomic, Flokosh, Mitsi, Pits, Tsolis, Sophia-Danae Vorvyla, Marily Marouley, Boseque, Gatamavrh, Moska Antigoni.",
      "2023: Demi, Flokosh, Mitsi, Pits, Tsolis, Sophia-Danae Vorvyla, Marily Marouley, Moska Antigoni, KoketaMC, Palmer, Meper, Rengin, Latraac, Jinxygoat, Gioukoulele, mctsel, Thomas, FRAUD EFFECT",
      "2024: Demi, Flokosh, Mitsi, Pits, Tsolis, Sophia-Danae Vorvyla, Marily Marouley, Moska Antigoni, KoketaMC, Andreas Palmer, Meper, Rengin, Latraac, Jinxygoat, Gioukoulele, mctsel, Thomas, FRAUD EFFECT, RofosKnit, Georgia Zachari, Dolce Pub, Cottagecore.fm, Io Papadatou, Zela Archives",
      "2025: Dima, D-Eras, Makalle, kiko,",
      {
        text: "Tipomata Excibition Diary",
        underline: true,
      },
      "2021: 05-06/06 Tourlou Zine Fest,",
      "08/07 Navarinou 12",
      "09/10 Tourlou Fest 2,",
      "10/10 ENSP,",
      "16-17/10 2510SPACE",
      "2022: 21/05 Tourlou 3,",
      "12/06 DozenMinds Vol.2,",
      "07/10 Tourlou 4",
      "2023: 11-12/03 TERAS,",
      "08-09/04 Spring Market,",
      "03-04/06 IntoTheSpot,",
      "21-22/10 TERAS,",
      "09/12 TULPA,",
      "28/12 Andreas Palmer X Tipomata at TETOIO VINTAGE",
      "2024: 18-19/05 RejuvXClofie at ROMANTSO,",
      "05/06 Cottagecore.fm Merch Launch @Tetoio",
      "13/10 Showroom Ta lelouda,",
      "28/10 Tetoio Vintage w/ Rozzita",
      "2025: 31/06-01/07 IntoTheSpot",
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
      "A story by mctsel, left and molly",
      "A photographic collage presenting a mini capsule collection of hand airbrushed archive garments from the 2007 La Redoute × André Courrèges collaboration.",
    ],
  },
  {
    number: "A.06.05",
    slug: "softathens",
    title: "SOFTATHENS, BY CARHARTT WIP x LATRAAC x TIPOMATA",
    year: "2023",
    gallery: "1/2",
    galleryReferences: ["softathens01", "softathens01"],
    details: [
      "SOFTATHENS",
      "Unbound zine, made from series of stand-alone risoprints.",
      "Two stories by Giannis Galiatsos",
      "Printed at DolcePub",
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
      "Self-published zine with a poem and photos",
      "Cover: Ipad sketch",
    ],
  },
  {
    number: "A.06.03",
    slug: "cd-booklet-desert-blues",
    title: "CD BOOKLET Desert Blues",
    year: "2020",
    gallery: "1/7",
    galleryReferences: ["001_CD", "001_CD"],
    details: [
      "A zine in a CD hard case showcasing analog photos from my Morocco trip in 2020.",
      "Mixtape:",
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
      "A hand-sewn zine featuring photos with poems handwritten on transparent paper.",
    ],
  },
  {
    number: "A.06.01",
    slug: "the-ballad-of-buster-scruggs",
    title: "The Ballad of Buster Scruggs",
    year: "2018",
    gallery: "photo gallery",
    details: [
      "The Coen Brothers’ film The Ballad of Buster Scruggs, reimagined as a children’s storybook with illustrations",
    ],
  },
];

export const funProjects: AnalogProject[] = [
  {
    number: "A.07.06",
    slug: "mikri-festivalina-picnic",
    title: "Mikri Festivalina picnic",
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
