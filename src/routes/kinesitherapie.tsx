import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  Hand,
  Dumbbell,
  ShieldCheck,
  RotateCcw,
  Lightbulb,
  Clock,
} from "lucide-react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/kinesitherapie")({
  component: KinesitherapiePage,
  head: () => ({
    meta: [
      { title: "Kinésithérapie — Kibaco, Braine-l’Alleud" },
      {
        name: "description",
        content:
          "Kinésithérapie du sport à Braine-l’Alleud : bilan, thérapie manuelle, revalidation et prévention. Tarif : 40 € la séance. Prise de rendez-vous en ligne via Doctor Anytime.",
      },
      { property: "og:title", content: "Kinésithérapie — Kibaco, Braine-l’Alleud" },
      {
        property: "og:description",
        content:
          "Bilan, thérapie manuelle, revalidation du sportif et prévention des blessures. 40 € la séance, rendez-vous en ligne.",
      },
      { property: "og:url", content: "/kinesitherapie" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/kinesitherapie" }],
  }),
});

const POINTS = [
  {
    icon: ClipboardList,
    title: "Bilan et diagnostic",
    text: "Un examen complet de votre blessure, de votre posture et de votre gestuelle sportive pour comprendre la cause, pas seulement la douleur.",
  },
  {
    icon: Hand,
    title: "Thérapie manuelle",
    text: "Des techniques manuelles ciblées pour redonner de la mobilité, diminuer la douleur et relancer la guérison des tissus.",
  },
  {
    icon: Dumbbell,
    title: "Revalidation active",
    text: "Un programme d’exercices progressifs, adapté à votre sport, pour reconstruire force, mobilité et confiance.",
  },
  {
    icon: ShieldCheck,
    title: "Prévention des blessures",
    text: "Identification des facteurs de risque (déséquilibres, surcharge, matériel) et plan de prévention concret pour éviter la récidive.",
  },
  {
    icon: RotateCcw,
    title: "Retour au sport encadré",
    text: "Des critères clairs et un calendrier réaliste pour reprendre la course, le vélo ou la natation sans repartir dans la blessure.",
  },
  {
    icon: Lightbulb,
    title: "Conseils et éducation",
    text: "Vous comprenez votre blessure, vous savez quoi faire au quotidien : c’est le meilleur raccourci vers la guérison.",
  },
];

function KinesitherapiePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Kinésithérapie"
          title="Se soigner, se reconstruire, revenir plus fort"
          intro="Une prise en charge du sportif et de l’actif : soulager la douleur, réparer, puis vous rendre plus solide qu’avant la blessure."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold text-foreground">
            Les points clés de la prise en charge
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POINTS.map((p) => (
              <div key={p.title} className="rounded-4xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="rounded-4xl border border-primary/30 bg-card p-8 shadow-warm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Tarif</p>
              <p className="mt-3 font-display text-5xl font-semibold text-foreground">
                {SITE.kinePrice}
                <span className="ml-2 text-xl font-medium text-muted-foreground">/ {SITE.kinePriceUnit}</span>
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Séances au cabinet, sur rendez-vous. Un tarif clair, sans surprise, pour un suivi
                personnalisé du début à la fin de votre rééducation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Prenez rendez-vous en ligne
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Les rendez-vous de kinésithérapie se réservent via Doctor Anytime : choisissez le créneau
                qui vous convient en quelques clics.
              </p>
              <a
                href={LINKS.doctorAnytime}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-opacity hover:opacity-90"
              >
                <CalendarCheck className="h-4 w-4" />
                Accéder à Doctor Anytime
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
