import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin, Landmark, ArrowRight } from "lucide-react";
import { SITE, NAV_ITEMS } from "@/lib/site";
import logoAsset from "@/assets/kibaco-logo.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="Logo Kibaco" className="h-12 w-12 rounded-full object-contain" />
          <span className="font-display text-xl font-bold text-foreground">
            KIBACO
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                   "rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                  (active
                     ? "bg-secondary text-foreground"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={SITE.phoneHref}
          className="hidden items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-card transition-opacity hover:opacity-90 lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {SITE.phone}
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-4 pb-5 pt-2 lg:hidden" aria-label="Navigation mobile">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={
                     "rounded-md px-4 py-3 text-base font-medium " +
                     (active ? "bg-secondary text-foreground" : "text-foreground/85 hover:bg-secondary")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SITE.phoneHref}
               className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-base font-semibold text-card"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}

export function ArcTop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray="420 240" />
      <circle cx="160" cy="55" r="12" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
               <img src={logoAsset.url} alt="Logo Kibaco" className="h-14 w-14 rounded-full bg-card p-2 object-contain" />
               <span className="font-display text-xl font-bold">KIBACO</span>
            </div>
            <p className="mt-3 text-sm font-medium text-card/90">{SITE.owner}</p>
            <p className="text-sm text-card/70">{SITE.role}</p>
            <p className="mt-4 font-hand text-xl leading-snug text-primary">{SITE.tagline}</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                   <Link to={item.to} className="text-sm text-card/85 transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Prendre contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                 <a href={SITE.phoneHref} className="inline-flex items-center gap-2.5 text-card/85 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                 <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 text-card/85 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  {SITE.email}
                </a>
              </li>
               <li className="flex items-start gap-2.5 text-card/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-card/85">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {SITE.iban}
                  <br />
                  <span className="text-card/60"></span>
                </span>
              </li>
            </ul>
            <a
              href={`mailto:${SITE.email}`}
               className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Prendre contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

         <div className="mt-12 border-t border-card/15 pt-6 text-center text-xs text-card/60">
          © {new Date().getFullYear()} Kibaco — {SITE.owner}. Kinésithérapie & coaching en sport d’endurance à Braine-l’Alleud.
        </div>
      </div>
    </footer>
  );
}
