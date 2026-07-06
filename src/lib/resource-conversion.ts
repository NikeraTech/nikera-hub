import type { Calculator } from "./calculators";
import type { Resource, ResourceTopicSlug } from "./resource-types";

type ResourceConversionCopy = {
  actionNote: string;
  inlineHeading: string;
  inlineDescription: string;
  endHeading: string;
  endDescription: string;
  asideDescription: string;
  trustPoints: [string, string, string];
};

export function getResourceConversionCopy(
  resource: Resource,
  relatedCalculator?: Calculator,
): ResourceConversionCopy {
  const topicSlug: ResourceTopicSlug | undefined = resource.topicSlug;

  if (topicSlug === "first-time-buyers") {
    return {
      actionNote:
        "Use the tools to set a realistic budget, then request advice if you want help checking what may actually be workable before you offer on a property.",
      inlineHeading: "Check the numbers before you start viewing too far above budget",
      inlineDescription: relatedCalculator
        ? `A practical next step is the ${relatedCalculator.shortTitle.toLowerCase()}. It gives you an illustrative starting point before you rely on headline borrowing assumptions.`
        : "If you want a clearer view of what may be workable before you proceed, request a no-obligation review through Nikera Hub.",
      endHeading: "Move from general guidance to a realistic buying plan",
      endDescription:
        "First-time buyer decisions usually work best when you combine practical guidance, an illustrative calculator result and professional input where your situation needs more context.",
      asideDescription:
        "If you want a clearer view of affordability, deposit expectations or next steps before you buy, request a no-obligation review.",
      trustPoints: ["No obligation", "No spam", "Plain-English help"],
    };
  }

  if (topicSlug === "remortgaging") {
    return {
      actionNote:
        "Remortgaging decisions usually depend on total cost, timing and lender fit rather than the lowest headline rate alone.",
      inlineHeading: "Compare the saving before assuming a switch is worth it",
      inlineDescription: relatedCalculator
        ? `Use the ${relatedCalculator.shortTitle.toLowerCase()} to test whether the numbers still look worthwhile once you compare them properly.`
        : "If you want help judging whether a review or switch is genuinely worthwhile, request a no-obligation review through Nikera Hub.",
      endHeading: "Check the savings, then decide whether advice would add value",
      endDescription:
        "A remortgage usually deserves a more specific review once the broad numbers look promising, especially where fees, timing or property changes may affect the outcome.",
      asideDescription:
        "If you want help comparing realistic remortgage routes rather than headline rates, request a no-obligation review.",
      trustPoints: ["No obligation", "No spam", "UK-focused guidance"],
    };
  }

  if (topicSlug === "protection") {
    return {
      actionNote:
        "Protection decisions are personal. Use the tools to estimate a starting point, then request advice if you want help deciding what type of cover may fit the real need.",
      inlineHeading: "Estimate the gap before choosing cover on price alone",
      inlineDescription: relatedCalculator
        ? `A useful next step is the ${relatedCalculator.shortTitle.toLowerCase()}, so you can frame the protection gap before discussing recommendations.`
        : "If you want help comparing protection options around your own family and income needs, request a no-obligation review through Nikera Hub.",
      endHeading: "Understand the risk first, then decide whether advice is needed",
      endDescription:
        "The most useful protection decisions usually come from matching cover to the financial problem you want to solve, not from choosing on premium alone.",
      asideDescription:
        "If you want help understanding the difference between cover types or what level of protection may be sensible, request a no-obligation review.",
      trustPoints: ["No obligation", "No spam", "Clearer protection guidance"],
    };
  }

  if (topicSlug === "visa-borrowing" || topicSlug === "expats" || topicSlug === "cross-border-income") {
    return {
      actionNote:
        "Specialist cases often need more than a broad calculator result. Use the tools for planning, then check lender fit before making major commitments.",
      inlineHeading: "Test the plan first, then check whether the case is likely to fit lenders",
      inlineDescription: relatedCalculator
        ? `The ${relatedCalculator.shortTitle.toLowerCase()} can help frame the plan, but specialist cases often need a more specific review of policy fit and documents.`
        : "If your case involves visa status, overseas income or relocation timing, request a no-obligation review before relying on broad market assumptions.",
      endHeading: "Once the outline works, get the specialist detail checked",
      endDescription:
        "Visa and expat cases usually benefit from a more specific review once the broad numbers look workable, because lender appetite can differ materially.",
      asideDescription:
        "If your case involves visas, overseas income, relocation or cross-border documents, request a no-obligation review before assuming the broad market fits.",
      trustPoints: ["No obligation", "No spam", "Specialist-case aware"],
    };
  }

  if (topicSlug === "self-employed") {
    return {
      actionNote:
        "Self-employed borrowing usually depends on evidence quality and lender interpretation as much as the raw headline income.",
      inlineHeading: "Test affordability, then check whether the evidence supports it",
      inlineDescription: relatedCalculator
        ? `Use the ${relatedCalculator.shortTitle.toLowerCase()} for an illustrative range, then sense-check whether your documents and income structure support that outcome.`
        : "If you want help judging how lenders may view your business income and documents, request a no-obligation review through Nikera Hub.",
      endHeading: "Use the numbers as a starting point, not the whole answer",
      endDescription:
        "Self-employed cases often become clearer once affordability, documents and lender fit are considered together rather than as separate questions.",
      asideDescription:
        "If you want help understanding how lenders may view your accounts, tax records or income structure, request a no-obligation review.",
      trustPoints: ["No obligation", "No spam", "Document-aware guidance"],
    };
  }

  if (topicSlug === "family-deposit-support") {
    return {
      actionNote:
        "Family-supported deposit plans often work best when the amount, source and paper trail are checked early rather than late in the purchase process.",
      inlineHeading: "Estimate the deposit, then make the evidence trail workable",
      inlineDescription: relatedCalculator
        ? `The ${relatedCalculator.shortTitle.toLowerCase()} can help frame the amount, but the deposit route still needs to be documented cleanly if family support is involved.`
        : "If your deposit depends on family support or overseas transfers, request a no-obligation review before the purchase becomes time-sensitive.",
      endHeading: "Make the deposit plan credible before the transaction gets urgent",
      endDescription:
        "Deposit support can strengthen a case, but only when the amount and source-of-funds route are clear enough for the professionals involved to rely on them.",
      asideDescription:
        "If your deposit includes family support, gifted funds or overseas transfers, request a no-obligation review before the process speeds up.",
      trustPoints: ["No obligation", "No spam", "Source-of-funds aware"],
    };
  }

  return {
    actionNote:
      "General information only. Use the tools for illustration and request advice if you want help with your own circumstances.",
    inlineHeading: relatedCalculator
      ? `Turn this ${resource.kind === "guide" ? "guide" : "article"} into a practical next step`
      : `Need help applying this ${resource.kind === "guide" ? "guide" : "article"} to your situation?`,
    inlineDescription: relatedCalculator
      ? `Start with the ${relatedCalculator.shortTitle.toLowerCase()} for an illustrative number, then request professional advice if you want help interpreting what it may mean for you.`
      : "If your circumstances need more than general information, you can request a no-obligation review from a trusted professional through Nikera Hub.",
    endHeading: "Use the tools, then request tailored help if you need it",
    endDescription:
      "The strongest path through Hub is usually simple: understand the topic, test the numbers, then request professional guidance if your case needs a more specific view.",
    asideDescription:
      "Use Hub for clarity, then request a no-obligation review if you want help applying this to your own circumstances.",
    trustPoints: ["No obligation", "No spam", "UK-focused guidance"],
  };
}
