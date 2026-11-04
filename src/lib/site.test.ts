/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import {
  COACHING_FEATURE_GROUPS,
  COACHING_FEATURES,
  COACHING_PAYMENT_NOTE,
  COACHING_POSITIONING,
  COACHING_PRICE_NOTE,
  SITE,
} from "./site";

const coachingPage = () => Bun.file(new URL("../routes/coaching.tsx", import.meta.url)).text();

describe("Formule unique de coaching Kibaco", () => {
  test("le tarif mensuel est de 110 euros", () => {
    expect(SITE.coachingOffer.monthlyPrice).toBe(110);
  });

  test("le paiement trimestriel est de 330 euros", () => {
    expect(SITE.coachingOffer.quarterlyPrice).toBe(330);
    expect(SITE.coachingOffer.quarterlyPrice).toBe(SITE.coachingOffer.monthlyPrice * 3);
  });

  test("l’engagement reste de trois mois", () => {
    expect(SITE.coachingOffer.commitmentMonths).toBe(3);
  });

  test("une seule offre remplace la liste des anciens abonnements", () => {
    expect(SITE).not.toHaveProperty("coachingOffers");
    expect(SITE.coachingOffer).toBeDefined();
  });

  test("le contact avec le coach passe par WhatsApp, 7j/7", () => {
    const contact = COACHING_FEATURES.find((feature) => feature.id === "coach-contact");
    expect(contact?.label).toContain("WhatsApp");
    expect(contact?.label).toContain("7j/7");
  });

  test("l’analyse des séances se fait semaine après semaine, sans mention de WhatsApp", () => {
    const analysis = COACHING_FEATURES.find((feature) => feature.id === "weekly-analysis");
    expect(analysis?.label).toContain("semaine après semaine");
    expect(analysis?.label).not.toContain("WhatsApp");
  });

  test("le trimestre de 330 € se règle en une seule fois", () => {
    expect(COACHING_PAYMENT_NOTE).toContain("330 €");
    expect(COACHING_PAYMENT_NOTE).toContain("en une seule fois");
    expect(COACHING_PAYMENT_NOTE).toContain("trois mois");
  });

  test("la formule unique ne réserve aucune prestation à une formule supérieure", () => {
    const text = COACHING_POSITIONING.join(" ");
    expect(text).toContain("formule unique");
    expect(text).toContain("sans différents niveaux de suivi");
  });

  test("les séances collectives sont ponctuelles et incluses dans l’abonnement KIBACO", () => {
    const sessions = COACHING_FEATURES.find((feature) => feature.id === "group-sessions");
    expect(sessions?.label).toContain("ponctuellement");
    expect(sessions?.label).toContain("abonnement KIBACO");
  });

  test("aucune mention d’abonnement mensuel sur la page Coaching", async () => {
    const all = (await coachingPage()) + COACHING_FEATURES.map((f) => f.label).join(" ");
    expect(all).not.toContain("abonnement mensuel");
  });

  test("les tests de zones s’adaptent à chaque discipline, sans se limiter à la vitesse critique", () => {
    const zones = COACHING_FEATURES.find((feature) => feature.id === "intensity-zones");
    for (const discipline of ["triathlon", "course à pied", "trail", "natation", "cyclisme"]) {
      expect(zones?.label).toContain(discipline);
    }
  });

  test("le suivi est quotidien, sans promettre une modification systématique chaque jour", () => {
    const daily = COACHING_FEATURES.find((feature) => feature.id === "daily-adjustments");
    expect(daily?.label).toContain("suivi quotidien");
    expect(daily?.label).not.toContain("journalier");
  });

  test("aucun texte ne garantit une absence totale de blessure", async () => {
    const all = (await coachingPage()) + COACHING_FEATURES.map((f) => f.label).join(" ");
    for (const claim of ["la blessure est prévenue", "zéro blessure", "sans aucune blessure"]) {
      expect(all).not.toContain(claim);
    }
    expect(all).toContain("limiter les risques de blessure");
  });

  test("la carte tarif ne mentionne plus « Options et suppléments »", async () => {
    const page = await coachingPage();
    expect(page).not.toContain("Options et suppléments");
    expect(page).toContain("Engagement minimum");
  });

  test("le prix en avant est trimestriel, avec l’équivalence mensuelle en petit", () => {
    expect(SITE.coachingOffer.quarterlyPrice).toBe(330);
    expect(COACHING_PRICE_NOTE).toContain("110 €/mois");
    expect(COACHING_PRICE_NOTE.toLowerCase()).toContain("correspond");
  });

  test("la prévention des blessures s’appuie sur l’expérience de kinésithérapeute", () => {
    const prevention = COACHING_FEATURES.find((feature) => feature.id === "injury-prevention");
    expect(prevention?.label).toContain("Prévention des blessures");
    expect(prevention?.label).toContain("kinésithérapeute");
  });

  test("les douze avantages apparaissent chacun une seule fois dans les groupes", () => {
    const ids = COACHING_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.id));
    expect(ids.length).toBe(12);
    expect(new Set(ids).size).toBe(12);
  });

  for (const id of [
    "personalized-plan",
    "life-adjustments",
    "training-cycles",
    "daily-adjustments",
    "ido",
    "coach-contact",
    "weekly-analysis",
    "clinical-alert",
    "intensity-zones",
    "practical-advice",
    "group-sessions",
  ]) {
    test(`l’avantage ${id} de l’ancienne offre Personnalisé est conservé`, () => {
      expect(COACHING_FEATURES.some((feature) => feature.id === id)).toBe(true);
    });
  }
});
