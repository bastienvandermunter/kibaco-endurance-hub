import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  Hand,
  Dumbbell,
  ShieldCheck,
  RotateCcw,
  Waves,
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
            "Kinésithérapie à Braine-l’Alleud : bilan, thérapie manuelle, revalidation, drainage lymphatique (méthode Leduc) et prévention, pour tous — sportifs ou non. Non conventionné. Ouverture prochaine.",
        },
      { property: "og:title", content: "Kinésithérapie — Kibaco, Braine-l’Alleud" },
      {
        property: "og:description",
        content:
          "Prise en charge orthopédique et traumatologique : bilan, thérapie manuelle, revalidation et drainage lymphatique (méthode Leduc). Ouverture prochaine.",
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
    title: "Bilan initial complet",
    text: "Chaque séance commence par un bilan complet pour identifier la cause réelle de votre douleur et mettre en place un plan de rééducation clair et efficace.",
  },
  {
    icon: Hand,
    title: "Thérapie manuelle",
    text: "Des techniques manuelles ciblées pour redonner de la mobilité, diminuer la douleur et relancer la guérison des tissus.",
  },
  {
    icon: Dumbbell,
    title: "Revalidation active",
    text: "Un programme d’exercices progressifs, adapté à votre quotidien, votre travail et vos activités, pour reconstruire force, mobilité et confiance.",
  },
  {
    icon: Waves,
    title: "Drainage lymphatique",
    text: "Pratiqué selon la méthode Leduc, pour réduire œdèmes et gonflements et favoriser une bonne récupération.",
  },
  {
    icon: ShieldCheck,
    title: "Prévention des récidives",
    text: "Identification des facteurs de risque et un plan concret pour que le problème ne revienne pas.",
  },
  {
    icon: RotateCcw,
    title: "Retour à vos activités",
    text: "Des critères clairs et un calendrier réaliste pour reprendre le travail, le sport ou vos loisirs en confiance, sans repartir dans la blessure.",
  },
  {
    icon: Lightbulb,
    title: "Conseils et éducation",
    text: "Vous comprenez votre corps et vous savez quoi faire au quotidien : c’est le meilleur raccourci vers la guérison.",
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
          intro="Une prise en charge orthopédique et traumatologique, précise, progressive et adaptée à votre situation, pour chacun, à tout âge et à tout rythme de vie."
        />

        <section className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Orthopédie · Traumatologie · Drainage lymphatique (méthode Leduc)
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
           <div className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
            <Clock className="h-4 w-4" />
            Bientôt disponible — la prise de rendez-vous ouvre prochainement
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mb-6 flex items-center gap-6">
            <h2 className="whitespace-nowrap font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Les points clés de la prise en charge
            </h2>
            <div className="h-px w-full bg-border" />
          </div>
          <p className="mb-10 max-w-2xl text-left text-muted-foreground">
            Sept points concrets, du premier bilan jusqu’au retour à vos activités.
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

         <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="border-l-4 border-primary bg-card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Tarifs</p>
              <div className="mt-5 space-y-4">
                {SITE.kinePrices.map((t) => (
                  <div key={t.label} className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <span className="text-sm font-medium text-muted-foreground">{t.label}</span>
                    <span
                      aria-hidden="true"
                      className="select-none font-display text-lg font-semibold text-foreground blur-[6px]"
                    >
                      {t.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Séances au cabinet, sur rendez-vous. Un tarif clair, sans surprise, pour un suivi
                personnalisé du début à la fin de votre rééducation.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                Non conventionné
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Les rendez-vous ouvrent bientôt
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {SITE.kineComingSoon
                  ? "Le volet kinésithérapie est en préparation : la prise de rendez-vous sera ouverte prochainement. En attendant, découvrez l’approche ci-dessus ou contactez-moi pour toute question."
                  : "Les rendez-vous de kinésithérapie se réservent via Doctor Anytime : choisissez le créneau qui vous convient en quelques clics."}
              </p>
              <a
                href={`mailto:${SITE.email}`}
                 className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <Clock className="h-4 w-4" />
                Me tenir informé de l’ouverture
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
