import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Map,
  MessagesSquare,
  Trophy,
  Gauge,
  ClipboardCheck,
  ExternalLink,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-layout";
import { SITE, LINKS } from "@/lib/site";
import coachNage from "@/assets/kibaco-coach-nage.jpg.asset.json";
import coursePhoto from "@/assets/kibaco-course.jpg.asset.json";
import trailNb from "@/assets/kibaco-trail-nb.jpg.asset.json";
import vtt from "@/assets/kibaco-vtt.jpg.asset.json";

export const Route = createFileRoute("/coaching")({
  component: CoachingPage,
  head: () => ({
    meta: [
      { title: "Coaching en endurance — Kibaco" },
      {
        name: "description",
        content:
          "Coaching personnalisé en triathlon, course à pied et trail : plan d’entraînement sur mesure, suivi hebdomadaire et préparation de vos objectifs. 120 €/mois, 100 €/mois pour les étudiants.",
      },
      { property: "og:title", content: "Coaching en endurance — Kibaco" },
      {
        property: "og:description",
        content:
          "Plans d’entraînement sur mesure et suivi régulier pour triathlon, course à pied et trail. 120 €/mois — 100 €/mois pour les étudiants.",
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
    title: "Plan d’entraînement sur mesure",
    text: "Un programme construit autour de votre niveau, de votre emploi du temps et de votre objectif — triathlon, course à pied ou trail.",
  },
  {
    icon: Gauge,
    title: "Progression structurée",
    text: "Des cycles d’entraînement qui alternent charge et récupération, avec des intensités claires pour chaque séance.",
  },
  {
    icon: TrendingUp,
    title: "Un projet à long terme",
    text: "Je crois en un accompagnement qui s’inscrit dans la durée. Au fil des séances et des saisons, l’objectif est de construire une progression cohérente et durable, en respectant le rythme, les besoins et les objectifs de chacun.",
  },
  {
    icon: MessagesSquare,
    title: "Suivi sur l’application IDO",
    text: "Le suivi se déroule sur l’application IDO : après chaque séance, vous laissez votre feedback (ressenti, fatigue, difficultés) et j’ajuste le plan en conséquence.",
  },
  {
    icon: Trophy,
    title: "Préparation d’objectifs",
    text: "Course, triathlon ou trail : une feuille de route jusqu’au jour J, avec une stratégie de course et de gestion de l’effort.",
  },
  {
    icon: ClipboardCheck,
    title: "Un regard de clinicien",
    text: "Moindre alerte, je sais faire le tri entre inconfort normal et signal d’alarme — et adapter avant que ça se dégrade.",
  },
  {
    icon: MessageCircle,
    title: "Réponse sur WhatsApp",
    text: "Une question entre deux séances ? Je réponds sur WhatsApp, sans limite de messages et sous 48 h au plus tard.",
  },
];

function CoachingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Coaching"
          title="Un coach qui connaît votre corps, pas seulement vos chronos"
          intro="Kinésithérapeute, éducateur en triathlon breveté par l’Adeps mais aussi athlète confirmé, je prépare vos objectifs en triathlon, course à pied et trail avec des plans sur mesure et un suivi humain."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold text-foreground">
            Ce que comprend le coaching
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POINTS.map((p) => (
               <div key={p.title} className="rounded-md border border-border bg-card p-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-5 lg:items-center">
            <figure className="lg:col-span-2 overflow-hidden rounded-md">
              <img
                src={coachNage.url}
                alt="Bastien Vandermunter en séance de coaching natation au bord du bassin"
                className="h-72 w-full object-cover sm:h-96 lg:h-[560px]"
                loading="lazy"
              />
            </figure>
            <figure className="lg:col-span-3 overflow-hidden rounded-md">
              <img
                src={coursePhoto.url}
                alt="Bastien Vandermunter en course sur la partie à pied d’un triathlon"
                className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-5">
            <figure className="lg:col-span-2 overflow-hidden rounded-md">
              <img
                src={trailNb.url}
                alt="Bastien Vandermunter en trail, photographié en noir et blanc"
                className="h-72 w-full object-cover sm:h-96 lg:h-[620px]"
                loading="lazy"
              />
            </figure>
            <div className="lg:col-span-3 flex items-center">
              <div className="border-l-4 border-primary bg-card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Mon parcours d’athlète</p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  La performance se construit dans la durée
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  J’ai couru au niveau européen, et c’est là que s’est forgée ma vision de
                  l’entraînement : une construction à long terme, une fréquence d’efforts
                  entretenue au quotidien et un suivi constant — avec un objectif qui ne
                  bouge jamais : zéro blessure.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <figure className="mx-auto max-w-3xl overflow-hidden rounded-md">
              <img
                src={vtt.url}
                alt="Bastien Vandermunter en VTT sur un sentier"
                className="h-72 w-full object-cover sm:h-[520px]"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
              <div className="border-l-4 border-primary bg-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Tarifs</p>
              <p className="mt-4 font-display text-2xl font-semibold text-foreground">
                {SITE.coachingPrice}{" "}
                <span className="text-base font-medium text-muted-foreground">{SITE.coachingPriceUnit}</span>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                {SITE.coachingPriceStudent}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                La tarification est mensuelle, sans engagement de longue durée — mais je recommande un
                projet pensé sur plusieurs mois, voire plusieurs saisons : c’est le meilleur terrain pour
                l’évolution de l’athlète, et cela colle à ma vision à long terme du coaching.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Parlez-moi de votre objectif
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Remplissez le formulaire de contact : dites-moi qui vous êtes, ce que vous pratiquez et ce
                que vous visez. Je reviens vers vous pour en discuter et construire votre plan.
              </p>
              <a
                href={LINKS.googleForm}
                target="_blank"
                rel="noopener noreferrer"
                 className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Me contacter via le formulaire
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-5 text-sm text-muted-foreground">
                Vous hésitez entre soin et entraînement ?{" "}
                <Link to="/kinesitherapie" className="font-semibold text-primary underline-offset-4 hover:underline">
                  Voyez d’abord la kinésithérapie
                  <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
