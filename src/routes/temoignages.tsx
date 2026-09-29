import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/temoignages")({
  component: TemoignagesPage,
  head: () => ({
    meta: [
      { title: "Ils s’entraînent avec moi — Kibaco" },
      {
        name: "description",
        content:
          "Témoignages de sportifs accompagnés par Kibaco : rééducation, coaching triathlon, course à pied et trail. De la réhabilitation à la performance.",
      },
      { property: "og:title", content: "Ils s’entraînent avec moi — Kibaco" },
      {
        property: "og:description",
        content:
          "Marathoniennes, triathlètes et traileurs racontent leur accompagnement avec Bastien, de la blessure à l’objectif atteint.",
      },
      { property: "og:url", content: "/temoignages" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/temoignages" }],
  }),
});

const TESTIMONIALS = [
  {
    quote:
      "Après une tendinopathie d’Achille qui traînait depuis un an, Bastien m’a d’abord rééduquée, puis coachée pour mon premier marathon. Résultat : 3 h 52, zéro douleur, et des entraînements que j’attendais avec impatience.",
    name: "Julie R.",
    detail: "Marathon de Rotterdam — course à pied",
  },
  {
    quote:
      "Objectif : terminer mon premier Half Ironman. Le plan était exigeant mais toujours adapté à mon travail et à ma vie de famille. Et quand mon genou a commencé à parler, Bastien a ajusté avant que ça devienne une blessure. J’ai franchi la ligne avec 12 minutes d’avance sur mon objectif.",
    name: "Thomas D.",
    detail: "Half Ironman — triathlon",
  },
  {
    quote:
      "Ce qui change avec Bastien, c’est le double regard : kiné et coach. Mes douleurs aux descentes ont disparu, mon renforcement est devenu un réflexe, et j’ai bouclé mon premier trail de 42 km sans aucune alerte. On ne veut plus s’entraîner sans lui.",
    name: "Camille V.",
    detail: "Trail 42 km — Ardennes",
  },
];

function TemoignagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Ils s’entraînent avec moi"
          title="Des sportifs qui ont franchi la ligne"
          intro="Rééducation réussie, premier marathon, premier triathlon, premier trail : voici ce que vivent ceux qui m’ont fait confiance."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-4xl border border-border bg-card p-7 shadow-card"
              >
                <div className="flex gap-1 text-primary" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Et si le prochain témoignage était le vôtre ?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/coaching"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-opacity hover:opacity-90"
              >
                Se faire coacher
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kinesitherapie"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Prendre un rendez-vous kiné
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
