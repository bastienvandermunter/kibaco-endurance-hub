import { Target, type LucideIcon } from "lucide-react";

export const SITE = {
  name: "Kibaco",
  owner: "Bastien Vandermunter",
  role: "Master en kinésithérapie & Coach en sport d’endurance",
  tagline: "De la réhabilitation à la performance, un accompagnement précis et humain",
  phone: "+32 471 30 20 36",
  phoneHref: "tel:+32471302036",
  email: "kibaco.contact@gmail.com",
  addressLine1: "Rue du Cuisinier 6",
  addressLine2: "1420 Braine-l’Alleud, Belgique",
  iban: "BE54 7320 8968 1197",
  // ⚠️ Volet kinésithérapie en standby : le contenu reste consultable,
  // mais la prise de rendez-vous est masquée avec une mention « Bientôt ».
  kineComingSoon: true,
  kinePrices: [
    { label: "Bilan initial complet (45 min à 1 h)", price: "55 €" },
    { label: "Rendez-vous de suivi", price: "40 €" },
  ],
  kineNonConventionne: true,
  coachingOffer: {
    icon: Target as LucideIcon,
    name: "Kibaco Personnalisé",
    monthlyPrice: 110,
    quarterlyPrice: 330,
    commitmentMonths: 3,
    text:
      "Profitez d’un programme d’entraînement 100 % individualisé, construit autour de vos objectifs, de votre niveau et de votre mode de vie.\n\n" +
      "Grâce à un suivi quotidien et des ajustements journaliers, votre plan évolue en fonction de vos sensations, de votre progression et de vos imprévus.\n\n" +
      "Bénéficiez également d’une détermination de vos zones d’entraînement à partir de votre vitesse critique, d’échanges réguliers avec votre coach et d’un accès aux séances collectives KIBACO.\n\n" +
      "Un accompagnement complet, structuré en cycles de travail, pour progresser durablement et sereinement.",
  },
};

export const NAV_ITEMS = [
  { to: "/", label: "Accueil" },
  { to: "/approche", label: "L’Approche" },
  { to: "/kinesitherapie", label: "Kinésithérapie" },
  { to: "/coaching", label: "Coaching" },
  { to: "/temoignages", label: "Ils s’entraînent avec moi" },
];

// ⚠️ Liens provisoires — à remplacer par les vraies URLs :
//  - doctorAnytime : lien vers le profil de prise de rendez-vous Doctor Anytime
//  - tallyForm : formulaire de contact géré depuis Tally (modifiable sans toucher au site)
export const LINKS = {
  doctorAnytime: "https://www.doctoranytime.be/",
  tallyForm: "https://tally.so/r/KpYLB7",
};

// Tous les avantages de la formule unique, conservés depuis l’offre Personnalisé.
export const COACHING_FEATURES = [
  { id: "personalized-plan", label: "Plan 100 % individualisé selon vos objectifs et votre niveau" },
  { id: "life-adjustments", label: "Plan adapté à votre mode de vie et à vos imprévus pour garder une planification cohérente" },
  { id: "training-cycles", label: "Progression structurée en cycles de travail" },
  { id: "daily-adjustments", label: "Suivi quotidien et ajustements journaliers selon vos sensations et votre progression" },
  { id: "ido", label: "Suivi sur l’application IDO" },
  { id: "coach-contact", label: "Échanges réguliers avec votre coach" },
  { id: "clinical-alert", label: "Regard de clinicien en cas d’alerte" },
  { id: "critical-speed", label: "Détermination de vos zones d’entraînement à partir de votre vitesse critique" },
  { id: "practical-advice", label: "Conseils hydratation, nutrition, technique et matériel" },
  { id: "group-sessions", label: "Accès aux séances collectives KIBACO" },
];
