import type { AnalogProject } from "../analog/projects";

type NisosAftiProjectGroup = {
  title: string;
  basePath: string;
  projects: AnalogProject[];
};

const lambdaProjects: AnalogProject[] = [
  {
    number: "Λ.01",
    slug: "lambda",
    title: "Λ.",
    year: "20/07/2023",
    gallery: "photo gallery",
    details: [
      "Πιάστηκαν τα νύχια της ανάμεσα στο γυαλί και το μέταλλο του παραθύρου και ανατρίχιασαν όλες οι πορτοκαλί της τρίχες. Τώρα πια ο τρίτος όροφος της ήταν παιχνιδάκι. Τσακ με δυο κινήσεις ανέβηκε στο περβάζι και μπήκε.",
      "Άλλη μια μέρα ξημέρωνε στο νησάκι του Αυτιού.",
      "Πήγε να ανοίξει το ψυγείο και έσκυψε, με την μέση της να την διαλύει. Είχε μόνο στο πάνω ράφι δυο φιλμ, μια ξεραμένη κέτσαπ και ένα τάπερ. Δεν είναι ηλίθια, δεν πρόκειται να το ανοίξει, όπως δεν είχε υπάρξει ηλίθια για δυομιση εβδομάδες τώρα.",
      "“χαχα θα φάω το φιλμ”",
      "Τα μάτια της ρόλαραν, καθώς ενδόμυχα ακόμη κατηγορεί το φιλμ που δεν φτάνει ο μισθός της να έχει πολλά λαχανικά να μουχλιάζουν.",
      "Κονσέρβα γάλα, κύβος και ετοιματζίδικος πουρές, το τέλειο αντίδοτο χανγκόβερ.",
      "Καθώς ζέσταινε το νερό και ο ήλιος δυνάμωνε, αναρωτιόταν γιατί παίρνει χίλια χρόνια και αν θα προλάβει να κοιμηθεί πριν ξυπνήσει η γειτονιά. Μέχρι να ολοκληρώσει την σκέψη της είχε φάει, είχε ρευτεί, είχε χέσει -χάλια-, είχε κοιμηθεί και είχε ξυπνήσει απότομα μέσα στην ξεραμένη λιμνούλα των σάλιων της. Τρία λεπτά πριν το ξυπνητήρι. Γαμώ.",
      "Άνοιξε ντουλάπα να δει τι νιώθει. Skip, skip, skip, χάρισμα, skip. Βρήκε το τέλειο, άνετο φόρεμα, και το πέταξε πάνω της- ήταν η πιο χαλαρή. Γυρνάει στον καθρέφτη να ρίξει το επικυρωτικό τσεκ κώλου. Όπως το φοβόταν: διαγράφει το βρακί, ε τι να κάνει, αναγκαστικά θα το βγάλει. Σόρι γιαγιάκα, κομάντο σήμερα. Μπήκε γρήγορα να πλύνει δόντια και εννοείται ξανάχεσε.",
      "Μόνο με ανοιχτή πόρτα, με αυτή τη ζέστη.",
      "Ήταν ώρα να βγει έξω να γίνει τίποτα πιο ενδιαφέρον. Χτύπησε στην απέναντι, έχεις δεύτερα κλειδιά;",
      "Περπατώντας θυμήθηκε πως δεν πότισε και γύρισε πίσω, αλλά ουψ είχε κλειδώσει και την πάνω κλειδαριά.",
      "ε θα αντέξουν.",
      "Ώρα για χάιδεμα γατιών, πρ πρ, μα καλά ποιος τσίπης δίνει την πιο φθηνή κονσέρβα. Συνέχισε λίγο και σκάλωσε απέναντι σε ένα ζευγάρι γλάρους που καβαλιόντουσαν. Μια γειτόνισσα, που ήταν έξω στο πεζοδρόμιο και άπλωνε, ακολούθησε τα μάτια της και είδε τα πουλιά. Με την φανέλα που ήδη είχε στο χέρι, όρμηξε και τα κοπάνησε για να χωριστούν, έπειτα ατάραχη την τίναξε και την έβαλε στο σχοινί. Δεν αντάλλαξαν μισή κουβέντα με την Λ, η οποία προχώρησε καθώς το κατακόκκινο κεφάλι της έπρεπε άμεσα να βρεθεί σε σκιερό περιβάλλον, και τι πιο σκιερό από το υπόγειο. Την δουλειά της δηλαδή. Μπήκε στο κουτούκι · έπρεπε να τσεκάρει τι λείπει από τις προμήθειες. Depon, μας λείπουν depon και ντομάτες. Ξέχασε τελείως χτες να μαζέψει ένα τραπέζι, ευτυχώς ήταν στην πίσω αυλή.",
      "Ας αρχίσει τα τηλέφωνα. Ντου, ντου, ντου, πήγε πιο μακριά το ακουστικό γιατί αυτός ο ήχος μπορούσε να την σκοτώσει αλήθεια. Έλα ρε, και έλεος, και τρέλα χτες, και ναι πάλι τα κλειδιά, έλα από εδώ πο(ει)νάω. Εξίσου σκατά η άλλη, ώρα να δοκιμάσει το επόμενο τηλ. Άντε και άλλο ένα. Ανοίγει τα μηνύματα, skip, skip, skip, άστο. Τηλέφωνο: Γιαγιά. Αφού τελικά δεν το είχε να την φροντίσουν σκέτο, έπρεπε να τ ακούσει κιόλας. Δεν θα της πει ούτε τι έκανε χτες το βράδυ, ούτε πώς τα κατάφερε και μπήκε σπίτι όμως. Ένα κομμάτι της θα ήταν περήφανο και ένα άλλο θα γινόταν έξαλλο που χρησιμοποιεί ξανά τα χέρια της- και σε δημόσια θέα. Πάλι θα τις λένε μαΐστρες*, ενώ έκαναν χρόνια αγώνες για να μην προδίδονται και «δόξα σει» σταματήσαν να βάφουν τα ρούσα μαλλιά τους (ίσως έλεγε και καμία ιστορία από τα τεχνάσματα που έκαναν τα παλιά τα χρόνια ώστε να μην τις βρουν). Από αγάπη τα λέει, να την προστατέψει.",
      "Πήρε λίγη ώρα και μετά πήρε λίγη ακόμη.",
      "Τελικά ήρθε η τοσοδούλα με τις δαχτυλιδάρες και τη ρόμπα την στιγμή που είχε σβήσει η Λ το τσιγάρο- λες και δεν θα το μύριζε. Φόρτωσε η γκράνι και άρχισε τις χριστοπαναγίες. Ξεφόρτωσε και το έληξε με “Άντε, σου έφερα το κοντέρι** και έναν μπαμπά, να γλυκαθείς”. Άφησε το γλυκάκι στην χαρτοπετσέτα, πάνω στο καπάκι από το τάπερ.",
      "Η Λ ξεκίνησε να μασουλάει το σπανακόρυζο, και τι ωραίο και τι ζουμερό και αχ γιαγιά μου μόνο εσύ. “Ε το έκανα ανάλατο, τσίμπα το με λίγο αλάτι” Όχι θα κάνω κατακράτηση, και φφφ βαριέμαι.",
      "ΣΟΥ ΕΙΠΑ.",
      "Η Λ σηκώθηκε να φέρει αλάτι, να φάει όπως θέλει η ευεργέτιδά της, η οποία την κοιτούσε με καμάρι να ξεκολλάει το φόρεμα από το πλαστικό της καρέκλας και τα τρυπητά της μπούτια.",
      "ΜΩΡΗ ΞΕΒΡΑΚΩΤΗ.",
      "Σηκώθηκε και η τοσοδούλα, έπιασε το τάπερ να το πάρει, το άφησε κάτω ξανά. Άρπαξε τον μπαμπά, γούρλωσε το μάτι, έβγαλε αέρα από το ρουθούνι. Ανέβηκε με το δεξί πόδι και τα τρία σκαλάκια, αφήνοντας ανοιχτή την πόρτα “να ξεβρωμίσει” μουρμουριστά. Έμεινε η Λ να μασουλάει πάνω από το διάδοχο τάπερ και ξεκόλλησε ανάμεσα από τα δόντια της ένα πολύ λεπτό κουκούτσι λεμονιού. Και μετά άλλο ένα που ήταν χαραγμένο με έναν σταυρό (;) και μετά άλλο ένα.",
      "Με τόση ζέστη στάάνταρ δεν φόραγε ούτε αυτή βρακί.",
      "*μαϊστρες= μάγισσες",
      "**κοντέρι=τάπερ, ιδιωματισμός νήσου Αυτιού που προέρχεται από την λέξη container.",
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
