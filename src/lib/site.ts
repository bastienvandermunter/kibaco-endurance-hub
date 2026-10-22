import { Compass, Users, Target, type LucideIcon } from "lucide-react";

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
  coachingOffers: [
    {
      icon: Compass as LucideIcon,
      name: "Kibaco Programme",
      price: "50 €",
      unit: "paiement unique",
      text:
        "Des programmes d’entraînement structurés sur 12 semaines, conçus pour vous accompagner dans votre remise en forme ou l’optimisation de vos performances. Grâce à une progression cohérente et progressive, avancez à votre rythme avec un plan clé en main, accessible et facile à suivre.\n\n" +
        "Ces programmes sont standardisés et non personnalisés : aucun suivi, ajustement ou échange individuel avec le coach n’est inclus. Vous progressez ainsi en toute autonomie, à votre rythme.",
      note: "",
      highlighted: false,
    },
    {
      icon: Users as LucideIcon,
      name: "Kibaco Accompagnement",
      price: "90 €",
      unit: "par mois",
      text:
        "Progressez à votre rythme avec un programme conçu pour vous ! 💪\n\n" +
        "Profitez d’un plan d’entraînement 100 % personnalisé, adapté à votre niveau et à vos objectifs, et actualisé toutes les 2 semaines pour vous permettre de progresser en continu.\n\n" +
        "Bénéficiez également d’un suivi ponctuel de votre coach et d’un accès aux séances collectives KIBACO pour rester motivé et vous dépasser !",
      note: "",
      highlighted: false,
    },
    {
      icon: Target as LucideIcon,
      name: "Kibaco Personnalisé",
      price: "130 €",
      unit: "par mois",
      text:
        "Profitez d’un programme d’entraînement 100 % individualisé, construit autour de vos objectifs, de votre niveau et de votre mode de vie.\n\n" +
        "Grâce à un suivi quotidien et des ajustements journaliers, votre plan évolue en fonction de vos sensations, de votre progression et de vos imprévus.\n\n" +
        "Bénéficiez également de tests pour définir vos zones d’entraînement, d’échanges réguliers avec votre coach et d’un accès aux séances collectives KIBACO.\n\n" +
        "Un accompagnement complet, structuré en cycles de travail, pour progresser durablement et sereinement.",
      note: "Engagement minimum de 3 mois",
      highlighted: true,
    },
  ],
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

// Comparatif des offres : true = inclus, false = non inclus,
// une chaîne = la précision affichée dans la case.
// Les valeurs suivent l’ordre de SITE.coachingOffers.
export const COACHING_COMPARISON = [
  {
    label: "Programme structuré sur 12 semaines, plan clé en main",
    values: [true, false, false] as CompareValue[],
  },
  {
    label: "Plan personnalisé selon vos objectifs et votre niveau",
    values: [false, true, true] as CompareValue[],
  },
  {
    label: "Plan individualisé autour de votre mode de vie et de vos imprévus",
    values: [false, false, true] as CompareValue[],
  },
  {
    label: "Actualisation du plan",
    values: [false, "Toutes les 2 semaines", "Ajustements journaliers"] as CompareValue[],
  },
  {
    label: "Suivi sur l’application IDO",
    values: [false, true, true] as CompareValue[],
  },
  {
    label: "Suivi et échanges avec le coach",
    values: [false, "Ponctuel", "Quotidien"] as CompareValue[],
  },
  {
    label: "Tests pour définir vos zones d’entraînement",
    values: [false, false, true] as CompareValue[],
  },
  {
    label: "Accès aux séances collectives KIBACO",
    values: [false, true, true] as CompareValue[],
  },
  {
    label: "Engagement minimum de 3 mois",
    values: [false, false, true] as CompareValue[],
  },
];

export type CompareValue = boolean | string;
