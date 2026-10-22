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
      text: "Un programme standardisé de 12 semaines, adapté à votre objectif et à votre niveau, pour progresser en autonomie. Aucun suivi du coach.",
      note: "",
      highlighted: false,
    },
    {
      icon: Users as LucideIcon,
      name: "Kibaco Accompagnement",
      price: "90 €",
      unit: "par mois",
      text: "Un programme standardisé selon votre objectif et votre niveau, avec un suivi limité du coach et un accès aux séances de groupe.",
      note: "",
      highlighted: false,
    },
    {
      icon: Target as LucideIcon,
      name: "Kibaco Personnalisé",
      price: "130 €",
      unit: "par mois",
      text: "Plan entièrement individualisé selon des cycles de travail : tests de vos zones d’entraînement, suivi rapproché, adaptations régulières, échanges et séances collectives ponctuelles.",
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
