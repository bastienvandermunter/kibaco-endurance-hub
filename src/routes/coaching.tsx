import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Map,
  MessagesSquare,
  Gauge,
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Users,
  Activity,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { LINKS, SITE } from "@/lib/site";
const coachNage = { url: "/images/kibaco-coach-nage-v3.jpg" };
const coursePhoto = { url: "/images/kibaco-course.jpg" };
const trailNb = { url: "/images/kibaco-trail-nb.jpg" };

export const Route = createFileRoute("/coaching")({
  component: CoachingPage,
  head: () => ({
    meta: [
      { title: "Coaching en endurance — Kibaco" },
      {
        name: "description",
        content:
          "Coaching en endurance : trois offres — programme standardisé 50 €, accompagnement 90 €/mois, plan entièrement personnalisé 130 €/mois. Triathlon, course à pied et trail, avec suivi sur IDO et WhatsApp.",
      },
      { property: "og:title", content: "Coaching en endurance — Kibaco" },
      {
        property: "og:description",
        content:
          "Trois offres de coaching : programme 50 €, accompagnement 90 €/mois, personnalisé 130 €/mois. Triathlon, course à pied et trail.",
      },
      { property: "og:url", content: "/coaching" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/coaching" }],
  }),
});

const POINTS = [
  {
    icon: Map,
    title: "Plan d’entraînement individualisé",
    text: "Un programme construit autour de votre niveau, de votre emploi du temps et de votre objectif — triathlon, course à pied ou trail.",
  },
  {
    icon: Gauge,
    title: "Progression structurée et adaptée",
    text: "Des cycles qui alternent charge et récupération. Votre ressenti guide mes décisions. Chaque séance, chaque échange et chaque adaptation permettent de construire une progression qui respecte votre corps et votre rythme.",
  },
  {
    icon: TrendingUp,
    title: "Un projet à long terme",
    text: "Trois mois d’engagement au minimum pour construire quelque chose de solide. Au fil des séances et des saisons, l’objectif est une progression cohérente et durable, en respectant le rythme, les besoins et les objectifs de chacun.",
  },
  {
    icon: MessagesSquare,
    title: "Suivi sur l’application IDO",
    text: "Le suivi se déroule sur l’application IDO : après chaque séance, vous laissez votre retour (ressenti, fatigue, difficultés) et j’ajuste le plan en conséquence.",
  },
  {
    icon: ClipboardCheck,
    title: "Un regard de clinicien",
    text: "À la moindre alerte, je sais faire le tri entre inconfort normal et signal d’alarme — et adapter l’entraînement avant que la situation ne se dégrade.",
  },
  {
    icon: MessageCircle,
    title: "Contact WhatsApp illimité",
    text: "Une question entre deux séances ? Je réponds sur WhatsApp, sans limite de messages et sous 48 h au plus tard.",
  },
  {
    icon: Users,
    title: "Entraînements collectifs en présentiel",
    text: "J’organise ponctuellement des séances en présentiel dédiées à la course à pied et au vélo, incluses dans votre abonnement mensuel et accessibles gratuitement aux membres actifs. L’occasion de travailler la technique et la tactique : maîtrise du vélo, pilotage, transitions, technique de course à pied — quel que soit votre niveau.",
  },
  {
    icon: Activity,
    title: "Détermination des zones de travail",
    text: "Vos zones d’intensité sont définies avec précision grâce à des tests spécifiques, adaptés à votre profil et à votre discipline. Associés à l’analyse de vos séances et à votre ressenti, ces tests permettent d’ajuster vos intensités d’entraînement pour que chaque effort soit adapté, maîtrisé et réalisé avec un objectif précis.",
  },
  {
    icon: Lightbulb,
    title: "Hydratation, nutrition, technicité, matériel",
    text: "Des conseils concrets sur l’hydratation, la nutrition, la technique et le matériel, pour que chaque détail serve votre progression.",
  },
] as const;


function CoachingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6">
          <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-primary">Coaching</span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Un coach qui connaît votre corps,{" "}
            <span className="text-primary">pas seulement</span> vos chronos
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Kinésithérapeute, éducateur en triathlon breveté par l’Adeps mais aussi athlète
            confirmé, je prépare vos objectifs en triathlon, course à pied et trail avec des
            plans sur mesure et un suivi humain.
          </p>
        </section>

        {/* Parcours d'athlète + photos */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="grid flex-1 grid-cols-2 gap-4">
                <figure className="relative min-h-56 overflow-hidden rounded-md sm:min-h-64">
                  <img
                    src={coachNage.url}
                    alt="Bastien Vandermunter en séance de coaching natation au bord du bassin"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-2 right-2 rounded-sm bg-background/75 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-foreground/80">
                    Photo : Wildness Visual
                  </figcaption>
                </figure>
                <figure className="relative min-h-56 overflow-hidden rounded-md sm:min-h-64">
                  <img
                    src={coursePhoto.url}
                    alt="Bastien Vandermunter en course sur la partie à pied d’un triathlon"
                    className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
                    loading="lazy"
                  />
                </figure>
              </div>
              <figure className="flex min-h-64 flex-1 flex-col gap-2 sm:min-h-72">
                <div className="relative flex-1 overflow-hidden rounded-md">
                  <img
                    src={trailNb.url}
                    alt="Bastien Vandermunter en trail, photographié en noir et blanc"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-right text-[11px] font-medium tracking-wide text-muted-foreground">
                  Photo : Geoffrey Meuli
                </figcaption>
              </figure>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                La performance se construit dans la durée !
              </h2>
              <p className="mt-6 text-lg font-semibold leading-relaxed text-foreground">
                Construire la performance. Préserver le corps. Durer.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                J’ai eu la chance d’évoluer au niveau européen en triathlon et de monter à plusieurs reprises sur les podiums, aussi bien en triathlon qu’en trail. C’est dans cet univers exigeant
                que s’est forgée ma vision de l’entraînement : la progression ne se construit
                pas dans l’urgence, mais dans la continuité.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Un objectif ambitieux mérite une stratégie à sa hauteur. Cela signifie construire
                sur le long terme, entretenir une fréquence d’efforts régulière, maîtriser la
                charge d’entraînement et surtout, observer et ajuster en permanence. Chaque
                séance a sa place. Chaque période a son rôle. Chaque détail compte.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Mais progresser ne consiste pas simplement à repousser ses limites. Il faut être
                capable de les repousser sans dépasser celles de son corps.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                C’est pourquoi la prévention des blessures est au cœur de mon approche.
                Comprendre son corps, identifier les signaux faibles, adapter l’entraînement,
                respecter la récupération et intervenir avant que le problème ne devienne une
                blessure : pour moi, cela fait partie intégrante de la performance.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Mon objectif est simple : vous permettre de progresser, de performer et de durer.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Parce que la véritable performance ne se mesure pas uniquement à un chrono. Elle
                se construit dans la capacité à enchaîner les semaines, les mois et les saisons
                avec constance, confiance et un corps capable de répondre présent.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Chez KIBACO, nous ne cherchons pas simplement à vous faire aller plus vite. Nous
                construisons les conditions pour que vous puissiez aller plus loin.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que comprend le coaching */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mb-6 flex items-center gap-6">
            <h2 className="whitespace-nowrap font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Ce que comprend le coaching
            </h2>
            <div className="h-px w-full bg-border" />
          </div>
          <p className="mb-10 max-w-2xl text-left text-muted-foreground">
            Neuf points concrets, du premier plan d’entraînement jusqu’au jour de course.
          </p>

          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex flex-col bg-card p-7 transition-colors hover:bg-secondary/40 sm:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-display text-sm font-bold tracking-[0.25em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-left text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              );
            })}

          </div>
        </section>
        {/* Nos offres */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mb-6 flex items-center gap-6">
            <h2 className="whitespace-nowrap font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Nos offres
            </h2>
            <div className="h-px w-full bg-border" />
          </div>
          <p className="mb-10 max-w-2xl text-left text-muted-foreground">
            Trois façons de progresser : du programme en autonomie au suivi
            entièrement personnalisé.
          </p>

          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-3">
            {SITE.coachingOffers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div
                  key={offer.name}
                  className={
                    offer.highlighted
                      ? "flex flex-col bg-secondary/50 p-7 sm:p-8"
                      : "flex flex-col bg-card p-7 transition-colors hover:bg-secondary/40 sm:p-8"
                  }
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-display text-sm font-bold tracking-[0.25em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-foreground">
                    {offer.name}
                  </h3>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold text-foreground">
                      {offer.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{offer.unit}</span>
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {offer.text.split("\n\n").map((para) => (
                      <p key={para} className="text-left">
                        {para}
                      </p>
                    ))}
                  </div>
                  {offer.note ? (
                    <p className="mt-4 text-sm font-semibold text-primary">{offer.note}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="rounded-md border border-border bg-foreground p-10 sm:p-12">
            <h2 className="mb-4 font-display text-3xl font-semibold text-background">
              Parlez-moi de votre objectif
            </h2>
            <p className="mb-8 max-w-2xl leading-relaxed text-background/80">
              Dites-moi qui vous êtes, ce que vous pratiquez et ce que vous visez. Je
              reviens vers vous pour en discuter et construire votre plan.
            </p>
            <a
              href={LINKS.tallyForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Remplir le formulaire de contact
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
            <p className="mt-4 text-sm text-background/60">
              Le formulaire s’ouvre dans un nouvel onglet.
            </p>

            <p className="mt-6 text-sm text-background/60">
              Vous hésitez entre soin et entraînement ?{" "}
              <Link
                to="/kinesitherapie"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Voyez d’abord la kinésithérapie
                <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
