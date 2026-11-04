// Copie des vrais avis de la fiche Google Kibaco (relevée le 4 novembre 2026).
// Affichée uniquement quand la lecture automatique des avis n'est pas disponible
// (par exemple sur un hébergeur où l'accès Google n'est pas configuré).
// À mettre à jour quand de nouveaux avis arrivent sur la fiche Google.
export type SnapshotReview = {
  id: string;
  text: string;
  author: string;
  rating: number;
  date?: string;
};

export const GOOGLE_REVIEWS_SNAPSHOT: SnapshotReview[] = [
  {
    id: "AbFvOqnryK8Bnq_4yxuCtjJKvnpnKPLw9xjA8K-L44Unb9EN0q_OR5ac84xWKUd5FhQSIKKwT7Niyg",
    rating: 5,
    author: "THIBAULT MAURISSET",
    date: "2026-10-11T15:17:52.654474Z",
    text: "Merci Bastien pour les préparations aux trails, triathlons et marathons qui m'ont permis d'améliorer à chaque fois mes temps de référence et de développer mon potentiel. Le tout en adaptant toujours le programme à ma forme et à mon emploi du temps.\nJe ne peux que vous recommander ses services si vous cherchez un coach humain et performant pour votre prochain objectif.",
  },
  {
    id: "AbFvOqk2r_OTkb85hZ2LzotgnhsfYFbvjdd-3m5AcUqiJ-Z4IQY4DmjyYHVgoL3ZghSQ5dvlC39w",
    rating: 5,
    author: "Myriam Bonus",
    date: "2026-10-05T14:07:22.201779Z",
    text: "Un tout grand merci à Bastien pour la préparation de mon triathlon. Son programme bien planifié et adapté m a fait progresser plus que je n osais l imaginer. Les entraînements étaient intenses parfois mais progressifs et tenaient bien compte de mon âge et de mon niveau. Je recommande vivement !",
  },
  {
    id: "AbFvOqnZd4-VkcFjNDSCtxDpCySvBNKUEeh3g1PIE1D9pNkAxwoNwVLJTS66cYThJnJYxTAEs7fP",
    rating: 5,
    author: "Maxime Dewilde",
    date: "2026-10-01T05:45:38.050261Z",
    text: "Avec Bastien c’est : sérieux, personnalisé et toujours adapté au mieux pour le bien-être et la progression de l’athlète ! Il m’a permis de franchir un énorme step en course à pied, tout en sachant s’adapter à chaque situation qui se présente sur mon chemin. C’est une personne super à l’écoute, toujours là pour répondre à nos besoins. En plus d’être un excellent coach, c’est aussi un super kiné. Les blessures m’ont parfois freiné, et Bastien a toujours été là pour m’aider à revenir plus fort !",
  },
];

// Avis live si la lecture automatique a réussi, sinon la copie ci-dessus.
export function pickReviews<T extends SnapshotReview>(
  live: { status: string; reviews: T[] } | undefined,
): { reviews: SnapshotReview[]; source: "live" | "snapshot" } {
  if (live?.status === "ready") return { reviews: live.reviews, source: "live" };
  return { reviews: GOOGLE_REVIEWS_SNAPSHOT, source: "snapshot" };
}
