import { describe, expect, it } from "bun:test";
import { GOOGLE_REVIEWS_SNAPSHOT, pickReviews } from "./google-reviews-snapshot";

describe("pickReviews", () => {
  it("affiche la copie des 3 vrais avis quand l'accès Google manque", () => {
    const result = pickReviews({ status: "missing", reviews: [] });
    expect(result.source).toBe("snapshot");
    expect(result.reviews).toHaveLength(3);
  });
  it("affiche la copie quand la lecture échoue", () => {
    expect(pickReviews({ status: "error", reviews: [] }).reviews).toBe(GOOGLE_REVIEWS_SNAPSHOT);
  });
  it("garde les avis automatiques quand la lecture réussit", () => {
    const live = [{ id: "x", text: "t", author: "a", rating: 5 }];
    expect(pickReviews({ status: "ready", reviews: live })).toEqual({
      reviews: live,
      source: "live",
    });
  });
});
