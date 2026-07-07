import type { Metadata } from "next";
import Link from "next/link";

const title = "Νήσος Αυτί";

const projectLinks = [
  { label: "Λ.", href: "/nisos-afti/letter-a", note: "λεξικό / γράμμα" },
  { label: "Δ.", href: "/nisos-afti/letter-a", note: "δελτίο ακτής" },
  { label: "Π.", href: "/nisos-afti/letter-a", note: "προσωπικό αρχείο" },
  {
    label: "πυρόξανθα μαλλιά",
    href: "/nisos-afti/letter-a",
    note: "εικόνα - αφήγηση",
  },
];

const toc = [
  "Όνομα",
  "Γεωγραφία",
  "Μυθολογία",
  "Ιστορία",
  "Σύγχρονη ζωή",
  "Αρχείο εικόνων",
];

const sections = [
  {
    heading: "Όνομα",
    paragraphs: [
      "Το Αυτί είναι ένα φανταστικό νησί του Μυρτώου Πελάγους. Το όνομά του προέρχεται από την ηχητική παραφθορά ενός παλαιότερου τοπωνυμίου, Αφτάβως, που σύμφωνα με την τοπική προφορική παράδοση σήμαινε τόπο στραμμένο προς τον ήλιο.",
      "Στην καθημερινή χρήση το νησί ονομάστηκε πρώτα Άμπως, έπειτα Αυτί. Οι κάτοικοι λένε ότι το νησί δεν ακούει απλώς τη θάλασσα: την κρατά μέσα στο έδαφος, στα σπίτια και στις μικρές ιστορίες που επαναλαμβάνονται από γενιά σε γενιά.",
    ],
  },
  {
    heading: "Γεωγραφία",
    paragraphs: [
      "Η Νήσος Αυτί βρίσκεται ανάμεσα στα Κύθηρα και την Κρήτη, σε ένα σημείο όπου οι χάρτες συχνά αφήνουν μικρά κενά. Η πρωτεύουσα ονομάζεται Χωριό και περιγράφεται ως αστικό κέντρο σε μικρογραφία, με στενά περάσματα, χαμηλές αυλές και πλατείες που μοιάζουν περισσότερο με δωμάτια.",
      "Στα δυτικά υψώνονται ξηρολιθιές και αναβαθμίδες. Στα ανατολικά υπάρχουν απότομα βράχια, φάροι και τρεις μικρές ακατοίκητες νησίδες που οι ναυτικοί αποφεύγουν όταν φυσάει ο προβέντζας.",
    ],
  },
  {
    heading: "Μυθολογία",
    paragraphs: [
      "Σύμφωνα με μια εκδοχή της τοπικής μυθολογίας, όταν τα κύματα παρέσυραν την Αφροδίτη προς την Πάφο, ένα μικρό κομμάτι αφρού έμεινε πίσω και έγινε το Αυτί. Από τότε το νησί θεωρείται τόπος ακρόασης, επιθυμίας και μεταμόρφωσης.",
      "Άλλη παράδοση συνδέει τη γέννηση του νησιού με σεισμό. Η Πίνδος, λένε, έφτανε κάποτε ως την Κρήτη. Έπειτα από μια μεγάλη βύθιση έμειναν μόνο θραύσματα γης: η Φαλκονέρα, η Βελοπούλα, οι Ανάνες και το κατοικήσιμο Αυτί.",
    ],
  },
  {
    heading: "Ιστορία",
    paragraphs: [
      "Το νησί κατοικείται, σύμφωνα με τα κεραμικά ευρήματα του σπηλαίου του Προφήτη Ηλία, από το τέλος της 5ης χιλιετίας π.Χ. Η μινωική επιρροή εμφανίζεται στα σπίτια, στους τάφους και σε μικρά ιερά που βρίσκονται στις κορυφές.",
      "Κατά τους μεσαιωνικούς χρόνους η εξουσία πέρασε από οικογένειες, πειρατές, εμπόρους και ναυτικούς. Οι κάτοικοι έκτισαν μοναστήρια στους ψηλούς βράχους και καλλιέργησαν μικρά χωράφια με ξερολιθιές, γνωστά ως χαλιά.",
      "Στον 20ό αιώνα η μετανάστευση άδειασε μεγάλο μέρος του νησιού. Παρ' όλα αυτά, η μνήμη του Αυτιού συνέχισε να κυκλοφορεί σε φωτογραφίες, επιστολές, ηχογραφήσεις και χειρόγραφες σημειώσεις.",
    ],
  },
  {
    heading: "Σύγχρονη ζωή",
    paragraphs: [
      "Σήμερα η Νήσος Αυτί λειτουργεί περισσότερο ως αρχείο παρά ως γεωγραφικό δεδομένο. Οι τόποι της εμφανίζονται σε έργα, μικρές αφηγήσεις, εικόνες και αντικείμενα που συγκροτούν ένα ημι-φανταστικό λήμμα.",
      "Οι σύνδεσμοι στο αριστερό περιθώριο οδηγούν σε παράλληλες καταχωρήσεις. Κάθε μία ανοίγει σαν μικρό παράθυρο μέσα στο ίδιο αρχείο, σαν σελίδα που ξέφυγε από την κύρια εγκυκλοπαίδεια.",
    ],
  },
];

const imageSlots = [
  "Χάρτης της νήσου",
  "Άποψη του Χωριού",
  "Ακτή με φάρο",
  "Αρχείο αντικειμένων",
];

export const metadata: Metadata = {
  title,
  description:
    "A mock wiki page for Artemis Koltsida's imaginary island, Nisos Afti.",
};

function PlaceholderImage({ label }: { label: string }) {
  return (
    <figure className="border border-[#a2a9b1] bg-[#f8f9fa] p-2">
      <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-[#72777d] bg-white px-4 text-center text-xs text-[#54595d]">
        photo placeholder
      </div>
      <figcaption className="mt-2 text-center text-xs leading-snug text-[#202122]">
        {label}
      </figcaption>
    </figure>
  );
}

export default function NisosAftiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-5 text-[#202122] sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-[9.5rem_minmax(0,1fr)]">
        <aside className="order-2 border-t border-[#a2a9b1] pt-4 text-sm lg:order-1 lg:border-r lg:border-t-0 lg:pr-4 lg:pt-16">
          <Link href="/" className="mb-5 inline-block text-[#0645ad]">
            BACK
          </Link>
          <p className="mb-2 text-xs uppercase tracking-wide text-[#54595d]">
            Projects
          </p>
          <nav aria-label="Νήσος Αυτί projects" className="space-y-2">
            {projectLinks.map((project) => (
              <Link
                key={project.label}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block text-[#0645ad] underline-offset-2 hover:underline"
              >
                <span className="block text-lg leading-none">{project.label}</span>
                <span className="block text-xs text-[#54595d]">{project.note}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <article className="order-1 lg:order-2">
          <header className="border-b border-[#a2a9b1] pb-2">
            <p className="text-sm text-[#54595d]">from the free imaginary encyclopedia</p>
            <h1 className="mt-1 text-4xl font-normal leading-tight">{title}</h1>
          </header>

          <div className="mt-4 grid gap-6 xl:grid-cols-[minmax(0,1fr)_19rem]">
            <div className="min-w-0">
              <p className="mb-4 leading-relaxed">
                Η <strong>Νήσος Αυτί</strong> είναι φανταστικό νησί, καλλιτεχνικό
                αρχείο και ψευδο-εγκυκλοπαιδικό λήμμα. Τοποθετείται ανάμεσα σε
                πραγματική γεωγραφία και επινοημένη μνήμη.
              </p>

              <section className="mb-5 inline-block border border-[#a2a9b1] bg-[#f8f9fa] p-3 text-sm">
                <h2 className="mb-2 text-center font-bold">Contents</h2>
                <ol className="list-decimal space-y-1 pl-5">
                  {toc.map((item) => (
                    <li key={item}>
                      <a className="text-[#0645ad]" href={`#${item}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>

              {sections.map((section) => (
                <section key={section.heading} id={section.heading} className="mb-6">
                  <h2 className="mb-3 border-b border-[#a2a9b1] text-2xl font-normal leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-3 leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section id="Αρχείο εικόνων" className="mb-6">
                <h2 className="mb-3 border-b border-[#a2a9b1] text-2xl font-normal leading-tight">
                  Αρχείο εικόνων
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {imageSlots.slice(1).map((slot) => (
                    <PlaceholderImage key={slot} label={slot} />
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit border border-[#a2a9b1] bg-[#f8f9fa] p-3 text-sm">
              <h2 className="mb-3 bg-[#eaecf0] py-1 text-center text-base font-bold">
                {title}
              </h2>
              <PlaceholderImage label={imageSlots[0]} />
              <dl className="mt-4 grid grid-cols-[6rem_minmax(0,1fr)] gap-x-3 gap-y-2">
                <dt className="font-bold">Τύπος</dt>
                <dd>φανταστικό νησί</dd>
                <dt className="font-bold">Πέλαγος</dt>
                <dd>Μυρτώο</dd>
                <dt className="font-bold">Πρωτεύουσα</dt>
                <dd>Χωριό</dd>
                <dt className="font-bold">Κατάσταση</dt>
                <dd>αρχειακή / επινοημένη</dd>
                <dt className="font-bold">Γνωστό για</dt>
                <dd>γράμματα, μύθους, εικόνες</dd>
              </dl>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
