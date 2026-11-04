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

  test("le contact avec le coach passe par WhatsApp, 7j/7", () => {
    const contact = COACHING_FEATURES.find((feature) => feature.id === "coach-contact");
    expect(contact?.label).toContain("WhatsApp");
    expect(contact?.label).toContain("7j/7");
  });

  test("l’analyse des séances semaine après semaine sur WhatsApp est incluse", () => {
    const analysis = COACHING_FEATURES.find((feature) => feature.id === "weekly-analysis");
    expect(analysis?.label).toContain("semaine après semaine");
    expect(analysis?.label).toContain("WhatsApp");
    expect(SITE.coachingOffer.text).toContain("analysées semaine après semaine sur WhatsApp");
  });

  test("l’offre unique mentionne le contact WhatsApp 7j/7", () => {
    expect(SITE.coachingOffer.text).toContain("WhatsApp 7j/7");
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
    "critical-speed",
    "practical-advice",
    "group-sessions",
  ]) {
    test(`l’avantage ${id} de l’ancienne offre Personnalisé est conservé`, () => {
      expect(COACHING_FEATURES.some((feature) => feature.id === id)).toBe(true);
    });
  }
});
