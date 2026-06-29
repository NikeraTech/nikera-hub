export type ResourceSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Resource = {
  slug: string;
  kind: "guide" | "article";
  category: string;
  title: string;
  description: string;
  readTime: string;
  published: string;
  updated: string;
  sections: ResourceSection[];
  relatedCalculatorSlug?: string;
  relatedCalculatorEyebrow?: string;
  relatedCalculatorTitle?: string;
  relatedCalculatorCta?: string;
};

export const guides: Resource[] = [
  {
    slug: "first-time-buyer-guide",
    kind: "guide",
    category: "First-time buyers",
    title: "First Time Buyer Guide",
    description: "Understand deposits, agreements in principle, surveys and completion.",
    readTime: "9 min read",
    published: "2026-06-20",
    updated: "2026-06-28",
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK BORROWING",
    relatedCalculatorTitle: "See what you may be able to borrow",
    relatedCalculatorCta: "Check borrowing",
    sections: [
      {
        heading: "Start with a realistic budget",
        paragraphs: [
          "Before viewing homes, compare your income, regular commitments and likely ownership costs. A lender’s maximum figure is not the same as a comfortable monthly budget.",
        ],
        bullets: [
          "Build an emergency buffer alongside your deposit",
          "Allow for legal fees, surveys, moving costs and insurance",
          "Check your credit reports before applying",
        ],
      },
      {
        heading: "Deposit and agreement in principle",
        paragraphs: [
          "A larger deposit normally reduces the loan-to-value ratio and may widen the choice of mortgages. An agreement in principle gives an initial indication of borrowing, but it is not a mortgage offer or guarantee.",
        ],
      },
      {
        heading: "From offer to completion",
        paragraphs: [
          "Once an offer is accepted, your solicitor handles the legal work while the lender values the property. An independent survey can reveal issues a basic lender valuation may not cover.",
          "Exchange makes the purchase legally binding in the usual England and Wales process. Completion is when funds transfer and you collect the keys.",
        ],
      },
    ],
  },
  {
    slug: "remortgaging-explained",
    kind: "guide",
    category: "Remortgaging",
    title: "Remortgaging Explained",
    description: "Learn when to review your deal, compare costs and prepare to switch.",
    readTime: "7 min read",
    published: "2026-06-18",
    updated: "2026-06-28",
    relatedCalculatorSlug: "remortgage-savings",
    relatedCalculatorEyebrow: "COMPARE SAVINGS",
    relatedCalculatorTitle: "See whether remortgaging could save you money",
    relatedCalculatorCta: "Compare remortgage savings",
    sections: [
      {
        heading: "When to review your mortgage",
        paragraphs: [
          "Start reviewing several months before a fixed or discounted deal ends. This creates time to compare a new deal with your current lender’s product-transfer options.",
        ],
      },
      {
        heading: "Compare the total cost",
        paragraphs: [
          "A lower rate is not automatically cheaper. Product fees, valuation costs, legal charges and early repayment charges can outweigh a modest monthly saving.",
        ],
        bullets: [
          "Compare costs over the period you expect to keep the deal",
          "Check whether fees are paid upfront or added to the loan",
          "Consider how your loan-to-value may have changed",
        ],
      },
      {
        heading: "Prepare to apply",
        paragraphs: [
          "Lenders typically reassess income, expenditure, credit history and the property. Gather recent evidence of income and bank statements, and avoid assuming an existing mortgage guarantees acceptance elsewhere.",
        ],
      },
    ],
  },
  {
    slug: "life-insurance-explained",
    kind: "guide",
    category: "Protection",
    title: "Life Insurance Explained",
    description: "A plain-English introduction to cover types, terms and beneficiaries.",
    readTime: "8 min read",
    published: "2026-06-16",
    updated: "2026-06-28",
    relatedCalculatorSlug: "protection-needs",
    relatedCalculatorEyebrow: "ESTIMATE COVER",
    relatedCalculatorTitle: "See your life cover starting point",
    relatedCalculatorCta: "Estimate life cover",
    sections: [
      {
        heading: "What life insurance does",
        paragraphs: [
          "Life insurance can pay a lump sum if the insured person dies during the policy term. It may help dependants cover a mortgage, household bills or other financial needs.",
        ],
      },
      {
        heading: "Common cover structures",
        paragraphs: [
          "Level cover keeps the insured amount broadly fixed, while decreasing cover usually falls over time and is often aligned with a repayment mortgage. Joint policies commonly pay once and then end.",
        ],
        bullets: [
          "Choose a term that reflects the need you are protecting",
          "Check exclusions and the definition of terminal illness",
          "Keep beneficiary arrangements under review",
        ],
      },
      {
        heading: "Cover should fit your circumstances",
        paragraphs: [
          "The appropriate amount depends on debts, income needs, existing benefits and family circumstances. Policy definitions differ, so compare the cover and terms rather than price alone.",
        ],
      },
    ],
  },
  {
    slug: "income-protection-guide",
    kind: "guide",
    category: "Protection",
    title: "Income Protection Guide",
    description: "How income protection works and the decisions involved in choosing cover.",
    readTime: "6 min read",
    published: "2026-06-14",
    updated: "2026-06-28",
    relatedCalculatorSlug: "protection-needs",
    relatedCalculatorEyebrow: "ESTIMATE PROTECTION",
    relatedCalculatorTitle: "See your wider protection gap",
    relatedCalculatorCta: "Estimate protection gap",
    sections: [
      {
        heading: "Replacing part of your income",
        paragraphs: [
          "Income protection is designed to pay a regular benefit when illness or injury prevents you from working, subject to the policy definition and claim assessment.",
        ],
      },
      {
        heading: "The choices that affect cover",
        paragraphs: [
          "The deferred period determines how long you wait before payments begin. The benefit period, occupation definition and maximum benefit all materially affect what the policy can provide.",
        ],
        bullets: [
          "Match the deferred period to sick pay and savings",
          "Understand how your occupation is defined",
          "Check whether benefits can increase with inflation",
        ],
      },
      {
        heading: "Review rather than set and forget",
        paragraphs: [
          "Changes to earnings, employment benefits or occupation can affect whether the cover remains suitable. Tell the insurer about changes when the policy terms require it.",
        ],
      },
    ],
  },
  {
    slug: "self-employed-mortgage-guide",
    kind: "guide",
    category: "Mortgages",
    title: "Self-employed Mortgage Guide",
    description: "What lenders may assess and which documents can support an application.",
    readTime: "10 min read",
    published: "2026-06-12",
    updated: "2026-06-28",
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK AFFORDABILITY",
    relatedCalculatorTitle: "See your mortgage affordability range",
    relatedCalculatorCta: "Check affordability",
    sections: [
      {
        heading: "How lenders assess income",
        paragraphs: [
          "Self-employment does not prevent mortgage borrowing, but lenders differ in how they assess sole traders, partnerships and company directors. They may use profits, salary and dividends, or another measure supported by the accounts.",
        ],
      },
      {
        heading: "Evidence to prepare",
        paragraphs: [
          "Clear, consistent records reduce avoidable delays. Exact requirements vary by lender and complexity.",
        ],
        bullets: [
          "Finalised accounts and tax calculations",
          "Tax year overviews and business bank statements",
          "Details of existing commitments and deposit source",
        ],
      },
      {
        heading: "Plan before applying",
        paragraphs: [
          "Large changes in income or business structure may need explanation. Speak to an accountant before changing how income is drawn purely for a mortgage application, as tax and lending considerations are different.",
        ],
      },
    ],
  },
  {
    slug: "buying-your-first-home",
    kind: "guide",
    category: "Home buying",
    title: "Buying Your First Home",
    description: "A practical journey from building a deposit to collecting the keys.",
    readTime: "12 min read",
    published: "2026-06-10",
    updated: "2026-06-28",
    relatedCalculatorSlug: "deposit",
    relatedCalculatorEyebrow: "ESTIMATE DEPOSIT",
    relatedCalculatorTitle: "See the deposit you may need",
    relatedCalculatorCta: "Estimate deposit",
    sections: [
      {
        heading: "Build the foundations",
        paragraphs: [
          "Set a savings target that includes the deposit and purchase costs. Review your credit history, stabilise regular spending and keep evidence showing where the deposit came from.",
        ],
      },
      {
        heading: "Search with a clear brief",
        paragraphs: [
          "Separate essential requirements from preferences and investigate the local area as carefully as the property. Running costs, tenure and planned works can change affordability.",
        ],
        bullets: [
          "Ask what is included in the sale",
          "Check lease length and service charges where relevant",
          "Visit at different times if possible",
        ],
      },
      {
        heading: "The legal and mortgage process",
        paragraphs: [
          "Your conveyancer checks title and searches while the lender completes underwriting and valuation. Consider an appropriate survey before committing. Do not treat the purchase as certain until contracts are exchanged.",
        ],
      },
    ],
  },
];

export const articles: Resource[] = [
  {
    slug: "understanding-mortgage-rates",
    kind: "article",
    category: "Market update",
    title: "Understanding mortgage rates without the noise",
    description: "The factors behind mortgage pricing and what a headline rate does not tell you.",
    readTime: "5 min read",
    published: "2026-06-26",
    updated: "2026-06-28",
    relatedCalculatorSlug: "mortgage-repayment",
    relatedCalculatorEyebrow: "ESTIMATE REPAYMENTS",
    relatedCalculatorTitle: "See the payment impact of a mortgage rate",
    relatedCalculatorCta: "Estimate repayments",
    sections: [
      {
        heading: "What influences mortgage pricing",
        paragraphs: [
          "Mortgage pricing reflects more than the Bank of England base rate. Funding costs, swap rates, competition, capital requirements and a lender’s appetite all play a part.",
        ],
      },
      {
        heading: "Headline rate versus total cost",
        paragraphs: [
          "A low advertised rate may carry a substantial fee. Compare the monthly payments, fees and incentives over the period you expect to hold the mortgage.",
        ],
        bullets: [
          "Use the same loan amount and comparison period",
          "Include fees added to the mortgage",
          "Check early repayment charges and portability",
        ],
      },
      {
        heading: "Focus on decisions you can control",
        paragraphs: [
          "Your deposit, credit profile, term and repayment method affect available options. Rates can move quickly; a suitable decision is based on your circumstances, not a prediction presented as certainty.",
        ],
      },
    ],
  },
  {
    slug: "how-much-deposit-do-you-need",
    kind: "article",
    category: "First-time buyers",
    title: "How much deposit might you need?",
    description: "Explore how deposit size affects loan-to-value and the mortgage options available.",
    readTime: "6 min read",
    published: "2026-06-24",
    updated: "2026-06-28",
    relatedCalculatorSlug: "deposit",
    relatedCalculatorEyebrow: "ESTIMATE DEPOSIT",
    relatedCalculatorTitle: "See the deposit you may need",
    relatedCalculatorCta: "Estimate deposit",
    sections: [
      {
        heading: "Deposit and loan-to-value",
        paragraphs: [
          "Loan-to-value compares the mortgage with the property value. A £180,000 mortgage on a £200,000 home is 90% LTV, meaning a £20,000 deposit.",
        ],
      },
      {
        heading: "Why thresholds matter",
        paragraphs: [
          "Mortgage products are often grouped into LTV bands. Crossing a threshold can affect pricing, but using every pound as a deposit can leave too little for fees or emergencies.",
        ],
      },
      {
        heading: "Look beyond the purchase price",
        paragraphs: [
          "Budget for conveyancing, surveys, moving, initial repairs and any applicable property tax. Keep a buffer rather than relying on the maximum a lender might offer.",
        ],
      },
    ],
  },
  {
    slug: "five-remortgaging-costs",
    kind: "article",
    category: "Remortgaging",
    title: "Five costs to consider before switching",
    description: "Look beyond the monthly payment when comparing your current deal with a new one.",
    readTime: "7 min read",
    published: "2026-06-22",
    updated: "2026-06-28",
    relatedCalculatorSlug: "remortgage-savings",
    relatedCalculatorEyebrow: "COMPARE SAVINGS",
    relatedCalculatorTitle: "See whether a remortgage could save you money",
    relatedCalculatorCta: "Compare remortgage savings",
    sections: [
      {
        heading: "The five common costs",
        paragraphs: [
          "Review product fees, early repayment charges, valuation costs, legal work and any exit or administration fee on the existing mortgage.",
        ],
        bullets: [
          "Product or arrangement fee",
          "Early repayment charge",
          "Valuation fee",
          "Conveyancing costs",
          "Mortgage exit fee",
        ],
      },
      {
        heading: "Calculate over a meaningful period",
        paragraphs: [
          "Compare the balance and total paid over the initial deal period, including fees and incentives. Adding a fee to the loan means paying interest on it.",
        ],
      },
      {
        heading: "A product transfer may differ",
        paragraphs: [
          "Staying with the current lender can involve fewer checks or costs, but should still be compared with suitable alternatives and your longer-term plans.",
        ],
      },
    ],
  },
  {
    slug: "life-cover-vs-critical-illness",
    kind: "article",
    category: "Protection",
    title: "Life cover and critical illness cover are not the same",
    description: "A clear comparison of what each type of policy is designed to do.",
    readTime: "8 min read",
    published: "2026-06-20",
    updated: "2026-06-28",
    relatedCalculatorSlug: "protection-needs",
    relatedCalculatorEyebrow: "ESTIMATE PROTECTION",
    relatedCalculatorTitle: "See your protection cover gap",
    relatedCalculatorCta: "Estimate protection gap",
    sections: [
      {
        heading: "Different claim events",
        paragraphs: [
          "Life cover generally pays on death during the term. Critical illness cover pays when the insured person meets the policy definition for a listed condition and survives any required period.",
        ],
      },
      {
        heading: "Definitions are decisive",
        paragraphs: [
          "A diagnosis alone may not qualify. Policies specify conditions, severity and evidence, and definitions can differ between insurers.",
        ],
      },
      {
        heading: "Consider the financial need",
        paragraphs: [
          "The amount and type of cover should reflect debts, household income, savings and employment benefits. Combined policies may pay once, so understand what remains after a claim.",
        ],
      },
    ],
  },
  {
    slug: "why-lender-affordability-differs",
    kind: "article",
    category: "Affordability",
    title: "Why lender affordability differs from online estimates",
    description: "Income multiples are only a starting point; commitments and criteria matter too.",
    readTime: "9 min read",
    published: "2026-06-18",
    updated: "2026-06-28",
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK AFFORDABILITY",
    relatedCalculatorTitle: "See your mortgage affordability range",
    relatedCalculatorCta: "Check affordability",
    sections: [
      {
        heading: "Models use different assumptions",
        paragraphs: [
          "Lenders assess income, committed spending, household circumstances and potential rate changes using their own models. The same applicants can therefore receive different results.",
        ],
      },
      {
        heading: "Income is not always treated equally",
        paragraphs: [
          "Overtime, bonus, commission and self-employed income may be averaged or discounted. Evidence requirements and acceptable sources vary.",
        ],
      },
      {
        heading: "Treat calculators as illustrations",
        paragraphs: [
          "Online estimates help with early planning but are not lending decisions. A full application also considers credit history, property acceptability and verification.",
        ],
      },
    ],
  },
  {
    slug: "rental-stress-testing",
    kind: "article",
    category: "Buy to let",
    title: "What rental stress testing means",
    description: "Understand the rental coverage checks lenders commonly apply to buy-to-let borrowing.",
    readTime: "10 min read",
    published: "2026-06-16",
    updated: "2026-06-28",
    relatedCalculatorSlug: "buy-to-let",
    relatedCalculatorEyebrow: "CHECK RENTAL COVERAGE",
    relatedCalculatorTitle: "See your buy-to-let rental coverage",
    relatedCalculatorCta: "Check rental coverage",
    sections: [
      {
        heading: "Testing rent against interest",
        paragraphs: [
          "Buy-to-let lenders often require expected rent to cover a percentage of mortgage interest calculated at a specified stress rate. This is commonly called the interest coverage ratio test.",
        ],
      },
      {
        heading: "Why results vary",
        paragraphs: [
          "Stress rates and coverage ratios vary with tax status, product type, fixed-rate period and lender policy. The property valuation also needs to support the expected market rent.",
        ],
      },
      {
        heading: "Affordability is broader than one test",
        paragraphs: [
          "Some lenders assess personal income as well. Landlords should separately budget for voids, maintenance, insurance, tax and regulatory obligations.",
        ],
      },
    ],
  },
];

export const resources = [...guides, ...articles];
export const getResource = (kind: Resource["kind"], slug: string) =>
  resources.find((item) => item.kind === kind && item.slug === slug);
