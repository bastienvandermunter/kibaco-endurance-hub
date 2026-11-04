/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { COACHING_FEATURES, SITE } from "./site";

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

  for (const id of [
    "personalized-plan", "life-adjustments", "training-cycles", "daily-adjustments",
    "ido", "coach-contact", "clinical-alert", "critical-speed", "practical-advice", "group-sessions",
  ]) {
    test(`l’avantage ${id} de l’ancienne offre Personnalisé est conservé`, () => {
      expect(COACHING_FEATURES.some((feature) => feature.id === id)).toBe(true);
    });
  }
});