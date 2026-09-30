import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, TrendingUp, Phone, Mail } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { SITE } from "@/lib/site";
import portraitAsset from "@/assets/bastien-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kibaco — Kinésithérapie & coaching en sport d’endurance à Braine-l’Alleud" },
      {
        name: "description",
        content:
          "Bastien Vandermunter, kinésithérapeute et coach en sport d’endurance : rééducation, prévention et préparation triathlon, course à pied et trail. Deux chemins, un accompagnement précis et humain.",
      },
      { property: "og:title", content: "Kibaco — Kinésithérapie & coaching en sport d’endurance" },
      {
        property: "og:description",
        content:
          "De la réhabilitation à la performance : kinésithérapie et coaching sportif à Braine-l’Alleud. Triathlon, course à pied, trail.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-7 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
            <div>
              <p className="inline-flex rounded-md bg-secondary px-3 py-2 text-xs font-bold uppercase text-secondary-foreground">
                KINÉSITHÉRAPIE · TRIATHLON · COURSE À PIED · TRAIL
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:mt-6 sm:text-5xl">
                Kibaco. Du soin à la <span className="text-primary">performance.</span>
              </h1>
              <p className="mt-4 font-hand text-2xl text-primary">Un accompagnement précis et humain !</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                Je suis {SITE.owner}, kinésithérapeute et coach en sport d’endurance. Ensemble, nous construisons
                un chemin adapté à votre corps, à votre quotidien et à vos objectifs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <Link to="/coaching" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                  Découvrir le coaching <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/kinesitherapie" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary">
                  Kinésithérapie · bientôt <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="aspect-[16/9] overflow-hidden rounded-md bg-secondary shadow-card lg:aspect-[4/4.2]">
                <img src={portraitAsset.url} alt="Portrait de Bastien Vandermunter" className="h-full w-full object-cover object-[center_32%] lg:object-top" />
              </div>
              <div className="absolute -bottom-5 left-4 hidden rounded-md border border-border bg-card px-5 py-3 shadow-card lg:block">
                <p className="font-display text-sm font-bold text-foreground">Bastien Vandermunter</p>
                <p className="mt-1 text-xs text-muted-foreground">Kinésithérapeute & coach en endurance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deux options */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Deux volets</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Un accompagnement, deux voies</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">Du soin à l’entraînement, choisissez l’accompagnement qui correspond à votre étape actuelle.</p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <OptionCard
                to="/kinesitherapie"
                icon={<HeartPulse className="h-6 w-6" />}
                title="Kinésithérapie"
                badge="Bientôt disponible"
                description="Bilan, traitement et revalidation pour soulager la douleur, réparer et revenir plus fort."
                points={["Bilan initial complet", "Thérapie manuelle et revalidation", "Prévention des récidives"]}
                price={`${SITE.kinePrice} / ${SITE.kinePriceUnit}`}
              />
              <OptionCard
                to="/coaching"
                icon={<TrendingUp className="h-6 w-6" />}
                title="Coaching en endurance"
                description="Un plan d’entraînement sur mesure pour triathlon, course à pied ou trail, avec un suivi régulier."
                points={["Plan personnalisé et évolutif", "Suivi hebdomadaire", "Préparation de vos objectifs"]}
                price={`${SITE.coachingPrice} / mois`}
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary/55">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <div>
              <p className="text-xs font-bold uppercase text-primary">L’approche Kibaco</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-snug text-foreground">De la réhabilitation à la performance, sans rupture.</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{SITE.tagline}.</p>
            </div>
            <Link to="/approche" className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-card transition-opacity hover:opacity-90">
              Découvrir mon approche <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Contact rapide */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground">Une question ? Parlons-en.</h2>
              <p className="mt-1 text-muted-foreground">
                Appelez-moi ou écrivez-moi, je vous réponds personnellement.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SITE.phoneHref}
                 className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-card transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                 className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function OptionCard({
  to,
  icon,
  title,
  description,
  points,
  price,
  badge,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  price: string;
  badge?: string;
}) {
  return (
    <Link
      to={to}
       className="group relative flex flex-col rounded-md border border-border bg-card p-7 transition-colors hover:border-primary"
    >
      {badge && (
         <span className="absolute right-5 top-5 rounded-md bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          {badge}
        </span>
      )}
       <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-display text-lg font-semibold text-primary">{price}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-primary">
          Découvrir
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
