import type { Metadata } from "next";
import Link from "next/link";

const title = "Νήσος Αυτί";

const projectLinks = [
  { label: "Λ.", href: "/nisos-afti/lambda", note: "λεξικό / γράμμα" },
  { label: "Δ.", href: "/nisos-afti/delta", note: "δελτίο ακτής" },
  { label: "Π.", href: "/nisos-afti/pi", note: "προσωπικό αρχείο" },
  {
    label: "πυρόξανθα μαλλιά",
    href: "/nisos-afti/pyroksantha-mallia",
    note: "εικόνα - αφήγηση",
  },
];

const toc = [
  "Ετυμολογία",
  "Μυθολογία",
  "Ιστορία",
  "Κλίμα και πανίδα",
  "Αρχείο εικόνων",
];

const sections = [
  {
    heading: "Ετυμολογία",
    paragraphs: [
      "Αυτί→ ηχητική παράφραση από το επίσημο όνομα Άφταβως.",
      "Η λέξη Άφταβως προέρχεται από το όνομα Aftab, που στα περσικά σημαίνει ήλιος. Στην καθομιλουμένη, το νησί ήταν γνωστό ως «Άμπως», ως σύντμηση: Άφταβως < Άφταμπως < Άμπως.",
      "Από την προφορική παράδοση, το όνομα εξελίχθηκε και σήμερα το νησί είναι γνωστό ως «Αυτί».",
    ],
  },
  {
    heading: "Μυθολογία",
    paragraphs: [
      "Σύμφωνα με τη Θεογονία του Ησίοδου, η Αφροδίτη γεννήθηκε από τους αφρούς της θάλασσας των Κυθήρων, όταν τα αποκομμένα γεννητικά όργανα του Ουρανού, έπειτα από την πράξη του Κρόνου, έπεσαν σε αυτήν. Τα κύματα, παρέσυραν τη θεά, η οποία έφτασε τελικά στην Πάφο της Κύπρου, όπου επίσης λατρεύτηκε ως προστάτιδα του νησιού.",
      "Όταν τα γεννητικά όργανα του Ουρανού έπεσαν στη θάλασσα, προκάλεσαν τόσο ισχυρά κύματα και σεισμούς, ώστε κοντά στην περιοχή της ανάδυσης της Αφροδίτης, στα Κύθηρα, σημειώθηκε η βύθιση μεγάλων εδαφικών εκτάσεων που ανήκαν στην οροσειρά της Πίνδου.",
      "Σχεδόν τίποτα δεν έμεινε πίσω, παρά μόνο βράχια. Σε έναν από αυτούς τους βράχους ζούσαν τρεις γοργόνες, κόρες της Αταργάτις, με πυρόξανθα μαλλιά και μεγάλες πλάτες. Οι γοργόνες έσωζαν κάποιους από τους ναυτικούς που ναυαγούσαν στους Άνανες, ένα κοντινό και επικίνδυνο σύμπλεγμα υφάλων.",
      "Με τα δυνατά τους χέρια τούς τραβούσαν από τα συντρίμμια και τους οδηγούσαν στο απόμακρο, ηλιόλουστο νησί τους—με αντάλλαγμα να τους χαρίσουν παιδιά. Όταν οι γοργόνες γεννούσαν, οι ναύτες ήταν ελεύθεροι να συνεχίσουν το ταξίδι τους. Ωστόσο, τα μισά από τα πλάσματα που έφερναν στον κόσμο ήταν ψάρια, και μόνο τα υπόλοιπα μισά ήταν άνθρωποι, γεγονός που συχνά καθυστερούσε την αναχώρησή τους.",
      "Κάποιοι μάλιστα αποφάσισαν ότι, αφού είχαν ξεχαστεί από τον κόσμο, δεν είχε νόημα να επιστρέψουν. Ύστερα από χρόνια, οι γοργόνες μετατράπηκαν σε αφρό της θάλασσας. Όμως, το γειτονικό νησί είχε πια γεμίσει μόνιμους κατοίκους.",
    ],
  },
  {
    heading: "Ιστορία",
    paragraphs: [
      "Η οροσειρά την Πίνδου κάποτε χώριζε το Μυρτώο Πέλαγος κι έφτανε ως την Κρήτη.",
      "Έπειτα από έναν μεγάλο σεισμό και πολλές νεροποντές, αυτό το τμήμα της βυθίστηκε, αφήνοντας πίσω:",
      "Τη Φαλκονέρα, γνωστή στους Έλληνες ναυτικούς ως «Γερακούλια». Στο ανατολικό άκρο της νησίδας βρίσκεται η «Παναγιά των Ρευμάτων», όπου υπάρχει αυτόματος φάρος τύπου Δαλέν-Άγκα, με φωτοβολία 23 μιλίων. Το 1941, οι γερμανικές δυνάμεις Κατοχής τον ανατίναξαν, με αποτέλεσμα να προκληθούν πολλά ναυάγια. Μετά την Απελευθέρωση, ο φάρος επισκευάστηκε και επαναλειτούργησε.",
      "Τη Βελοπούλα (Bello Polo), ονομασία με την οποία το νησί εμφανίζεται σε παλαιότερους δυτικοευρωπαϊκούς χάρτες.",
      "Τους Ανάνες, μια συστάδα επτά ακατοίκητων βραχονησίδων, περιτριγυρισμένων από υφάλους. Οι Ανάνες αποτελούσαν σοβαρό πρόβλημα για τη ναυσιπλοΐα, ιδιαίτερα για τα πλοία που ταξίδευαν μεταξύ Πειραιά και Κρήτης, μέχρι την τοποθέτηση περίβλεπτου φάρου στην υψηλότερη εξ αυτών. Όλα τα πλοία που διέρχονται από την περιοχή υποχρεούνται να διατηρούν απόσταση ασφαλείας. Ιδιαίτερα τα ιστιοφόρα και τα σκάφη αναψυχής πρέπει να αποφεύγουν την περιοχή, λόγω των ισχυρών ρευμάτων που υπάρχουν ακόμα και σε συνθήκες νηνεμίας.",
      "Tο νησί της Aφταβούς, το μόνο κατοικήσιμο.",
      "Το νησί κατοικείται τουλάχιστον από το τέλος της 5ης χιλιετίας π.Χ., όπως αποδεικνύεται από κεραμικά που βρέθηκαν στο σπήλαιο του Προφήτη Ηλία. Είναι πιθανό, ωστόσο, να είχε ανθρώπινη παρουσία ήδη από την Παλαιολιθική περίοδο. Οι οικισμοί άρχισαν να αυξάνονται κατά την 3η χιλιετία π.Χ., όταν η μινωική επιρροή έφτασε και στα Κύθηρα. Το νησί κατοικήθηκε συνεχώς μέχρι το τέλος της Μυκηναϊκής περιόδου, στο τέλος της 2ης χιλιετίας π.Χ. Το Χωριό, η μεγαλύτερη πόλη του νησιού, ήταν μινωική αποικία, με χαρακτηριστικά μινωικά σπίτια και τάφους. Στη μία από τις δύο κορυφές του νησιού, στον Άγιο Νικόλα, σε υψόμετρο 400 μέτρων, βρέθηκε μινωικό ιερό. Η θέση του, πάνω στο βουνό, λειτουργούσε ως παρατηρητήριο, καθώς επέτρεπε την εποπτεία της περιοχής, από τα ακρωτήρια της Πελοποννήσου έως την Κρήτη, και από τη Μήλο έως τα Κύθηρα.",
      "Τον 15ο αιώνα π.Χ., στα Κύθηρα εγκαταστάθηκαν και οι Φοίνικες, άγνωστο από πότε, οι οποίοι παρήγαγαν πορφύρα και χρησιμοποιούσαν την αποικία τους ως εμπορικό σταθμό. Μετά την πτώση των Μινωιτών, περίπου το 1400 π.Χ., το νησί κατακτήθηκε από τους Μυκηναίους. Κατά τον 12ο αιώνα π.Χ., την κυριαρχία τους διαδέχθηκαν οι Δωριείς. Η ιστορική πορεία της Άμπως ακολούθησε την ίδια κατεύθυνση, με μια σημαντική αλλαγή τον 6ο αιώνα π.Χ.: ενώ τα Κύθηρα κατακτήθηκαν από τους Σπαρτιάτες, το νησί του Αυτιού πέρασε υπό την κυριαρχία των Αθηναίων.",
    ],
  },
  {
    heading: "Κλίμα και πανίδα",
    paragraphs: [
      "Την άνοιξη παρατηρείται συχνά ένας δυτικός-νοτιοδυτικός άνεμος, γνωστός ως «προβέντζα», ο οποίος συγκεντρώνει χαμηλά νέφη, δημιουργώντας ομίχλη. Η κατάσταση αυτή απαιτεί ιδιαίτερη προσοχή από τους ναυτιλλομένους. Στο Μυρτώο πέλαγος μπορεί κανείς να συναντήσει τα σταχτοδέλφινα (Grampus Griseus) που είναι τα μεγαλύτερα δελφίνια των ελληνικών θαλασσών.",
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
                <span className="mt-1 flex aspect-[4/3] w-full items-center justify-center border border-dashed border-[#72777d] bg-white px-2 text-center text-[0.65rem] leading-tight text-[#54595d]">
                  photo placeholder
                </span>
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
                Το Αυτί είναι ένα νησί στο Μυρτώο Πέλαγος, ανάμεσα στα Κύθηρα
                και την Κρήτη, με πρωτεύουσα το Χωριό. Σήμερα, το νησί αριθμεί
                9.000 κατοίκους, ενώ η πόλη του Χωριού μπορεί να χαρακτηριστεί
                πλήρως ως αστικό κέντρο.
              </p>

              <section className="mb-5 inline-block border border-[#a2a9b1] bg-[#f8f9fa] p-3 text-sm">
                <h2 className="mb-2 text-center font-bold">Contents</h2>
                <ol className="list-decimal space-y-1 pl-5">
                  {toc.map((item, index) => (
                    <li key={`${item}-${index}`}>
                      <a className="text-[#0645ad]" href={`#${item}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>

              {sections.map((section, index) => (
                <section
                  key={`${section.heading}-${index}`}
                  id={section.heading}
                  className="mb-6"
                >
                  <h2 className="mb-3 border-b border-[#a2a9b1] text-2xl font-normal leading-tight">
                    {section.heading}
                  </h2>
                  {section.heading === "Ιστορία" ? (
                    <h3 className="mb-3 text-base font-bold leading-relaxed">
                      Προϊστορία - Ρωμϊκοί χρόνοι
                    </h3>
                  ) : null}
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
