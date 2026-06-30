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
    readTime: "12 min read",
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
          "A sensible first-time buyer budget includes more than the mortgage payment. You also need to allow for council tax, utilities, insurance, travel costs, furniture, repairs and the possibility that rates or personal circumstances change after you move in.",
          "It helps to separate the numbers into three groups: your deposit, your purchase costs and your ongoing monthly ownership costs. That gives you a clearer picture of what is affordable now and what will still feel manageable after completion.",
        ],
        bullets: [
          "Build an emergency buffer alongside your deposit",
          "Allow for legal fees, surveys, moving costs and insurance",
          "Check your credit reports before applying",
        ],
      },
      {
        heading: "Understand what lenders are really assessing",
        paragraphs: [
          "Mortgage affordability is usually more detailed than an income multiple headline. Lenders look at your earnings, regular spending, existing credit commitments, household circumstances and their own stress-testing assumptions.",
          "That means two lenders can look at the same applicant and come to different conclusions. A calculator can help you start planning, but the actual borrowing figure depends on policy, documentation and the lender’s view of risk at the time you apply.",
          "If your income includes overtime, bonus, commission or self-employed earnings, it is especially important not to assume every lender will use those figures in the same way.",
        ],
      },
      {
        heading: "Deposit and agreement in principle",
        paragraphs: [
          "A larger deposit normally reduces the loan-to-value ratio and may widen the choice of mortgages. An agreement in principle gives an initial indication of borrowing, but it is not a mortgage offer or guarantee.",
          "Your deposit source also matters. If part of it is a gift, lenders and conveyancers will usually want to know who it came from and whether it has to be repaid. Clear paperwork early on can prevent avoidable delays later in the purchase.",
          "An agreement in principle can make you look more prepared when you start viewing properties and making offers, but it should still be treated as an initial checkpoint rather than a final approval.",
        ],
      },
      {
        heading: "Prepare your documents before you find the property",
        paragraphs: [
          "The home-buying process usually moves more smoothly when your identification, proof of address, income evidence and bank statements are already organised. This is particularly useful if a property attracts strong interest and you need to move quickly.",
          "You should also keep your financial profile stable while applying where possible. New credit applications, missed payments or unusual account activity can create extra questions during underwriting.",
        ],
        bullets: [
          "Recent payslips or income evidence",
          "Bank statements showing salary credits and regular spending",
          "Identification and proof of address documents",
          "Evidence of the deposit source, including gifted deposits if relevant",
        ],
      },
      {
        heading: "From offer to completion",
        paragraphs: [
          "Once an offer is accepted, your solicitor handles the legal work while the lender values the property. An independent survey can reveal issues a basic lender valuation may not cover.",
          "Exchange makes the purchase legally binding in the usual England and Wales process. Completion is when funds transfer and you collect the keys.",
          "This stage often feels slower than buyers expect because several moving parts happen at once: underwriting, valuation, searches, legal enquiries and any chain-related issues. Delays are common, so it helps to plan practically rather than assume a best-case timescale.",
        ],
      },
      {
        heading: "Common first-time buyer mistakes to avoid",
        paragraphs: [
          "One of the most common mistakes is focusing only on the maximum mortgage a lender may offer rather than on a monthly payment that still leaves breathing room. Another is using every available pound for the deposit and leaving no buffer for fees, repairs or moving costs.",
          "It is also easy to treat the lender’s valuation as if it were a full assessment of the property’s condition. In reality, a valuation is mainly for the lender’s benefit. Depending on the property, a more detailed survey may be worth paying for.",
          "Finally, try not to make big financial changes between offer and completion. New borrowing, missed payments or changing jobs can all create fresh underwriting questions.",
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
    readTime: "11 min read",
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
          "Leaving it too late can reduce your options and create unnecessary pressure. A remortgage is usually easier to compare well when there is enough time to review rates, fees, early repayment charge dates, documentation and any changes in your circumstances.",
          "A good review window also helps if the case turns out to be more complex than expected. Self-employed income, changes in employment, a different property value or tighter lender criteria can all mean extra work is needed before the best route becomes clear.",
        ],
      },
      {
        heading: "Compare the total cost",
        paragraphs: [
          "A lower rate is not automatically cheaper. Product fees, valuation costs, legal charges and early repayment charges can outweigh a modest monthly saving.",
          "This is one of the most common remortgage mistakes. Borrowers often focus on the headline interest rate and monthly payment, but the real comparison should include the total cost over the period you expect to keep the new deal.",
          "In some cases a slightly higher rate with lower fees can work out better than the cheapest-looking rate. In others, a product fee may still be worth paying because the payment saving is large enough to justify it over time.",
        ],
        bullets: [
          "Compare costs over the period you expect to keep the deal",
          "Check whether fees are paid upfront or added to the loan",
          "Consider how your loan-to-value may have changed",
        ],
      },
      {
        heading: "Understand your current lender options as well",
        paragraphs: [
          "Remortgaging does not always mean changing lender. A product transfer with your current lender can sometimes be simpler, quicker or lower cost because fewer checks may be required. But simpler does not automatically mean better value.",
          "The useful comparison is usually between three things: staying on the existing lender’s new deal, moving to a different lender, and doing nothing and reverting to the lender’s reversion rate. Seeing those side by side makes the decision clearer.",
        ],
      },
      {
        heading: "Prepare to apply",
        paragraphs: [
          "Lenders typically reassess income, expenditure, credit history and the property. Gather recent evidence of income and bank statements, and avoid assuming an existing mortgage guarantees acceptance elsewhere.",
          "Even if you have managed the mortgage well for years, a new lender still looks at the case through its current lending policy. That means affordability, credit profile, property details and supporting documents all matter again.",
          "It is also worth checking whether anything in your circumstances has changed since the original mortgage that could affect the outcome, such as income structure, employment pattern, new credit commitments or changes to the property itself.",
        ],
      },
      {
        heading: "Loan-to-value can change the picture",
        paragraphs: [
          "If your property value has risen or the mortgage balance has reduced, your loan-to-value may be lower than when you first took the deal. That can sometimes improve product access and pricing.",
          "The reverse is also important. If the property value is weaker than expected, the deal options available may be narrower. That is why assumptions about value should be checked carefully rather than taken for granted.",
        ],
      },
      {
        heading: "Know the timing of early repayment charges",
        paragraphs: [
          "The end date of any early repayment charge is critical. Remortgaging too early can wipe out the benefit of a better new deal if a significant charge still applies.",
          "In some cases it may still be worth moving before the charge ends, but only after comparing the full numbers. The point is to make the decision deliberately rather than accidentally overlapping with avoidable costs.",
        ],
      },
      {
        heading: "A practical remortgage process",
        paragraphs: [
          "Start by checking your current balance, current deal end date, any early repayment charges and your estimated property value. Then compare realistic options over a relevant period, including the lender you are already with.",
          "If a switch still looks worthwhile, gather your documents early and review whether your circumstances are likely to fit the lenders you are considering. That process usually leads to a more confident remortgage decision than reacting only to headline rates.",
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
    readTime: "11 min read",
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
          "For many households, the real question is not whether life insurance exists in the abstract, but what financial problem it is meant to solve. Some people want to help clear a repayment mortgage. Others want to protect family income, childcare costs or the wider stability of the household if one person dies.",
          "Thinking about the need first usually leads to better decisions than starting with the cheapest premium. A policy only becomes useful when the amount, term and structure match the purpose it is meant to serve.",
        ],
      },
      {
        heading: "Common cover structures",
        paragraphs: [
          "Level cover keeps the insured amount broadly fixed, while decreasing cover usually falls over time and is often aligned with a repayment mortgage. Joint policies commonly pay once and then end.",
          "The structure matters because two policies with similar names can behave very differently over time. Level cover may suit needs that do not reduce much, such as leaving a fixed lump sum for family support. Decreasing cover may be more appropriate where the main goal is to track a reducing mortgage balance.",
          "Joint policies can look simpler because they cover two people in one arrangement, but they often pay once and then end. Separate policies can provide more flexibility, although they may not always be the cheaper route.",
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
          "Employer benefits, savings and other protection arrangements should also be considered. Some households already have death-in-service cover through work, for example, but that may not be enough on its own or may not continue if employment changes.",
          "Reviewing the wider picture helps avoid both underinsuring and paying for protection that does not meaningfully change the financial outcome for the people who depend on you.",
        ],
      },
      {
        heading: "Why term length matters",
        paragraphs: [
          "The policy term should usually reflect how long the financial need is expected to exist. If the objective is mortgage protection, the term may be linked to the remaining mortgage term. If the objective is family support, it may relate more closely to how long dependants are expected to rely on that income or stability.",
          "A term that is too short can leave a gap before the need ends. A term that is much longer than necessary may increase cost without adding much practical value.",
        ],
      },
      {
        heading: "Beneficiaries, trusts and practical administration",
        paragraphs: [
          "It is also worth thinking about who should receive the proceeds and how smoothly the money would be available if a claim were made. Depending on the arrangement, policy ownership and beneficiary planning can affect how quickly funds are distributed and who ultimately controls them.",
          "These practical questions are often overlooked when people focus only on the premium, but they can matter a great deal if the policy is ever needed.",
        ],
      },
      {
        heading: "When life insurance often needs reviewing",
        paragraphs: [
          "Major changes such as getting married, having children, moving home, taking on a larger mortgage or changing employment are common reasons to revisit the amount and structure of cover. A policy that made sense five years ago may not fit as well after circumstances change.",
          "Reviewing cover does not always mean replacing it. Sometimes the existing policy still fits. The important point is to check it against current needs rather than assume it remains suitable indefinitely.",
        ],
      },
      {
        heading: "A practical starting point",
        paragraphs: [
          "Start with the question: if you died during the next few years, what financial obligations would still need to be met and for how long? That usually creates a clearer basis for deciding whether the priority is mortgage cover, family support, a fixed lump sum or a combination of needs.",
          "From there, the structure, amount and term become easier to assess in practical terms instead of as isolated product features.",
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
    readTime: "10 min read",
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
          "For many households, income is the asset that supports everything else: mortgage payments, rent, bills, family costs and savings plans. That is why the loss of earnings through illness can create a serious financial problem even where no major one-off emergency has happened.",
          "Income protection is aimed at that specific risk. Rather than paying because a person has died, it is designed to help while they are still alive but unable to work due to illness or injury.",
        ],
      },
      {
        heading: "The choices that affect cover",
        paragraphs: [
          "The deferred period determines how long you wait before payments begin. The benefit period, occupation definition and maximum benefit all materially affect what the policy can provide.",
          "These choices shape the usefulness of the cover far more than many buyers expect. Two income protection policies may sound similar, but a different deferred period or occupation definition can change the real-world outcome significantly.",
          "That is why it helps to think about how the policy would actually fit your circumstances if you were unable to work for several months or longer, not only what the premium looks like today.",
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
          "A policy that once felt well matched can become less appropriate if your salary changes, your employer sick-pay entitlement changes or your role becomes materially different from when the cover was first arranged.",
          "Regular reviews help ensure the policy still supports the financial outcome you would want if you had to rely on it.",
        ],
      },
      {
        heading: "Deferred period and emergency planning",
        paragraphs: [
          "The deferred period is the gap between stopping work and the policy starting to pay. This is often one of the most important design decisions because it determines how the cover fits with employer sick pay, savings and any other safety nets.",
          "A shorter deferred period may provide support sooner but can cost more. A longer deferred period may be cheaper but only works well if you have a realistic plan for covering that gap.",
        ],
      },
      {
        heading: "Occupation definitions matter in practice",
        paragraphs: [
          "Income protection is not only about whether someone is ill. It is also about how the policy defines inability to work. The wording around occupation can materially affect when a claim may be considered valid and how the insurer assesses the situation.",
          "That is one reason why comparing policies on premium alone can be misleading. The value of the cover lies in the circumstances in which it could respond, not just in the fact that a policy exists.",
        ],
      },
      {
        heading: "Benefit level and long-term fit",
        paragraphs: [
          "The benefit is usually designed to replace part, not all, of your earnings. The right level depends on your essential monthly commitments, the other resources available to you and the policy limits that apply.",
          "If cover is set too low, it may not materially protect your standard of living. If it is reviewed too rarely, inflation and rising expenses can gradually reduce its effectiveness over time.",
        ],
      },
      {
        heading: "A practical way to assess the need",
        paragraphs: [
          "Start by asking how long your household could realistically cope if income from work stopped because of illness. Then identify what support already exists through sick pay, savings or other benefits and what gap remains after that.",
          "That gap usually gives a clearer basis for thinking about deferred period, benefit level and whether income protection deserves priority within a wider protection plan.",
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
    readTime: "12 min read",
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
          "This is one of the biggest reasons self-employed borrowing can feel less predictable than employed borrowing. Two lenders may both be interested in the same applicant but use different ways of interpreting the business income behind the case.",
          "For sole traders and partnerships, lenders often focus on taxable profits. For limited-company directors, they may look at salary and dividends, retained profit, or another documented measure depending on policy. The structure of the business matters because the income route being assessed is not identical in every case.",
        ],
      },
      {
        heading: "Evidence to prepare",
        paragraphs: [
          "Clear, consistent records reduce avoidable delays. Exact requirements vary by lender and complexity.",
          "Lenders want to see that the income being relied on is real, supportable and stable enough for the mortgage being requested. The stronger and more organised the records are, the easier it is to compare realistic options and reduce last-minute document chasing.",
        ],
        bullets: [
          "Finalised accounts and tax calculations",
          "Tax year overviews and business bank statements",
          "Details of existing commitments and deposit source",
        ],
      },
      {
        heading: "Consistency often matters as much as headline income",
        paragraphs: [
          "A high income in one year is not always enough on its own. Lenders often want to understand whether earnings are stable or whether there has been a sharp rise or fall that needs explaining. Recent volatility does not automatically stop a mortgage, but it usually means the story behind the numbers matters more.",
          "That is why self-employed borrowers should be careful about assuming the strongest year will always be the figure a lender uses. Some policies look at an average, others at the latest year, and others at the lower of two figures where income has fluctuated.",
        ],
      },
      {
        heading: "Business structure can change the lender view",
        paragraphs: [
          "The way income is drawn from the business can affect how the case looks. A limited-company director who keeps profits in the company may appear very different from one who takes most earnings personally, even if the business is performing equally well.",
          "That does not mean one structure is inherently better for mortgage purposes. It means the lender needs to understand where the income sits and what it regards as usable for affordability.",
        ],
      },
      {
        heading: "Plan before applying",
        paragraphs: [
          "Large changes in income or business structure may need explanation. Speak to an accountant before changing how income is drawn purely for a mortgage application, as tax and lending considerations are different.",
          "This is especially important if you are considering taking additional dividends, changing salary levels or restructuring the business shortly before applying. A decision that looks helpful from one angle may create questions from another.",
          "Good planning usually means looking at the mortgage and tax implications together, rather than trying to optimise one in isolation.",
        ],
      },
      {
        heading: "Credit profile and personal affordability still matter",
        paragraphs: [
          "Even where business income is strong, lenders still assess the personal side of the application. Existing credit commitments, household spending, deposit size and credit history all continue to matter.",
          "A self-employed mortgage is therefore not only a business-income exercise. It is still a full affordability case, just with a more detailed income assessment than some employed applicants face.",
        ],
      },
      {
        heading: "A practical preparation checklist",
        paragraphs: [
          "Before applying, it helps to know which income figure is likely to be used, whether recent trading supports the level of borrowing you want and whether the deposit source is clearly documented. That gives you a more realistic picture before you start comparing lenders.",
        ],
        bullets: [
          "Check that recent accounts and tax records are complete and consistent",
          "Understand whether income has risen, fallen or stayed broadly stable",
          "Review personal credit commitments and monthly affordability",
          "Prepare clear evidence for the deposit source and banked funds",
        ],
      },
      {
        heading: "What usually makes self-employed cases easier",
        paragraphs: [
          "Cases tend to move more smoothly when the records are clear, the income trend is understandable and the applicant can explain the business model in simple terms. The more unusual or fast-changing the situation, the more valuable it is to approach the case with lender suitability in mind rather than assuming the broadest market route will fit.",
          "Self-employment adds complexity, but it does not mean you need to accept uncertainty as normal. The right preparation usually makes the options much clearer.",
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
    readTime: "14 min read",
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
          "Buying a first home usually works best when the preparation starts before you begin viewing properties. A stronger foundation makes later decisions easier because you already know your savings position, your likely affordability range and any issues that might need attention.",
          "This stage is also where many buyers benefit from being realistic rather than optimistic. A workable plan is usually more useful than stretching every assumption in the hope that the numbers improve later.",
        ],
      },
      {
        heading: "Search with a clear brief",
        paragraphs: [
          "Separate essential requirements from preferences and investigate the local area as carefully as the property. Running costs, tenure and planned works can change affordability.",
          "A clear brief helps you evaluate homes properly instead of reacting only to appearance or urgency. For some buyers, location and monthly running costs matter more than squeezing into the highest possible purchase price. For others, lease details, transport links or future flexibility may be the bigger issues.",
          "Understanding those priorities early makes it easier to rule properties in or out quickly once the search becomes active.",
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
          "This is often the stage that feels most frustrating to first-time buyers because progress can seem uneven. Legal enquiries, searches, valuations and lender checks all move at different speeds, and not all delays are visible from the buyer side.",
          "Patience helps, but so does knowing which parts of the process are still uncertain. Exchange is usually the point at which the transaction becomes legally binding in the standard England and Wales process, so it is wise not to make irreversible decisions too early.",
        ],
      },
      {
        heading: "Budgeting beyond the headline affordability figure",
        paragraphs: [
          "Even when the mortgage is approved, the wider monthly budget still matters. Council tax, insurance, utilities, commuting, repairs and furnishing can make the real cost of ownership feel very different from the mortgage payment alone.",
          "A good buying decision usually leaves room for day-to-day living and some resilience after completion rather than using every available pound to secure the purchase.",
        ],
      },
      {
        heading: "Surveys, valuations and what they do not tell you",
        paragraphs: [
          "A lender’s valuation is primarily for the lender, not for you. It checks whether the property is acceptable security for the loan. Depending on the home, that may not give you enough information about condition, maintenance needs or hidden issues.",
          "A fuller survey may reveal things that affect the decision, the price negotiation or the budget you need after moving in. That is why buyers should think carefully about what level of inspection is appropriate for the property they are considering.",
        ],
      },
      {
        heading: "What often delays first purchases",
        paragraphs: [
          "Common delays include incomplete paperwork, slow responses to legal enquiries, chain issues, leasehold complications and valuation or survey findings that need further investigation. Not all of these can be controlled, but some can be reduced with early preparation and realistic timing expectations.",
          "Where a delay happens, it helps to understand whether it affects the mortgage, the legal position, the property condition or simply the timetable. Those are not always the same problem.",
        ],
      },
      {
        heading: "A practical first-home mindset",
        paragraphs: [
          "The goal is not to make every part of the process feel perfect. It is to make a purchase that is financially sustainable, legally understood and right enough for your life stage. Most buyers have to balance compromise with progress.",
          "Approaching the process with clear priorities, organised paperwork and a realistic budget usually leads to better decisions than chasing a headline maximum or rushing because a property feels emotionally compelling.",
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
    readTime: "9 min read",
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
          "That is why mortgage rates do not move in a perfectly tidy line with every market headline. A lender may cut one range of products, withdraw another and hold a third range steady depending on its funding position and business priorities.",
          "For borrowers, the important point is that a rate change is usually the result of several pressures acting at once rather than one single public number.",
        ],
      },
      {
        heading: "Why the Bank Rate still matters",
        paragraphs: [
          "The Bank of England base rate still matters because it affects the broader cost of money in the system and shapes expectations about inflation, savings and borrowing. Variable-rate mortgages and some lender pricing decisions can be influenced more directly by it.",
          "However, many fixed-rate products are also influenced by market expectations about where rates may go in future, not just where the base rate is today. That is one reason borrowers sometimes see fixed rates move even when the base rate itself has not changed.",
        ],
      },
      {
        heading: "Headline rate versus total cost",
        paragraphs: [
          "A low advertised rate may carry a substantial fee. Compare the monthly payments, fees and incentives over the period you expect to hold the mortgage.",
          "Two deals with similar rates can still produce meaningfully different outcomes once arrangement fees, cashback, valuation incentives and early repayment charges are considered. A rate that looks cheaper at first glance may not be the lower-cost option in practice.",
          "Borrowers should also consider whether a fee is paid upfront or added to the mortgage. Adding the fee can help with cash flow, but it also means paying interest on that amount.",
        ],
        bullets: [
          "Use the same loan amount and comparison period",
          "Include fees added to the mortgage",
          "Check early repayment charges and portability",
        ],
      },
      {
        heading: "Your circumstances affect the rate you can access",
        paragraphs: [
          "The cheapest deals are not available to everyone. Deposit size, loan-to-value, credit profile, income structure, property type and term length all affect the products a lender may offer.",
          "This is why market commentary is useful for context but not enough for a decision. The question is not only whether rates have gone up or down, but where you fit within the current market.",
        ],
      },
      {
        heading: "Focus on decisions you can control",
        paragraphs: [
          "Your deposit, credit profile, term and repayment method affect available options. Rates can move quickly; a suitable decision is based on your circumstances, not a prediction presented as certainty.",
          "If you are planning to buy, remortgage or review your mortgage soon, practical preparation usually matters more than trying to time the perfect market moment. Organising documents, understanding your budget and checking the total cost of realistic options will usually move you further forward than reacting to noise.",
        ],
      },
      {
        heading: "A practical way to read mortgage rate news",
        paragraphs: [
          "When you see a mortgage-rate headline, ask four questions. What type of product is being discussed? Who is likely to qualify for it? What fees or conditions sit behind it? And what does it mean for someone with your deposit, income and timescale?",
          "Those questions help turn market commentary into something useful. They also make it easier to avoid overreacting to isolated headlines that may not be relevant to your own position.",
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
    readTime: "9 min read",
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
          "This matters because lenders commonly group mortgage products by LTV bands such as 95%, 90%, 85%, 80% and 75%. The lower the LTV, the less of the purchase is being funded by borrowing and the more security the lender usually feels it has.",
          "For buyers, that means the size of the deposit affects more than whether you can proceed. It can also influence the range of products available, the rate offered and the monthly payment over time.",
        ],
      },
      {
        heading: "Why thresholds matter",
        paragraphs: [
          "Mortgage products are often grouped into LTV bands. Crossing a threshold can affect pricing, but using every pound as a deposit can leave too little for fees or emergencies.",
          "A small change in deposit size can sometimes move you into a different pricing band, but it does not always follow that stretching to the next threshold is the right decision. Keeping some savings back for moving costs, repairs or a financial buffer may be more valuable than achieving a slightly lower LTV on paper.",
          "The right deposit strategy is usually the one that balances product access, monthly affordability and resilience after completion, not simply the biggest deposit you can possibly assemble.",
        ],
        bullets: [
          "Check whether a realistic extra deposit amount actually changes the LTV band",
          "Compare the rate and payment impact of each likely band",
          "Avoid leaving yourself with no savings after completion",
        ],
      },
      {
        heading: "Minimum deposit is not the same as comfortable deposit",
        paragraphs: [
          "Some buyers focus on the minimum deposit needed to access the market, such as 5% or 10%, but the practical question is whether that leaves enough room for the rest of the costs that come with buying and owning a home.",
          "A smaller deposit can help you buy sooner, but it may also mean higher monthly payments, a narrower product range and less flexibility if rates are less favourable than expected.",
          "A larger deposit can reduce borrowing and sometimes improve product access, but delaying your purchase to save more is not automatically the best decision either. The timing depends on your budget, housing plans and the trade-off between waiting and moving forward now.",
        ],
      },
      {
        heading: "Look beyond the purchase price",
        paragraphs: [
          "Budget for conveyancing, surveys, moving, initial repairs and any applicable property tax. Keep a buffer rather than relying on the maximum a lender might offer.",
          "The deposit is only one part of the cash needed to buy. First-time buyers often underestimate legal fees, valuation or survey costs, removals, initial furnishing and the reality that some properties need spending soon after the keys are collected.",
          "If you are using every available pound for the deposit, even a modest unexpected cost can become stressful. Keeping a reserve can make the early months of ownership much more manageable.",
        ],
      },
      {
        heading: "Gifted deposits and savings evidence",
        paragraphs: [
          "Where the deposit comes from also matters. If savings are being built gradually, clear bank records help show how the money was accumulated. If some or all of the deposit is a gift, lenders and conveyancers will usually want evidence of who provided it and confirmation that it does not need to be repaid.",
          "This is worth preparing early. Deposit-source questions are routine, but delays often happen when the paperwork is gathered only after an offer has been accepted.",
        ],
      },
      {
        heading: "A practical way to decide how much to save",
        paragraphs: [
          "Start by looking at the property price range you are realistically targeting, then estimate the deposit required at a few LTV levels rather than using one single number. After that, add likely purchase costs and decide how much cash you still want available after completion.",
          "That approach gives you a target that is grounded in the real transaction, not just the headline percentage. It also makes it easier to judge whether saving a little longer is likely to improve your position meaningfully or only marginally.",
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
    readTime: "10 min read",
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
          "These costs do not always apply in every case, but they are common enough that they should be checked deliberately rather than assumed away. A remortgage can still save money overall, but only if the comparison includes the full cost of moving.",
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
        heading: "Why monthly savings can be misleading",
        paragraphs: [
          "A new deal can show an immediate monthly saving and still be poorer value overall once fees and charges are included. This is especially true if you expect to keep the mortgage only for a short period or if the upfront costs are high relative to the saving.",
          "Looking only at the monthly payment can also hide the effect of adding fees to the loan, extending the term or resetting the balance in a way that changes long-term cost.",
        ],
      },
      {
        heading: "Calculate over a meaningful period",
        paragraphs: [
          "Compare the balance and total paid over the initial deal period, including fees and incentives. Adding a fee to the loan means paying interest on it.",
          "A useful comparison period is usually the period you realistically expect to keep that mortgage deal. For some borrowers that is the initial fixed-rate term. For others it may need to account for a likely move, overpayment plan or future change in circumstances.",
          "The important thing is to compare like with like. If one deal is being judged over two years and another over five, the result can be misleading.",
        ],
      },
      {
        heading: "A product transfer may differ",
        paragraphs: [
          "Staying with the current lender can involve fewer checks or costs, but should still be compared with suitable alternatives and your longer-term plans.",
          "A product transfer may feel easier because you are not moving lender, but convenience alone does not make it the better option. It is still worth checking the total cost, the flexibility of the deal and whether another lender offers a structure more suited to your plans.",
        ],
      },
      {
        heading: "Situations where extra caution is needed",
        paragraphs: [
          "Remortgaging needs extra care if you are still inside an early repayment charge period, if your property value has changed meaningfully, or if your income and circumstances are different from when you first took the mortgage.",
          "Borrowers with plans to move soon, clear part of the balance or switch repayment strategy should also look closely at portability, overpayment rules and future fees.",
        ],
        bullets: [
          "Check the exact end date of any early repayment charge",
          "Review whether your loan-to-value may have improved or worsened",
          "Consider whether a shorter or longer deal term matches your plans",
        ],
      },
      {
        heading: "A sensible remortgage comparison process",
        paragraphs: [
          "Start by listing the remaining balance, current rate, existing lender fees and the date your current deal ends. Then compare realistic new options on total cost, monthly affordability and flexibility, not on headline rate alone.",
          "That process makes it easier to see whether you are genuinely saving money or simply moving costs around.",
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
    readTime: "10 min read",
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
          "That difference sounds simple, but it changes the purpose of each policy. Life cover is designed to support people financially after a death. Critical illness cover is designed to provide financial support while the insured person is still alive but dealing with the consequences of a serious condition.",
          "In other words, the two policies can address related risks, but they do not solve the same financial problem.",
        ],
      },
      {
        heading: "Definitions are decisive",
        paragraphs: [
          "A diagnosis alone may not qualify. Policies specify conditions, severity and evidence, and definitions can differ between insurers.",
          "This is one of the most misunderstood parts of protection planning. People sometimes assume that if a condition is named in the brochure, any diagnosis of that condition will trigger a payout. In reality, policies usually define the exact medical threshold that must be met and the evidence required.",
          "That means two policies can both refer to critical illness cover but still differ materially in scope. The detail matters at least as much as the headline label.",
        ],
      },
      {
        heading: "What each policy is typically trying to protect",
        paragraphs: [
          "Life cover is often used to protect dependants against the financial impact of death. That may include clearing a mortgage, replacing part of household income, covering childcare costs or leaving a lump sum for future needs.",
          "Critical illness cover is often aimed at the financial shock that can follow a serious illness. Even where the person survives, they may face time away from work, treatment-related costs, changes to lifestyle or reduced earning ability.",
          "Thinking about the financial problem first usually leads to better protection decisions than starting with a product name alone.",
        ],
      },
      {
        heading: "Why people often combine them",
        paragraphs: [
          "Some households choose both because they want protection against more than one type of severe event. Death and serious illness create different pressures, and one policy does not automatically fill the gap left by the other.",
          "Combined arrangements can still vary. Some plans pay once and then end. Others are arranged as separate policies so that one claim does not necessarily remove all future protection. The structure matters, not just the headline that cover is 'included'.",
        ],
      },
      {
        heading: "Consider the financial need",
        paragraphs: [
          "The amount and type of cover should reflect debts, household income, savings and employment benefits. Combined policies may pay once, so understand what remains after a claim.",
          "A useful starting point is to ask what would happen financially if one person died or became seriously ill tomorrow. Which bills would continue? What income would disappear? What savings, sick pay, death-in-service or employer benefits already exist?",
          "Those answers help shape whether the priority is mortgage protection, family income support, a one-off recovery buffer or a wider combination of needs.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: [
          "A common mistake is assuming protection is already handled because some cover exists through work. Employer benefits can be valuable, but they may be limited, may not follow you if you change jobs and may not cover the full need.",
          "Another mistake is focusing only on the cheapest premium without checking what is actually covered, how long the policy lasts and whether the amount insured matches the financial problem being protected.",
          "It is also easy to buy cover and never review it. Mortgage balances fall, family circumstances change and income levels move over time, so the original structure may stop fitting as well as it once did.",
        ],
      },
      {
        heading: "A practical way to decide between them",
        paragraphs: [
          "If your main concern is what happens to your household finances after death, life cover may be the primary need. If your concern is how you would cope financially while living through a serious illness, critical illness cover may deserve more weight. In many cases, the answer is not either-or but how to balance both within a realistic budget.",
          "The right decision usually comes from matching the cover to the specific outcome you want to protect against rather than assuming similar-sounding policies are interchangeable.",
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
    readTime: "11 min read",
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
          "An online calculator usually simplifies that process to give an early planning estimate. A lender, by contrast, is trying to judge whether the borrowing is sustainable under its own criteria, regulatory obligations and risk appetite.",
          "That is why one figure can look generous online while a full lender assessment comes back lower or structured differently.",
        ],
      },
      {
        heading: "Income is not always treated equally",
        paragraphs: [
          "Overtime, bonus, commission and self-employed income may be averaged or discounted. Evidence requirements and acceptable sources vary.",
          "Some lenders may use 100% of certain income sources where the evidence is strong and consistent, while others may apply a cap, take an average over time or ignore that income entirely. The same issue applies to second jobs, shift allowances and dividend income.",
          "This difference matters because applicants often assume their gross annual earnings will be treated as one simple number. In practice, how income is defined can materially change the affordability outcome.",
        ],
      },
      {
        heading: "Committed spending has a bigger effect than many people expect",
        paragraphs: [
          "Credit card minimums, loans, car finance, childcare and other committed monthly costs can reduce borrowing more than applicants expect. Lenders also differ in how they treat household costs and the assumptions they apply to future interest-rate pressure.",
          "Even where two lenders are willing to accept the same income, different assumptions about spending and stress testing can lead to meaningfully different maximum borrowing figures.",
        ],
      },
      {
        heading: "Property and application details also matter",
        paragraphs: [
          "Affordability is not judged in isolation. Property type, loan term, repayment basis, deposit size and credit history can all affect whether a lender is comfortable with an application and how much it is willing to lend.",
          "That means the same household may see one figure on a broad calculator, another in an agreement in principle and another again after full underwriting.",
        ],
      },
      {
        heading: "Treat calculators as illustrations",
        paragraphs: [
          "Online estimates help with early planning but are not lending decisions. A full application also considers credit history, property acceptability and verification.",
          "Used properly, a calculator is still valuable. It can help you frame the conversation, test different deposit levels, understand payment sensitivity and avoid starting with unrealistic property prices.",
          "The key is to use it as a planning tool, not as confirmation that a lender will definitely accept the case.",
        ],
      },
      {
        heading: "How to use affordability estimates more effectively",
        paragraphs: [
          "If you want a more useful estimate, start with realistic income inputs, include committed monthly costs honestly and compare the result with your own comfortable budget, not only the maximum figure shown.",
          "Then use that estimate to narrow your search and identify where advice or lender-specific checks may matter most. That is usually a better approach than chasing the highest headline borrowing figure available.",
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
    readTime: "11 min read",
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
          "In simple terms, the lender is asking whether the rent is strong enough to support the mortgage under its own assumptions, rather than only under today’s exact product rate. This is one reason buy-to-let affordability can feel very different from owner-occupied mortgage affordability.",
          "The test is designed to give the lender a buffer. If rent only just covers the payment under favourable conditions, the mortgage may look less resilient when rates, costs or void periods are considered.",
        ],
      },
      {
        heading: "Why results vary",
        paragraphs: [
          "Stress rates and coverage ratios vary with tax status, product type, fixed-rate period and lender policy. The property valuation also needs to support the expected market rent.",
          "That means two lenders can look at the same property and proposed rent and still produce different maximum loan figures. One may use a higher stress rate, another may require a stronger coverage ratio, and another may take a different view of the rent the property can realistically achieve.",
          "Borrowers sometimes assume rent is a fixed fact in the calculation, but lenders usually rely on an assessed market-rent figure rather than an informal expectation. If the valuer supports a lower rent than expected, the borrowing outcome can change quickly.",
        ],
      },
      {
        heading: "Affordability is broader than one test",
        paragraphs: [
          "Some lenders assess personal income as well. Landlords should separately budget for voids, maintenance, insurance, tax and regulatory obligations.",
          "This matters because passing the rental stress test does not automatically mean the investment is comfortable in practice. Mortgage interest, letting costs, repairs, licensing, safety compliance and tax treatment can all affect whether the numbers still work once the property is running.",
          "Lenders may also look more closely at your wider profile if the case is more complex, for example where there are multiple properties, limited surplus income, unusual property types or portfolio-landlord considerations.",
        ],
      },
      {
        heading: "Why fixed-rate length can matter",
        paragraphs: [
          "In some parts of the market, the stress test can change depending on how long the fixed-rate period lasts. A longer fixed period may sometimes be assessed using different assumptions from a shorter one, because the lender is viewing the interest-rate risk differently.",
          "That does not mean a longer fix is automatically better. It simply means product structure can affect the affordability calculation as well as the monthly cost and flexibility of the deal.",
        ],
      },
      {
        heading: "What landlords should check beyond lender affordability",
        paragraphs: [
          "A lender’s willingness to lend is only one part of the decision. You should also consider how the property performs after realistic running costs, whether the rent leaves enough margin for voids or repairs, and how the deal fits your tax position and investment plan.",
          "This is especially important where the property only just meets the lender’s minimum rental coverage. A case that works narrowly for the lender may still feel too tight from the landlord’s own cash-flow perspective.",
        ],
        bullets: [
          "Allow for maintenance, insurance and agent fees",
          "Stress your own numbers for void periods and unexpected repairs",
          "Check local regulation, licensing and compliance costs",
          "Review the mortgage against your broader property strategy",
        ],
      },
      {
        heading: "A practical way to use stress-testing figures",
        paragraphs: [
          "Treat the lender’s stress test as a financing checkpoint, not as proof that the deal is a good investment. It tells you whether the lender is likely to be comfortable with the rent relative to the mortgage under its policy assumptions.",
          "A better decision usually comes from combining that lender view with your own cash-flow analysis. When both line up, the case is usually more robust. When they do not, it is worth understanding why before moving forward.",
        ],
      },
    ],
  },
];

export const resources = [...guides, ...articles];
export const getResource = (kind: Resource["kind"], slug: string) =>
  resources.find((item) => item.kind === kind && item.slug === slug);
