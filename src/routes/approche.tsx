import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, HandHeart, Route as RouteIcon } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-layout";
import { SITE } from "@/lib/site";
const portraitAsset = { url: "/images/bastien-portrait.png" };

export const Route = createFileRoute("/approche")({
  component: ApprochePage,
  head: () => ({
    meta: [
      { title: "L’Approche — Bastien Vandermunter, Kibaco" },
      {
        name: "description",
        content:
          "Bastien Vandermunter, kinésithérapeute et éducateur en triathlon breveté Adeps : son parcours, la naissance de KIBACO et ce qui guide chaque accompagnement, du soin à l’entraînement.",
      },
      { property: "og:title", content: "L’Approche — Bastien Vandermunter, Kibaco" },
      {
        property: "og:description",
        content:
          "Le parcours de Bastien et la vision qui relie la kinésithérapie et le coaching en endurance chez KIBACO.",
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
          title="Je m’appelle Bastien, et voici ma vision du soin et de l’entraînement"
          intro="Kinésithérapeute diplômé et éducateur en triathlon breveté par l’Adeps, j’ai créé KIBACO pour réunir deux domaines qui me passionnent : le soin et l’entraînement. Deux activités distinctes, mais une même conviction : chaque personne mérite un accompagnement précis, individualisé et profondément humain."
        />

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              De la réhabilitation à la performance
            </h2>
            <p className="mt-4 border-l-2 border-primary pl-4 font-hand text-3xl leading-tight text-primary">{SITE.tagline}.</p>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>Sportif depuis mon plus jeune âge, je pratique le triathlon depuis 2010. Cette discipline m’a appris la rigueur, la patience et l’importance d’une progression construite sur le long terme.</p>
              <p>Depuis 2020, j’accompagne des sportifs de tous âges et de tous niveaux dans leurs objectifs, du premier 5 km jusqu’à l’Ironman.</p>
              <p>En parallèle, ma formation en kinésithérapie à l’HE2B, dont je suis diplômé depuis 2026, m’a apporté une compréhension approfondie du corps humain, du mouvement et des mécanismes de récupération et de rééducation.</p>
              <p>C’est de cette double expérience qu’est né KIBACO : un projet réunissant la kinésithérapie et le coaching en endurance autour d’une même attention portée à la personne.</p>
              <p>Que vous consultiez pour retrouver votre mobilité, soulager une douleur, reprendre vos activités ou préparer un défi sportif, mon objectif reste le même : vous proposer un accompagnement adapté à vos besoins, à votre rythme et à votre réalité quotidienne.</p>
            </div>
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
                text="Chaque accompagnement commence par une évaluation attentive de votre situation, de vos besoins et de vos objectifs. Je m’appuie sur mes connaissances, mon expérience et une démarche fondée sur les données scientifiques pour proposer des interventions adaptées et cohérentes."
              />
              <ValueCard
                icon={<HandHeart className="h-6 w-6" />}
                title="Humain"
                text="Derrière chaque douleur, chaque objectif ou chaque performance, il y a avant tout une personne. Votre histoire, votre ressenti et vos contraintes sont essentiels pour construire un accompagnement qui vous correspond réellement."
              />
              <ValueCard
                icon={<RouteIcon className="h-6 w-6" />}
                title="Continu"
                text="Le soin comme l’entraînement s’inscrivent dans une évolution. J’accorde une importance particulière au suivi, à la régularité et à l’adaptation de l’accompagnement, pour vous aider à progresser à votre rythme et à préserver les résultats obtenus."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-foreground">Et concrètement ?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Deux domaines d’expertise, une même attention portée à votre santé, votre mouvement et vos objectifs. Découvrez l’accompagnement qui correspond à vos besoins.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 text-left md:grid-cols-2">
            <ServiceCard to="/kinesitherapie" title="Kinésithérapie" label="Découvrir la kinésithérapie" text="Une prise en charge personnalisée pour soulager vos douleurs, retrouver vos capacités et vous accompagner dans votre rééducation, quel que soit votre niveau d’activité." />
            <ServiceCard to="/coaching" title="Coaching" label="Découvrir le coaching" text="Un accompagnement individualisé en triathlon, course à pied et trail pour progresser durablement, avec une planification adaptée à votre quotidien." />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
     <div className="flex h-full flex-col rounded-md border border-border bg-background p-6 sm:p-7">
       <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-left leading-relaxed text-muted-foreground hyphens-none">{text}</p>
    </div>
  );
}

function ServiceCard({ to, title, text, label }: { to: "/kinesitherapie" | "/coaching"; title: string; text: string; label: string }) {
  return (
    <div className="flex h-full flex-col rounded-md border border-border bg-card p-7">
      <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-left leading-relaxed text-muted-foreground hyphens-none">{text}</p>
      <Link to={to} className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
