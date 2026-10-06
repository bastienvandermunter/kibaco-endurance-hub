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
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { SITE, LINKS } from "@/lib/site";
import coachNage from "@/assets/kibaco-coach-nage.jpg.asset.json";
import coursePhoto from "@/assets/kibaco-course.jpg.asset.json";
import trailNb from "@/assets/kibaco-trail-nb.jpg.asset.json";

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
] as const;

function CoachingPage() {
  const [planSurMesure, progression, projetLongTerme, suiviIdo, preparation, clinicien, whatsapp] = POINTS;
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

        {/* Bento : ce que comprend le coaching */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mb-12 flex items-center gap-6">
            <h2 className="whitespace-nowrap font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Ce que comprend le coaching
            </h2>
            <div className="h-px w-full bg-border" />
          </div>

          <div className="grid gap-4 md:grid-cols-6">
            {/* Plan sur mesure */}
            <div className="group rounded-md border border-border bg-card p-8 md:col-span-3">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{planSurMesure.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{planSurMesure.text}</p>
            </div>

            {/* Progression structurée */}
            <div className="group rounded-md border border-border bg-card p-8 md:col-span-3">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                <Gauge className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{progression.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{progression.text}</p>
            </div>

            {/* Projet à long terme */}
            <div className="rounded-md bg-secondary/50 p-8 md:col-span-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="mb-2 mt-4 font-display text-lg font-semibold text-foreground">{projetLongTerme.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{projetLongTerme.text}</p>
            </div>

            {/* Suivi IDO */}
            <div className="rounded-md bg-secondary/50 p-8 md:col-span-2">
              <MessagesSquare className="h-5 w-5 text-primary" />
              <h3 className="mb-2 mt-4 font-display text-lg font-semibold text-foreground">{suiviIdo.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{suiviIdo.text}</p>
            </div>

            {/* Préparation d'objectifs */}
            <div className="rounded-md bg-secondary/50 p-8 md:col-span-2">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="mb-2 mt-4 font-display text-lg font-semibold text-foreground">{preparation.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{preparation.text}</p>
            </div>

            {/* Regard de clinicien */}
            <div className="relative overflow-hidden rounded-md bg-foreground p-8 md:col-span-4">
              <div className="relative z-10 max-w-sm">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <h3 className="mb-2 mt-4 font-display text-2xl font-semibold text-background">{clinicien.title}</h3>
                <p className="text-sm leading-relaxed text-background/80">{clinicien.text}</p>
              </div>
              <span className="pointer-events-none absolute right-6 bottom-4 select-none -rotate-6 font-hand text-4xl text-primary opacity-60">
                Kinésithérapie
              </span>
            </div>

            {/* WhatsApp */}
            <div className="rounded-md bg-primary p-8 md:col-span-2">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
              <h3 className="mb-2 mt-4 font-display text-lg font-semibold text-primary-foreground">{whatsapp.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/90">{whatsapp.text}</p>
            </div>
          </div>
        </section>
        {/* Tarifs & contact */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border p-10 md:border-b-0 md:border-r md:p-12">
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Tarifs & engagement
                </span>
                <div className="mb-2 mt-6 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold text-foreground">{SITE.coachingPrice}</span>
                  <span className="text-base text-muted-foreground">{SITE.coachingPriceUnit}</span>
                </div>
                <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                  {SITE.coachingPriceStudent}
                </p>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  La tarification est mensuelle, sans engagement de longue durée — mais je
                  recommande un projet pensé sur plusieurs mois, voire plusieurs saisons : c’est
                  le meilleur terrain pour l’évolution de l’athlète, et cela colle à ma vision à
                  long terme du coaching.
                </p>
              </div>

              <div className="flex flex-col justify-center bg-foreground p-10 md:p-12">
                <h2 className="mb-4 font-display text-3xl font-semibold text-background">
                  Parlez-moi de votre objectif
                </h2>
                <p className="mb-8 leading-relaxed text-background/80">
                  Dites-moi qui vous êtes, ce que vous pratiquez et ce que vous visez. Je
                  reviens vers vous pour en discuter et construire votre plan.
                </p>
                <a
                  href={LINKS.googleForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Me contacter via le formulaire
                  <ExternalLink className="h-5 w-5" />
                </a>
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
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
