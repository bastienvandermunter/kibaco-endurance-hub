import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, TrendingUp, Phone, Mail, Quote } from "lucide-react";
import { SiteHeader, SiteFooter, ArcTop } from "@/components/site-layout";
import { SITE, LINKS } from "@/lib/site";
import heroAsset from "@/assets/kibaco-hero.png.asset.json";

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
        {/* Héros */}
        <section className="relative overflow-hidden">
          <ArcTop className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 text-primary/25" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full border border-primary/40 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-foreground">
                KINÉSITHÉRAPIE · TRIATHLON · COURSE À PIED · TRAIL
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
                De la réhabilitation à la performance
              </h1>
              <p className="mt-4 font-accent text-2xl italic leading-tight text-primary">
                Un accompagnement précis et humain !
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Je suis {SITE.owner}, {SITE.role.toLowerCase()}. Que vous veniez pour soigner une blessure ou
                pour atteindre un objectif sportif, nous construisons ensemble un chemin clair, adapté à
                votre corps et à votre vie.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/kinesitherapie"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-opacity hover:opacity-90"
                >
                  Découvrir la kinésithérapie
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/coaching"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Découvrir le coaching
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-4xl border border-border shadow-warm">
                <img
                  src={heroAsset.url}
                  alt="Nageur, cycliste et coureur au lever du soleil — l’endurance sous toutes ses formes"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center font-accent text-xl italic text-primary/80">
                Nager. Pédaler. Courir. Grandir.
              </p>
            </div>
          </div>
        </section>

        {/* Deux options */}
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Deux volets</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Deux chemins, un seul accompagnement
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Soigner ou performer — les deux se rejoignent. Choisissez l’onglet qui vous ressemble
                aujourd’hui, nous avancerons ensuite à votre rythme.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
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

        {/* Bandeau approche */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="relative overflow-hidden rounded-4xl bg-foreground px-6 py-12 text-center text-background sm:px-12">
            <Quote className="mx-auto h-8 w-8 text-primary" />
            <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl">
              « Une prise en charge qui commence au cabinet et se poursuit sur la route, le vélo et
              dans l’eau. »
            </p>
            <p className="mt-4 font-hand text-2xl text-primary">{SITE.tagline}</p>
            <Link
              to="/approche"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Découvrir mon approche
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Contact rapide */}
        <section className="border-t border-border/60 bg-secondary/40">
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
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
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
      className="group relative flex flex-col rounded-4xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-warm"
    >
      {badge && (
        <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {badge}
        </span>
      )}
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary text-primary">
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
