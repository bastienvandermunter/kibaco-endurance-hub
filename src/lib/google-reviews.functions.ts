import { createServerFn } from "@tanstack/react-start";

type GoogleReview = {
  reviewId?: string;
  comment?: string;
  starRating?: string;
  createTime?: string;
  reviewer?: { displayName?: string; isAnonymous?: boolean };
};

type Review = { id: string; text: string; author: string; rating: number; date?: string };
type ReviewResult = { reviews: Review[]; status: "ready" | "missing" | "error" };

let cached: { value: ReviewResult; until: number } | undefined;

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(async (): Promise<ReviewResult> => {
  if (cached && Date.now() < cached.until) return cached.value;

  const apiKey = process.env["GOOGLE_BUSINESS_PROFILE_API_KEY"];
  const lovableKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey || !lovableKey) return { reviews: [], status: "missing" };

  const base = "https://connector-gateway.lovable.dev/google_business_profile";
  const headers = { Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": apiKey };

  async function read<T>(path: string): Promise<T> {
    const response = await fetch(`${base}${path}`, { headers });
    if (!response.ok) {
      const body = await response.text();
      console.error(`Google Business Profile request failed [${response.status}]: ${body}`);
      throw new Error(`Google Business Profile request failed [${response.status}]: ${body}`);
    }
    return response.json() as Promise<T>;
  }

  try {
    const accountNames: string[] = [];
    let accountPage = "";
    do {
      const accounts = await read<{ accounts?: { name: string }[]; nextPageToken?: string }>(
        `/account_management/v1/accounts?pageSize=100${accountPage ? `&pageToken=${encodeURIComponent(accountPage)}` : ""}`,
      );
      accountNames.push(...(accounts.accounts ?? []).map((account) => account.name));
      accountPage = accounts.nextPageToken ?? "";
    } while (accountPage);

    let selected: { account: string; location: string } | undefined;
    for (const account of accountNames) {
      let locationPage = "";
      do {
        const locations = await read<{
          locations?: { name: string; title?: string }[];
          nextPageToken?: string;
        }>(
          `/business_information/v1/${account}/locations?readMask=name,title&pageSize=100${locationPage ? `&pageToken=${encodeURIComponent(locationPage)}` : ""}`,
        );
        const match = locations.locations?.find((location) => location.title?.trim().toLowerCase() === "kibaco");
        if (match) {
          selected = { account, location: match.name.split("/").pop() ?? "" };
          break;
        }
        locationPage = locations.nextPageToken ?? "";
      } while (locationPage);
      if (selected) break;
    }

    if (!selected?.location) {
      const value: ReviewResult = { reviews: [], status: "missing" };
      cached = { value, until: Date.now() + 15 * 60_000 };
      return value;
    }

    const reviews: Review[] = [];
    let page = "";
    do {
      const data = await read<{ reviews?: GoogleReview[]; nextPageToken?: string }>(
        `/my_business/v4/${selected.account}/locations/${selected.location}/reviews?pageSize=50${page ? `&pageToken=${encodeURIComponent(page)}` : ""}`,
      );
      for (const review of data.reviews ?? []) {
        if (!review.comment?.trim()) continue;
        const rating = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[review.starRating as "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE"];
        reviews.push({
          id: review.reviewId ?? `${review.createTime}-${reviews.length}`,
          text: review.comment,
          author: review.reviewer?.isAnonymous ? "Client Google" : review.reviewer?.displayName || "Client Google",
          rating: rating ?? 0,
          date: review.createTime,
        });
      }
      page = data.nextPageToken ?? "";
    } while (page);

    const value: ReviewResult = { reviews, status: "ready" };
    cached = { value, until: Date.now() + 15 * 60_000 };
    return value;
  } catch (error) {
    console.error("Unable to load Google reviews:", error);
    return { reviews: [], status: "error" };
  }
});