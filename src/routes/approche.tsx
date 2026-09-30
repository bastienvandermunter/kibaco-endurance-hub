import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, HandHeart, Route as RouteIcon } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-layout";
import { SITE } from "@/lib/site";
import portraitAsset from "@/assets/bastien-portrait.png.asset.json";

export const Route = createFileRoute("/approche")({
  component: ApprochePage,
  head: () => ({
    meta: [
      { title: "L’Approche — Bastien Vandermunter, Kibaco" },
      {
        name: "description",
        content:
          "Ma vision : une prise en charge précise, humaine et continue, du soin en kinésithérapie jusqu’à la performance en triathlon, course à pied et trail.",
      },
      { property: "og:title", content: "L’Approche — Bastien Vandermunter, Kibaco" },
      {
        property: "og:description",
        content:
          "Précis, humain, du soin à la performance : découvrez ma vision de l’accompagnement des sportifs.",
      },
      { property: "og:url", content: "/approche" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/approche" }],
  }),
});

function ApprochePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="L’Approche"
          title="Je m’appelle Bastien, et voici ma vision du sport et du soin"
          intro="Kinésithérapeute de formation et coach en sport d’endurance par passion, je crois qu’un corps bien soigné peut aller loin — et qu’un sportif bien accompagné se blesse moins."
        />

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              De la réhabilitation à la performance
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Diplômé d’un master en kinésithérapie et coach en sport d’endurance, j’ai bâti Kibaco
                autour d’une conviction simple : la rééducation et l’entraînement ne sont pas deux mondes
                séparés, mais les deux extrémités d’un même chemin.
              </p>
              <p>
                Une personne blessée a besoin de plus qu’un traitement : elle a besoin d’un plan pour revenir.
                Un sportif en pleine forme a besoin de plus qu’un programme : il a besoin d’une écoute,
                d’ajustements et d’un regard de clinicien. C’est exactement ce pont que je propose de
                construire avec vous.
              </p>
              <p>
                Je travaille avec des coureurs, des traileurs et des triathlètes de tous niveaux — du
                premier 5 km à l’Ironman. Chaque accompagnement commence par une écoute : votre histoire,
                votre corps, vos contraintes et vos objectifs.
              </p>
            </div>
             <p className="mt-6 font-hand text-3xl text-primary">{SITE.tagline}</p>
          </div>
           <div className="mx-auto aspect-[4/4.5] w-full max-w-md overflow-hidden rounded-md bg-secondary">
            <img
               src={portraitAsset.url}
               alt="Bastien Vandermunter, kinésithérapeute et coach en endurance"
               className="h-full w-full object-cover object-top"
            />
          </div>
        </section>

         <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-center font-display text-3xl font-semibold text-foreground">
              Ce qui guide chaque accompagnement
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <ValueCard
                icon={<Target className="h-6 w-6" />}
                title="Précis"
                text="Un bilan complet, des objectifs clairs et mesurables, des méthodes basées sur la pratique et la formation continue. Pas de programme générique."
              />
              <ValueCard
                icon={<HandHeart className="h-6 w-6" />}
                title="Humain"
                text="Vous êtes bien plus qu’une blessure ou un chrono. J’écoute votre vécu, vos contraintes et votre envie — c’est le point de départ de tout."
              />
              <ValueCard
                icon={<RouteIcon className="h-6 w-6" />}
                title="Continu"
                text="Le lien entre le cabinet et l’entraînement : je sais vous faire revenir du blessé au performeur, avec une progression sécurisée à chaque étape."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-foreground">Et concrètement ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Deux portes d’entrée selon là où vous en êtes aujourd’hui.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/kinesitherapie"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-opacity hover:opacity-90"
            >
              Kinésithérapie
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/coaching"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Coaching
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
     <div className="rounded-md border border-border bg-background p-7">
       <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
