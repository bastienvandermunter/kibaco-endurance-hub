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
    // Phrase d’introduction des prestations : le détail vit dans COACHING_FEATURE_GROUPS.
    summary: "Concrètement, voici ce que comprend votre abonnement KIBACO, réparti en trois volets.",
  },
};

// Le montant affiché en grand est le prix trimestriel ; l’équivalence mensuelle est rappelée en petit.
export const COACHING_PRICE_NOTE = `Ce qui correspond à ${SITE.coachingOffer.monthlyPrice} €/mois`;

// Le trimestre se règle en un seul paiement.
export const COACHING_PAYMENT_NOTE = `Paiement de ${SITE.coachingOffer.quarterlyPrice} € en une seule fois pour trois mois d’accompagnement.`;

// Positionnement de la formule unique : pourquoi tous les sportifs reçoivent le même niveau de suivi.
export const COACHING_POSITIONING = [
  "Chez KIBACO, je considère que chaque sportif mérite un accompagnement de qualité, quels que soient son niveau, sa discipline ou ses ambitions.",
  "C’est pourquoi je propose une formule unique et entièrement individualisée, sans différents niveaux de suivi ni prestations essentielles réservées à une formule supérieure.",
  "Chaque accompagnement est construit autour de votre profil, de vos objectifs et de vos contraintes, avec la même attention portée à votre progression.",
];

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
      { id: "personalized-plan", label: "Planification individualisée selon vos objectifs, votre niveau et vos disponibilités" },
      { id: "training-cycles", label: "Progression construite par cycles d’entraînement" },
      { id: "life-adjustments", label: "Programme revu au fil de votre progression et de vos imprévus, pour garder une planification cohérente" },
      {
        id: "intensity-zones",
        label:
          "Des tests adaptés à votre discipline (triathlon, course à pied, trail, natation ou cyclisme) et l’analyse de vos séances permettent de définir et d’affiner vos zones d’intensité : chaque effort trouve ainsi sa place dans votre progression",
      },
    ],
  },
  {
    id: "follow-up",
    title: "Un suivi au quotidien",
    icon: MessageCircle,
    items: [
      {
        id: "daily-adjustments",
        label:
          "Votre entraînement fait l’objet d’un suivi quotidien, avec des ajustements réalisés en fonction de vos sensations, de votre progression, de votre récupération et des imprévus de votre quotidien",
      },
      { id: "ido", label: "Suivi sur l’application IDO, où vous laissez votre retour après chaque séance" },
      { id: "weekly-analysis", label: "Analyse de vos séances semaine après semaine" },
      { id: "coach-contact", label: "Échanges directs avec votre coach via WhatsApp, 7j/7" },
    ],
  },
  {
    id: "beyond",
    title: "Au-delà de l’entraînement",
    icon: Stethoscope,
    items: [
      { id: "injury-prevention", label: "Prévention des blessures intégrée à la planification, grâce à mon expérience de kinésithérapeute" },
      { id: "clinical-alert", label: "Regard de clinicien en cas d’alerte" },
      { id: "practical-advice", label: "Conseils techniques, ainsi qu’en nutrition sportive, hydratation et matériel, dans le cadre de mes compétences de coach" },
      { id: "group-sessions", label: "Séances collectives en présentiel, organisées ponctuellement et incluses dans l’abonnement KIBACO" },
    ],
  },
];

export const COACHING_FEATURES: CoachingFeature[] = COACHING_FEATURE_GROUPS.flatMap(
  (group) => group.items,
);
