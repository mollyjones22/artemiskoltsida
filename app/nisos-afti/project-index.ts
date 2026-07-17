export type NisosAftiProjectLink = {
  letter: string;
  slug: string;
  date: string | null;
  isPending: boolean;
};

const projects: NisosAftiProjectLink[] = [
  { letter: "Α", slug: "alpha", date: null, isPending: true },
  { letter: "Β", slug: "beta", date: null, isPending: true },
  { letter: "Γ", slug: "gamma", date: null, isPending: true },
  { letter: "Δ", slug: "delta", date: "2025-03-25", isPending: false },
  { letter: "Ε", slug: "epsilon", date: null, isPending: true },
  { letter: "Ζ", slug: "zeta", date: null, isPending: true },
  { letter: "Η", slug: "eta", date: null, isPending: true },
  { letter: "Θ", slug: "theta", date: null, isPending: true },
  { letter: "Ι", slug: "iota", date: null, isPending: true },
  { letter: "Κ", slug: "kappa", date: null, isPending: true },
  { letter: "Λ", slug: "lambda", date: "2023-07-20", isPending: false },
  { letter: "Μ", slug: "mu", date: null, isPending: true },
  { letter: "Ν", slug: "nu", date: null, isPending: true },
  { letter: "Ξ", slug: "xi", date: null, isPending: true },
  { letter: "Ο", slug: "omicron", date: null, isPending: true },
  { letter: "Π", slug: "pi", date: "2024-09-11", isPending: false },
  { letter: "Ρ", slug: "rho", date: null, isPending: true },
  { letter: "Σ", slug: "sigma", date: null, isPending: true },
  { letter: "Τ", slug: "t", date: null, isPending: false },
  { letter: "Υ", slug: "upsilon", date: null, isPending: true },
  { letter: "Φ", slug: "phi", date: null, isPending: true },
  { letter: "Χ", slug: "chi", date: null, isPending: true },
  { letter: "Ψ", slug: "psi", date: null, isPending: true },
  { letter: "Ω", slug: "omega", date: null, isPending: true },
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
