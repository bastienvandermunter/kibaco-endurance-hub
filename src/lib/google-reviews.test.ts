import { describe, expect, it } from "vitest";
import { resolveGoogleBusinessApiKey } from "./google-reviews.functions";

// Règle métier : la lecture des avis doit fonctionner à l'identique dans Lovable
// (clé GOOGLE_BUSINESS_PROFILE_API_KEY_1, créée lors de la reconnexion du compte)
// et sur Vercel (ancien nom GOOGLE_BUSINESS_PROFILE_API_KEY encore configuré).
describe("resolveGoogleBusinessApiKey", () => {
  it("préfère la clé de la connexion reconnectée quand les deux existent", () => {
    expect(
      resolveGoogleBusinessApiKey({
        GOOGLE_BUSINESS_PROFILE_API_KEY_1: "cle-reconnectee",
        GOOGLE_BUSINESS_PROFILE_API_KEY: "cle-initiale",
      }),
    ).toBe("cle-reconnectee");
  });

  it("retombe sur l'ancien nom, celui encore configuré sur Vercel", () => {
    expect(
      resolveGoogleBusinessApiKey({ GOOGLE_BUSINESS_PROFILE_API_KEY: "cle-initiale" }),
    ).toBe("cle-initiale");
  });

  it("renvoie undefined quand aucune clé n'est configurée", () => {
    expect(resolveGoogleBusinessApiKey({})).toBeUndefined();
  });
});
