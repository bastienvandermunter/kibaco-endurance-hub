/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import {
  COACHING_DAILY_LIFE,
  COACHING_FEATURE_GROUPS,
  COACHING_FEATURES,
  COACHING_PRICE_NOTE,
  SITE,
} from "./site";

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

  test("l’accompagnement part du quotidien, difficile à organiser en triathlon", () => {
    expect(COACHING_DAILY_LIFE).toContain("quotidien");
    expect(COACHING_DAILY_LIFE.toLowerCase()).toContain("accompagnement");
  });

  test("la carte tarif ne mentionne plus « Options et suppléments »", async () => {
    const page = await Bun.file(
      new URL("../routes/coaching.tsx", import.meta.url),
    ).text();
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

  test("l’expérience de kiné pour prévenir les blessures est dans le résumé de l’offre", () => {
    expect(SITE.coachingOffer.summary).toContain("kinésithérapeute");
    expect(SITE.coachingOffer.summary).toContain("la blessure est prévenue");
  });

  test("les douze avantages apparaissent chacun une seule fois dans les groupes", () => {
    const ids = COACHING_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.id));
    expect(ids.length).toBe(12);
    expect(new Set(ids).size).toBe(12);
  });

  for (const id of [
    "personalized-plan", "life-adjustments", "training-cycles", "daily-adjustments",
    "ido", "coach-contact", "weekly-analysis", "clinical-alert", "critical-speed", "practical-advice", "group-sessions",
  ]) {
    test(`l’avantage ${id} de l’ancienne offre Personnalisé est conservé`, () => {
      expect(COACHING_FEATURES.some((feature) => feature.id === id)).toBe(true);
    });
  }
});