import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ExternalLink } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { COACHING_FEATURE_GROUPS, LINKS, SITE } from "@/lib/site";

const coachEchauffement = { url: "/images/kibaco-coach-echauffement.jpg" };
const coachNage = { url: "/images/kibaco-coach-nage-v3.jpg" };
const coursePhoto = { url: "/images/kibaco-course.jpg" };
const trailNb = { url: "/images/kibaco-trail-nb.jpg" };

const offer = SITE.coachingOffer;

// L’essentiel de l’offre, lisible d’un coup d’œil en haut de page.
const KEY_FACTS = [
  {
    value: `${offer.monthlyPrice} €`,
    unit: "/mois",
    label: `Payable ${offer.quarterlyPrice} €/trimestre`,
    highlight: true,
  },
  {
    value: `${offer.commitmentMonths} mois`,
    unit: "",
    label: "Engagement minimum pour construire votre progression",
    highlight: false,
  },
  {
    value: "7j/7",
    unit: "",
    label: "Contact avec votre coach sur WhatsApp",
    highlight: false,
  },
  {
    value: "100 %",
    unit: "",
    label: "Plan individualisé, ajusté selon vos sensations",
    highlight: false,
  },
];

const PILLARS = [
  {
    number: "01",
    title: "Construire sur la durée",
    text: "Une fréquence d’efforts régulière, une charge maîtrisée et des ajustements permanents : chaque séance a sa place, chaque période a son rôle, chaque détail compte.",
  },
  {
    number: "02",
    title: "Préserver le corps",
    text: "Repousser ses limites sans dépasser celles de son corps. La prévention des blessures est au cœur de mon approche : repérer les signaux faibles, respecter la récupération et intervenir avant la blessure.",
  },
  {
    number: "03",
    title: "Durer",
    text: "Enchaîner les semaines, les mois et les saisons avec constance, confiance et un corps capable de répondre présent.",
  },
];

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
        {/* Hero : promesse, photo et l’essentiel de l’offre */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
            <div>
              <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Coaching
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                Un coach qui connaît votre corps,{" "}
                <span className="text-primary">pas seulement</span> vos chronos
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Kinésithérapeute, éducateur en triathlon breveté par l’Adeps et athlète
                confirmé, je prépare vos objectifs en triathlon, course à pied et trail avec
                des plans sur mesure et un suivi humain.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#offre"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Découvrir l’offre
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  Parlez-moi de votre objectif
                </a>
              </div>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-md shadow-card sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src={coachEchauffement.url}
                alt="Bastien Vandermunter s’échauffe au bord du bassin avant une séance de natation"
                className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
                fetchPriority="high"
              />
            </figure>
          </div>

          <ul
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-4"
            aria-label="L’essentiel de l’offre"
          >
            {KEY_FACTS.map((fact) => (
              <li
                key={fact.label}
                className={fact.highlight ? "bg-foreground p-5 sm:p-6" : "bg-card p-5 sm:p-6"}
              >
                <p
                  className={`text-left font-display text-2xl font-bold sm:text-3xl ${
                    fact.highlight ? "text-background" : "text-foreground"
                  }`}
                >
                  {fact.value}
                  {fact.unit && (
                    <span
                      className={`ml-1 font-sans text-base font-medium ${
                        fact.highlight ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {fact.unit}
                    </span>
                  )}
                </p>
                <p
                  className={`mt-1.5 text-left text-sm leading-snug ${
                    fact.highlight ? "font-semibold text-primary" : "text-muted-foreground"
                  }`}
                >
                  {fact.label}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Philosophie : la performance dans la durée */}
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
              <p className="mt-5 text-left text-lg font-semibold leading-relaxed text-primary">
                Construire la performance. Préserver le corps. Durer.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                J’ai évolué au niveau européen en triathlon et je suis monté à plusieurs
                reprises sur les podiums, en triathlon comme en trail. J’en ai tiré une
                conviction : la progression ne se construit pas dans l’urgence, mais dans la
                continuité. Un objectif ambitieux mérite une stratégie à sa hauteur.
              </p>

              <ol className="mt-8">
                {PILLARS.map((pillar) => (
                  <li
                    key={pillar.number}
                    className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-border py-5"
                  >
                    <span className="pt-1 font-display text-sm font-semibold text-primary">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-muted-foreground">{pillar.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <blockquote className="mt-4 border-l-2 border-primary pl-5">
                <p className="text-left font-display text-xl font-semibold leading-snug text-foreground">
                  Chez KIBACO, nous ne cherchons pas simplement à vous faire aller plus vite.
                  Nous construisons les conditions pour que vous puissiez aller plus loin.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Formule unique : prix et contenu côte à côte */}
        <section id="offre" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
          <div className="mb-6 flex items-center gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Une seule offre, la même attention pour chacun
            </h2>
            <div className="hidden h-px flex-1 bg-border sm:block" />
          </div>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Quels que soient votre niveau, votre expérience ou vos objectifs : pas de niveaux
            de service ni d’options supplémentaires. Chacun bénéficie du même engagement et
            d’un accompagnement entièrement personnalisé.
          </p>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
            {/* Carte tarif */}
            <div className="rounded-md border-2 border-primary bg-card p-7 shadow-warm sm:p-9 lg:sticky lg:top-24">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Formule unique
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                {offer.name}
              </h3>
              <p className="mt-6 text-left">
                <span className="font-display text-6xl font-bold leading-none text-foreground">
                  {offer.monthlyPrice} €
                </span>
                <span className="ml-2 text-lg text-muted-foreground">/mois</span>
              </p>
              <dl className="mt-7 divide-y divide-border border-y border-border">
                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-sm text-muted-foreground">Paiement trimestriel</dt>
                  <dd className="text-right font-semibold text-primary">
                    {offer.quarterlyPrice} €/trimestre
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-sm text-muted-foreground">Engagement minimum</dt>
                  <dd className="text-right font-semibold text-foreground">
                    {offer.commitmentMonths} mois
                  </dd>
                </div>
              </dl>
              <a
                href={LINKS.tallyForm}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Commencer mon accompagnement
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Le formulaire s’ouvre dans un nouvel onglet.
              </p>
            </div>

            {/* Contenu de l’offre, regroupé par thème */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                Ce que comprend votre accompagnement
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{offer.summary}</p>

              <div className="mt-6 space-y-4">
                {COACHING_FEATURE_GROUPS.map((group, index) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={group.id}
                      className={`rounded-md border border-border p-6 ${
                        index % 2 === 1 ? "bg-secondary" : "bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h4 className="font-display text-lg font-semibold text-foreground">
                          {group.title}
                        </h4>
                      </div>
                      <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <li key={item.id} className="flex items-start gap-2.5">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span className="text-[15px] leading-snug text-foreground">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 1 mois / 3 mois */}
          <div className="mt-10 grid overflow-hidden rounded-md border border-border sm:grid-cols-2">
            <div className="bg-card p-7 sm:p-8">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                1 mois
              </span>
              <p className="mt-2 text-left font-display text-2xl font-semibold leading-snug text-foreground">
                En un mois, on se met en action.
              </p>
            </div>
            <div className="border-t border-border bg-secondary p-7 sm:border-l sm:border-t-0 sm:p-8">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {offer.commitmentMonths} mois · engagement minimum
              </span>
              <p className="mt-2 text-left font-display text-2xl font-semibold leading-snug text-primary">
                En 3 mois, on construit sa progression !
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
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
