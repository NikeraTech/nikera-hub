export const adviceTopics = [
  "First Time Buyer",
  "Home Mover",
  "Remortgage",
  "Buy To Let",
  "Mortgage Affordability",
  "Life Insurance",
  "Income Protection",
  "Critical Illness Cover",
  "General Mortgage Advice",
  "General Protection Advice",
] as const;

export const contactMethods = ["Phone Call", "WhatsApp", "Email", "No Preference"] as const;
export const contactTimes = ["Morning", "Afternoon", "Evening", "Anytime"] as const;

export type AdviceTopic = (typeof adviceTopics)[number];
export type ContactMethod = (typeof contactMethods)[number];
export type ContactTime = (typeof contactTimes)[number];

export function getSuggestedAdviceTopic(input: {
  slug?: string;
  title?: string;
  category?: string;
  kind?: "calculator" | "guide" | "article" | "page";
}): AdviceTopic {
  const haystack = `${input.slug ?? ""} ${input.title ?? ""} ${input.category ?? ""}`.toLowerCase();

  if (haystack.includes("first-time")) return "First Time Buyer";
  if (haystack.includes("home mover")) return "Home Mover";
  if (haystack.includes("remortgage")) return "Remortgage";
  if (haystack.includes("buy-to-let") || haystack.includes("buy to let") || haystack.includes("rental"))
    return "Buy To Let";
  if (haystack.includes("affordability")) return "Mortgage Affordability";
  if (haystack.includes("life insurance") || haystack.includes("life cover")) return "Life Insurance";
  if (haystack.includes("income protection")) return "Income Protection";
  if (haystack.includes("critical illness")) return "Critical Illness Cover";
  if (haystack.includes("protection")) return "General Protection Advice";

  return "General Mortgage Advice";
}
