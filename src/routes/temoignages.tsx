import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Star, ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero } from "@/components/site-layout";
import { getGoogleReviews } from "@/lib/google-reviews.functions";

export const Route = createFileRoute("/temoignages")({
  component: TemoignagesPage,
  head: () => ({
    meta: [
      { title: "Ils s’entraînent avec moi — Kibaco" },
      {
        name: "description",
        content:
          "Découvrez les avis Google laissés par les personnes accompagnées par Kibaco et Bastien Vandermunter.",
      },
      { property: "og:title", content: "Ils s’entraînent avec moi — Kibaco" },
      {
        property: "og:description",
        content:
          "Les avis Google des personnes accompagnées par Kibaco et Bastien Vandermunter.",
      },
      { property: "og:url", content: "/temoignages" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/temoignages" }],
  }),
});

function TemoignagesPage() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data, isPending } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 15 * 60_000,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Ils s’entraînent avec moi"
          title="Vos avis sur Google"
          intro="Retrouvez ici les témoignages publiés sur ma fiche Google."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          {isPending ? (
            <p className="text-center text-muted-foreground">Chargement des avis…</p>
          ) : data?.reviews.length ? (
            <div className="grid gap-6 lg:grid-cols-3">
            {data.reviews.map((review) => (
              <figure
                key={review.id}
                className="flex flex-col rounded-md border border-border bg-card p-7"
              >
                <div className="flex gap-1 text-primary" aria-label={`${review.rating} étoiles sur 5`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">
                  « {review.text} »
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Avis Google{review.date ? ` · ${new Intl.DateTimeFormat("fr-BE", { year: "numeric", month: "long", timeZone: "UTC" }).format(new Date(review.date))}` : ""}
                  </p>
                </figcaption>
              </figure>
            ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              {data?.status === "missing"
                ? "La fiche Google de Kibaco n’est pas encore accessible depuis le compte connecté. Les avis apparaîtront ici dès qu’elle le sera."
                : data?.status === "ready"
                  ? "Aucun avis publié pour le moment."
                  : "Les avis Google ne sont pas disponibles pour le moment."}
            </p>
          )}

          <div className="mt-14 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Et si le prochain témoignage était le vôtre ?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/coaching"
                 className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Se faire coacher
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kinesitherapie"
                 className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                 Découvrir la kinésithérapie · bientôt
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
