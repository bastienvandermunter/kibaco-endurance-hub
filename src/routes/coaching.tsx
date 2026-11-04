import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Check } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { COACHING_FEATURES, LINKS, SITE } from "@/lib/site";
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
          "Coaching en endurance Kibaco : une formule individualisée à 110 €/mois, payable 330 €/trimestre. Suivi quotidien, IDO, contact WhatsApp 7j/7, zones d’entraînement à partir de la vitesse critique et séances collectives.",
      },
      { property: "og:title", content: "Coaching en endurance — Kibaco" },
      {
        property: "og:description",
        content:
          "Une seule offre de coaching à 110 €/mois, payable 330 €/trimestre : la même attention pour chacun, un plan individualisé et un suivi quotidien.",
      },
      { property: "og:url", content: "/coaching" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/coaching" }],
  }),
});

function CoachingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6">
          <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Coaching
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Un coach qui connaît votre corps, <span className="text-primary">pas seulement</span>{" "}
            vos chronos
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Kinésithérapeute, éducateur en triathlon breveté par l’Adeps mais aussi athlète
            confirmé, je prépare vos objectifs en triathlon, course à pied et trail avec des plans
            sur mesure et un suivi humain.
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
                J’ai eu la chance d’évoluer au niveau européen en triathlon et de monter à plusieurs
                reprises sur les podiums, aussi bien en triathlon qu’en trail. C’est dans cet
                univers exigeant que s’est forgée ma vision de l’entraînement : la progression ne se
                construit pas dans l’urgence, mais dans la continuité.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Un objectif ambitieux mérite une stratégie à sa hauteur. Cela signifie construire
                sur le long terme, entretenir une fréquence d’efforts régulière, maîtriser la charge
                d’entraînement et surtout, observer et ajuster en permanence. Chaque séance a sa
                place. Chaque période a son rôle. Chaque détail compte.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Mais progresser ne consiste pas simplement à repousser ses limites. Il faut être
                capable de les repousser sans dépasser celles de son corps.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                C’est pourquoi la prévention des blessures est au cœur de mon approche. Comprendre
                son corps, identifier les signaux faibles, adapter l’entraînement, respecter la
                récupération et intervenir avant que le problème ne devienne une blessure : pour
                moi, cela fait partie intégrante de la performance.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Mon objectif est simple : vous permettre de progresser, de performer et de durer.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Parce que la véritable performance ne se mesure pas uniquement à un chrono. Elle se
                construit dans la capacité à enchaîner les semaines, les mois et les saisons avec
                constance, confiance et un corps capable de répondre présent.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Chez KIBACO, nous ne cherchons pas simplement à vous faire aller plus vite. Nous
                construisons les conditions pour que vous puissiez aller plus loin.
              </p>
            </div>
          </div>
        </section>

        {/* Formule unique */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mb-6 flex items-center gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Une seule offre, la même attention pour chacun
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Parce que chaque athlète mérite un suivi de qualité, quels que soient son niveau, son
            expérience ou ses objectifs, j’ai choisi de proposer une formule unique. Pas de niveaux
            de service ni d’options supplémentaires : chacun bénéficie de la même attention, du même
            engagement et d’un accompagnement entièrement personnalisé.
          </p>

          <div className="mt-10 grid gap-8 border-y border-border py-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {SITE.coachingOffer.name}
              </h3>
              <p className="mt-5 text-left">
                <span className="font-display text-4xl font-semibold text-foreground">
                  {SITE.coachingOffer.monthlyPrice} €
                </span>
                <span className="ml-2 text-muted-foreground">/mois</span>
              </p>
              <p className="mt-3 text-left font-semibold text-primary">
                Paiement trimestriel : {SITE.coachingOffer.quarterlyPrice} €/trimestre
              </p>
              <p className="mt-2 text-left text-sm text-muted-foreground">
                Engagement minimum de {SITE.coachingOffer.commitmentMonths} mois
              </p>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {SITE.coachingOffer.text.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-left font-display text-2xl font-semibold leading-snug text-foreground">
            En un mois, on se met en action.
            <br />
            <span className="text-primary">En 3 mois, on construit sa progression !</span>
          </p>
        </section>

        {/* Avantages de la formule */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="mb-6 flex items-center gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Ce que comprend votre accompagnement
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {COACHING_FEATURES.map((feature) => (
              <li key={feature.id} className="flex items-start gap-3 border-b border-border py-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed text-foreground">{feature.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="rounded-md border border-border bg-foreground p-10 sm:p-12">
            <h2 className="mb-4 font-display text-3xl font-semibold text-background">
              Parlez-moi de votre objectif
            </h2>
            <p className="mb-8 max-w-2xl leading-relaxed text-background/80">
              Dites-moi qui vous êtes, ce que vous pratiquez et ce que vous visez. Je reviens vers
              vous pour en discuter et construire votre plan.
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
