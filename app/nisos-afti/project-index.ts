export type NisosAftiProjectLink = {
  letter: string;
  slug: string;
  note: string;
  date: string | null;
  isPending: boolean;
};

const projects: NisosAftiProjectLink[] = [
  { letter: "Α", slug: "alpha", note: "pending project", date: null, isPending: true },
  { letter: "Β", slug: "beta", note: "pending project", date: null, isPending: true },
  { letter: "Γ", slug: "gamma", note: "pending project", date: null, isPending: true },
  { letter: "Δ", slug: "delta", note: "δελτίο ακτής", date: "2025-03-25", isPending: false },
  { letter: "Ε", slug: "epsilon", note: "pending project", date: null, isPending: true },
  { letter: "Ζ", slug: "zeta", note: "pending project", date: null, isPending: true },
  { letter: "Η", slug: "eta", note: "pending project", date: null, isPending: true },
  { letter: "Θ", slug: "theta", note: "pending project", date: null, isPending: true },
  { letter: "Ι", slug: "iota", note: "pending project", date: null, isPending: true },
  { letter: "Κ", slug: "kappa", note: "pending project", date: null, isPending: true },
  { letter: "Λ", slug: "lambda", note: "λεξικό / γράμμα", date: "2023-07-20", isPending: false },
  { letter: "Μ", slug: "mu", note: "pending project", date: null, isPending: true },
  { letter: "Ν", slug: "nu", note: "pending project", date: null, isPending: true },
  { letter: "Ξ", slug: "xi", note: "pending project", date: null, isPending: true },
  { letter: "Ο", slug: "omicron", note: "pending project", date: null, isPending: true },
  { letter: "Π", slug: "pi", note: "προσωπικό αρχείο", date: null, isPending: false },
  { letter: "Ρ", slug: "rho", note: "pending project", date: null, isPending: true },
  { letter: "Σ", slug: "sigma", note: "pending project", date: null, isPending: true },
  { letter: "Τ", slug: "t", note: "εικόνα - αφήγηση", date: null, isPending: false },
  { letter: "Υ", slug: "upsilon", note: "pending project", date: null, isPending: true },
  { letter: "Φ", slug: "phi", note: "pending project", date: null, isPending: true },
  { letter: "Χ", slug: "chi", note: "pending project", date: null, isPending: true },
  { letter: "Ψ", slug: "psi", note: "pending project", date: null, isPending: true },
  { letter: "Ω", slug: "omega", note: "pending project", date: null, isPending: true },
];

export const nisosAftiProjectLinks = projects
  .map((project, alphabetIndex) => ({ ...project, alphabetIndex }))
  .sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return a.alphabetIndex - b.alphabetIndex;
  });

export const pendingNisosAftiProjects = projects.filter(
  (project) => project.isPending,
);
