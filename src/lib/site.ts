import {
  ClipboardList,
  MessageCircle,
  Stethoscope,
  Target,
  type LucideIcon,
} from "lucide-react";

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
    // Résumé court : le détail de chaque avantage vit dans COACHING_FEATURE_GROUPS.
    summary:
      "Un programme 100 % individualisé, structuré en cycles de travail et construit autour de vos objectifs, de votre niveau et de votre mode de vie. Votre plan évolue chaque jour selon vos sensations, votre progression et vos imprévus, pour progresser durablement et sereinement. Mon expérience de kinésithérapeute entre dans ce plan : les signaux faibles sont repérés tôt et la blessure est prévenue avant de s’installer.",
  },
};

// Le montant affiché en grand est le prix trimestriel ; l’équivalence mensuelle est rappelée en petit.
export const COACHING_PRICE_NOTE = `Ce qui correspond à ${SITE.coachingOffer.monthlyPrice} €/mois`;

// L’idée de départ de l’accompagnement : le triathlon se glisse dans un quotidien déjà plein.
export const COACHING_DAILY_LIFE =
  "Faire tenir le triathlon dans un quotidien bien rempli n’a rien d’évident : c’est justement la raison pour laquelle un bon accompagnement change tout. Votre plan se construit autour de votre vie, de vos contraintes et de vos imprévus — pas l’inverse.";

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

export type CoachingFeature = { id: string; label: string };
export type CoachingFeatureGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: CoachingFeature[];
};

// Tous les avantages de la formule unique, conservés depuis l’offre Personnalisé,
// regroupés par thème pour une lecture rapide sur la page Coaching.
export const COACHING_FEATURE_GROUPS: CoachingFeatureGroup[] = [
  {
    id: "plan",
    title: "Un plan sur mesure",
    icon: ClipboardList,
    items: [
      { id: "personalized-plan", label: "Plan 100 % individualisé selon vos objectifs et votre niveau" },
      { id: "life-adjustments", label: "Adapté à votre mode de vie et à vos imprévus, pour une planification cohérente" },
      { id: "training-cycles", label: "Progression structurée en cycles de travail" },
      { id: "critical-speed", label: "Zones d’entraînement déterminées à partir de votre vitesse critique" },
    ],
  },
  {
    id: "follow-up",
    title: "Un suivi au quotidien",
    icon: MessageCircle,
    items: [
      { id: "daily-adjustments", label: "Suivi quotidien et ajustements journaliers selon vos sensations" },
      { id: "coach-contact", label: "Contact avec votre coach via WhatsApp, 7j/7" },
      { id: "weekly-analysis", label: "Analyse de vos séances semaine après semaine" },
      { id: "ido", label: "Suivi sur l’application IDO" },
    ],
  },
  {
    id: "beyond",
    title: "Au-delà de l’entraînement",
    icon: Stethoscope,
    items: [
      { id: "injury-prevention", label: "Prévention des blessures guidée par mon expérience de kinésithérapeute" },
      { id: "clinical-alert", label: "Regard de clinicien en cas d’alerte" },
      { id: "practical-advice", label: "Conseils hydratation, nutrition, technique et matériel" },
      { id: "group-sessions", label: "Accès aux séances collectives KIBACO" },
    ],
  },
];

export const COACHING_FEATURES: CoachingFeature[] = COACHING_FEATURE_GROUPS.flatMap(
  (group) => group.items,
);
