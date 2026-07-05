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
      {
        heading: "Why preparing early saves more than time",
        paragraphs: [
          "Early preparation also reduces decision pressure. When you already know how the deposit will be evidenced, you can focus more clearly on the property, the budget and the mortgage route instead of trying to solve documentation problems in the middle of a live transaction.",
          "That matters because many purchase delays are not caused by one major issue. They come from several smaller uncertainties building up at once. Deposit-source clarity is one of the easier areas to strengthen before the case becomes urgent.",
          "For expat buyers in particular, smoother evidence usually creates more confidence across both the mortgage and legal sides of the process.",
        ],
      },
      {
        heading: "What buyers should do before the offer stage",
        paragraphs: [
          "Before making an offer, it helps to decide which account will ultimately provide the deposit, whether any money still needs to be transferred and whether any donor documents or translations are still missing. Solving those questions early reduces the chance that the property process moves faster than the evidence pack.",
          "This is especially relevant where several family members, jurisdictions or currencies are involved. The more moving parts there are, the more valuable early simplification becomes.",
          "A cleaner fund path is not only easier to evidence. It is also easier to manage when exchange, completion dates and solicitor requests begin to accelerate.",
        ],
      },
      {
        heading: "Why deposit preparation supports the whole case",
        paragraphs: [
          "Good deposit records do more than satisfy a checklist. They help the mortgage, legal and anti-money-laundering parts of the transaction move with less friction. In expat purchases, that joined-up benefit is often underestimated until a delay appears.",
          "Put simply, the earlier you can make the money trail obvious, the more space you create to focus on the actual buying decision instead of on document recovery under time pressure.",
        ],
      },
      {
        heading: "What a well-prepared expat deposit file usually includes",
        paragraphs: [
          "A strong file usually includes the main account statements, a clear explanation of any large inbound transfers, records of currency conversion where relevant and early identification of any gifted element. If money has moved across several accounts, it helps to map that movement clearly rather than expect the solicitor or lender to infer it from fragmented statements alone.",
          "That level of preparation may feel administrative, but it often removes the kind of uncertainty that slows otherwise viable cases. For cross-border purchases especially, clarity around funds is one of the simplest ways to strengthen the whole transaction before it becomes time-sensitive.",
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
      {
        heading: "Why the same market update lands differently for different borrowers",
        paragraphs: [
          "A rate cut in the wider market does not automatically improve every borrower’s real options by the same amount. Someone with a strong deposit, straightforward income and a standard property may feel the benefit more quickly than someone with a higher loan-to-value, a more specialist property or a narrower lender pool.",
          "This is one reason public mortgage commentary can feel misleading when taken too literally. The market may genuinely be improving, but your own accessible product range may still depend more on deposit size, income structure, property type and timing than on the headline itself.",
          "That is why the most useful response to mortgage-rate news is usually to test what it changes for your own circumstances. Once you do that, the headlines become more practical and less noisy.",
        ],
      },
      {
        heading: "A sensible next step after reading rate headlines",
        paragraphs: [
          "If you are buying or remortgaging soon, a better next step than chasing headlines is to compare realistic monthly payments, likely fees and the strength of your own application profile. That turns market commentary into an actual decision framework instead of background noise.",
          "Used that way, mortgage-rate coverage becomes useful context rather than something that pushes you into reactive decisions. The goal is not to predict every move perfectly. It is to make a decision that still stands up well in the market you are actually in.",
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
      {
        heading: "When saving longer may help and when it may not",
        paragraphs: [
          "Saving for longer can make a real difference if it moves you into a better loan-to-value band, improves the monthly payment to a more comfortable level or leaves you with a healthier buffer after completion. In that situation you are not only increasing the deposit. You are also buying more resilience.",
          "At the same time, waiting is not automatically the right answer in every case. If another few months of saving changes very little in product access or monthly affordability, the bigger question becomes whether the overall purchase plan already works well enough for your budget and timescale.",
          "A more useful target is often the deposit level that lets you buy without stretching the wider plan too far, rather than the biggest number you could theoretically keep chasing.",
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
      {
        heading: "When switching is not automatically the best route",
        paragraphs: [
          "A full remortgage is not always the right answer. Sometimes a product transfer with the current lender is cheaper or simpler once valuation costs, legal work and timing risk are considered. In other cases, staying put looks easy but proves poorer value once the total cost is compared properly.",
          "That is why borrowers should treat convenience as one factor rather than the answer on its own. The decision is usually between staying, switching or timing the move differently, not simply between one headline rate and another.",
          "Once you compare those routes deliberately, it becomes much easier to see whether you are genuinely improving the mortgage or just moving costs into a different shape.",
        ],
      },
      {
        heading: "Questions worth asking before you commit",
        paragraphs: [
          "Before choosing a deal, ask how long you are likely to keep it, whether moving home is realistic, whether overpayments matter and whether a future early repayment charge could become restrictive. Those questions often reveal trade-offs that are easy to miss when the focus stays only on the monthly saving.",
          "A product with slightly higher cost can still be the more useful option if it suits your next likely move better. Practical flexibility is part of value, not something separate from it.",
        ],
      },
      {
        heading: "Why timing still matters even when the comparison looks positive",
        paragraphs: [
          "A remortgage that looks worthwhile on paper can still be handled badly if the timing is poor. Leaving the review too late can reduce choice and create avoidable pressure, while moving too early can mean paying charges that wipe out the benefit.",
          "The strongest remortgage decisions usually come from starting early enough to compare the options calmly, confirm the true costs and choose deliberately rather than react at the last minute.",
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
      {
        heading: "Why price alone can lead to the wrong decision",
        paragraphs: [
          "Budget matters, but a cheaper premium is not automatically better value if the cover does not match the financial problem you are trying to solve. The more useful question is whether the policy would change the outcome meaningfully for your household if the event actually happened.",
          "Once you frame the decision around the real need rather than the product label alone, it becomes easier to judge whether life cover, critical illness cover or a combination deserves priority within the budget you have available.",
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
      {
        heading: "Why early lender indications and final decisions can still differ",
        paragraphs: [
          "Borrowers are often surprised when an agreement in principle appears supportive but the full application is assessed more cautiously. In many cases that happens because the earlier stage uses a narrower set of inputs and assumptions than the later underwriting stage.",
          "Once the lender reviews documents, property details and fuller spending information, the picture can change. That does not make the earlier result useless. It simply means it was an initial checkpoint rather than the final lending decision.",
          "Used properly, an affordability estimate helps you avoid unrealistic searches and prepare for lender-specific questions. It should not be treated as confirmation that the final answer cannot move.",
        ],
      },
      {
        heading: "How borrowers can reduce unpleasant surprises",
        paragraphs: [
          "A practical way to reduce affordability surprises is to stress-test your own case honestly before applying. Think about which income is variable, whether any commitments are easy to overlook and whether the property or repayment basis could create extra policy sensitivity.",
          "That preparation does not remove lender differences, but it usually makes the gap between a broad online estimate and a real underwriting outcome easier to understand and manage.",
        ],
      },
      {
        heading: "Why the most generous figure is not always the most useful one",
        paragraphs: [
          "Borrowers sometimes focus on the highest number any calculator or lender might produce, but that can distract from the more useful question of what payment level still feels comfortable once the wider budget is taken seriously. A bigger number is not automatically a better outcome if it reduces resilience after you move.",
          "That is why affordability planning works best when it combines lender-style estimates with your own realistic view of spending, future flexibility and comfort under pressure. The goal is sustainable borrowing, not simply maximum borrowing.",
        ],
      },
      {
        heading: "Why a careful budget often beats a bigger headline number",
        paragraphs: [
          "The most useful affordability figure is usually the one that still leaves room for real life after the mortgage starts. That means considering not just whether borrowing is theoretically available, but whether it remains comfortable when rates, repairs and day-to-day costs are viewed realistically.",
          "In that sense, a slightly lower but more sustainable figure can be far more useful than a larger number that only works under optimistic assumptions.",
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
      {
        heading: "What to compare alongside the lender result",
        paragraphs: [
          "A useful landlord review usually goes beyond the stress figure and looks at mortgage cost, likely rent after realistic void assumptions, maintenance, insurance, tax position and a reserve for irregular repairs. The lender result tells you whether the case may finance. It does not tell you whether the property still feels commercially strong once real ownership costs are included.",
          "That distinction matters because some cases look acceptable for lending but feel far tighter once the investor’s own cash-flow view is applied. The broader analysis is what helps turn finance eligibility into a more confident investment decision.",
        ],
      },
      {
        heading: "Why passing the stress test is only the starting point",
        paragraphs: [
          "Even where a case passes comfortably, landlords still need to ask whether the property remains attractive after realistic costs and whether the deal fits the broader portfolio or investment plan. A lender’s willingness to lend is useful, but it is not the same thing as confirming that the property is the right commercial decision for you.",
          "That is why the strongest buy-to-let decisions usually combine lender affordability, cash-flow realism and strategic fit rather than relying on a single metric in isolation.",
        ],
      },
    ],
  },
  {
    slug: "uk-mortgages-for-expats",
    kind: "article",
    category: "Expat mortgages",
    title: "Getting a UK mortgage when you live abroad",
    description: "What UK expats are usually asked for, why lender choice narrows and how to prepare a stronger case.",
    readTime: "12 min read",
    published: "2026-07-02",
    updated: "2026-07-02",
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK AFFORDABILITY",
    relatedCalculatorTitle: "See an illustrative UK borrowing range",
    relatedCalculatorCta: "Check affordability",
    sections: [
      {
        heading: "Why expat mortgage cases are treated differently",
        paragraphs: [
          "A UK expat mortgage is usually treated as a more specialist case because the lender is assessing income, tax position, currency exposure and identity checks from outside the UK. That does not mean the case is impossible. It means fewer lenders are likely to fit and the documentation standard often needs to be tighter.",
          "Many borrowers are surprised by this because they may still be British citizens, may already own UK property or may intend to return in the future. From the lender’s perspective, however, residency affects risk, administration and policy. An applicant living in Dubai, Singapore or Australia is not usually assessed in quite the same way as someone paid in pounds and living in Manchester.",
          "The practical consequence is that expat borrowers should expect lender selection to matter more than headline rate shopping. The strongest early move is usually understanding which lenders actually lend in your circumstances rather than assuming the broad UK residential market is fully open to you.",
        ],
      },
      {
        heading: "Income and currency are central to the decision",
        paragraphs: [
          "Lenders commonly look closely at the source of income, the currency it is paid in, how stable it is and how easy it is to verify. Some are comfortable with major foreign currencies. Others prefer sterling income or apply haircuts when income is paid in a different currency from the mortgage.",
          "This matters because affordability is not only about the amount you earn. Exchange-rate movements can affect how that income looks against a sterling mortgage payment. Even where the salary is high, a lender may still discount it to reflect currency risk or income structure risk.",
          "Bonus, commission and self-employed income can add another layer. If your income is variable, earned through a company structure or spread across jurisdictions, the case can become more document-heavy and lender-specific. The issue is not always affordability itself. Often it is how comfortably the lender can evidence and rely on that income.",
        ],
        bullets: [
          "Check whether the lender accepts your income currency",
          "Expect some lenders to discount foreign-currency income",
          "Prepare clear evidence for bonus, commission or self-employed earnings",
        ],
      },
      {
        heading: "Documents usually matter more than borrowers expect",
        paragraphs: [
          "Expat cases often move more smoothly when documents are gathered before a property search becomes urgent. Lenders may ask for proof of address overseas, passport identification, employment contracts, payslips, bank statements, tax documents and details of existing UK commitments.",
          "If the case includes foreign-language documents, translated or certified copies may be needed. Time-zone differences and overseas banking arrangements can also slow verification if the paperwork is incomplete or inconsistent. What feels like a small missing detail to the borrower can create a larger delay during underwriting.",
          "That is why preparation matters disproportionately for expat borrowing. A clean pack of documents will not guarantee approval, but it often makes the lender’s decision easier and reduces avoidable friction later in the process.",
        ],
      },
      {
        heading: "Deposit, property type and intended use all affect options",
        paragraphs: [
          "Expat borrowers are often asked for larger deposits than standard UK residential applicants, particularly where the case is more complex or where the property use is less straightforward. Some lenders also draw sharper lines around flats, new-build property, unusual construction or investment-led purchases.",
          "Purpose matters too. Buying a home for your own use on return, purchasing a family property while working abroad, and building a UK buy-to-let portfolio can each fall into different parts of the lending market. The same borrower can look acceptable in one context and much harder to place in another.",
          "This is one reason broad mortgage headlines are not very useful for expat planning. The real question is whether lenders in the relevant expat niche like your residency profile, property plan, deposit position and income structure together.",
        ],
      },
      {
        heading: "Credit profile and UK footprint still matter",
        paragraphs: [
          "Living abroad does not remove the importance of UK credit history. Some lenders are more comfortable where the borrower has existing UK accounts, electoral roll links from prior residency, previous mortgage history or a continuing financial footprint that is easy to trace.",
          "That does not mean a thinner UK footprint is fatal. It does mean identity, anti-money-laundering checks and credit interpretation can become more sensitive. Borrowers who have been away for many years sometimes find that their UK file is lighter than expected, even though their finances are strong overall.",
          "Where that applies, it helps to review what UK credit data still exists and avoid making assumptions about how visible your profile will be to a lender before you apply.",
        ],
      },
      {
        heading: "How to prepare a stronger expat mortgage case",
        paragraphs: [
          "Start with clarity on four points: where you live, how you are paid, what you want to buy and when you need to act. From there, build a realistic deposit plan, organise documents early and treat affordability calculators as planning tools rather than lender decisions.",
          "An expat case usually becomes easier once the lender universe is narrowed properly. That means matching the case to policy appetite first, then comparing costs among the lenders that genuinely fit, rather than trying to force a mainstream route that was never likely to work well.",
          "Used that way, early planning can save time and improve the quality of the eventual application. It also gives you a better basis for deciding whether to proceed now, adjust the structure or wait until your circumstances are easier to place.",
        ],
      },
    ],
  },
  {
    slug: "returning-to-the-uk-mortgage-planning",
    kind: "article",
    category: "Expat mortgages",
    title: "Planning a mortgage if you are returning to the UK",
    description: "How returning expats should think about timing, evidence, employment changes and buying before or after relocation.",
    readTime: "12 min read",
    published: "2026-07-02",
    updated: "2026-07-02",
    relatedCalculatorSlug: "deposit",
    relatedCalculatorEyebrow: "PLAN YOUR DEPOSIT",
    relatedCalculatorTitle: "Estimate the deposit you may need",
    relatedCalculatorCta: "Estimate deposit",
    sections: [
      {
        heading: "Returning home does not automatically simplify the mortgage",
        paragraphs: [
          "Many returning expats assume that once they plan to move back to the UK, the mortgage becomes a standard residential case. Sometimes it does. Often it does not, at least not immediately. Timing, employment status and residency at the point of application still matter.",
          "A lender may ask whether you are already back in the UK, when overseas employment ends, whether you have a UK job lined up and how soon you expect to occupy the property. If several of those answers are still uncertain, the case may remain in specialist territory even if the long-term intention is clear.",
          "The core issue is that lenders prefer certainty. A return plan can be perfectly genuine and still leave underwriting questions if income, residence or occupation dates are not yet settled.",
        ],
      },
      {
        heading: "Buying before you return versus after you return",
        paragraphs: [
          "There is no universal right answer. Buying before relocation can help if you want a home ready for your return, but it may mean applying while still treated as an expat borrower. Buying after relocation may widen lender choice, but it can also delay your plans and require temporary housing or a transitional arrangement.",
          "The better option depends on how stable your timeline is. If you already have a confirmed UK role, a defined return date and a straightforward deposit source, buying ahead of the move may be workable. If employment or residency status is still moving, waiting can sometimes create a cleaner and cheaper case.",
          "This is a good example of why mortgage planning for returning expats is not only about affordability. It is also about which application route is likely to be simpler, more credible and better priced.",
        ],
      },
      {
        heading: "Employment evidence can change quickly during relocation",
        paragraphs: [
          "A common pressure point is the employment transition. If you are moving from overseas employment to a UK role, the lender may want to know when the new salary starts, whether probation applies, how guaranteed the role is and whether there is a gap between jobs.",
          "Even where the new income is strong, the way it is evidenced can affect lender choice. Some lenders are comfortable with signed contracts starting soon. Others want payslips from the new role or a longer settled period back in the UK.",
          "Borrowers should therefore avoid assuming that future UK income will always be treated the same as current salaried income. It may be acceptable, but policy detail matters.",
        ],
      },
      {
        heading: "Deposit source, savings movement and anti-money-laundering checks",
        paragraphs: [
          "Returning expats also need to think about where the deposit is held and how it will be moved. Overseas savings, foreign bank statements and cross-border transfers are normal, but they need to be evidenced clearly. Lenders and conveyancers usually want a clean trail showing where the money came from and how it reached the purchase.",
          "This becomes especially important if funds are being consolidated from several accounts, converted between currencies or supplemented by family support. None of those situations is unusual, but each one creates more scope for delay if the audit trail is weak.",
          "The practical lesson is simple: treat deposit-source paperwork as an early task, not an afterthought once a property has already been found.",
        ],
        bullets: [
          "Keep clear statements for overseas savings accounts",
          "Document significant transfers and currency conversions",
          "Prepare evidence early if part of the deposit is gifted",
        ],
      },
      {
        heading: "Budgeting for the real cost of a return",
        paragraphs: [
          "Mortgage planning should also account for the wider cost of relocating. The purchase may sit alongside moving expenses, shipping, temporary accommodation, school changes, travel, furnishing and a period of readjustment to UK living costs.",
          "That matters because a technically affordable mortgage can still feel too tight if the relocation itself absorbs more cash than expected. Returning households often benefit from protecting a larger cash buffer than they would use in a simple domestic move.",
          "A lender’s maximum figure is therefore only one part of the decision. Your own comfort after the move matters just as much.",
        ],
      },
      {
        heading: "A practical return-to-UK mortgage strategy",
        paragraphs: [
          "Start by deciding which of three scenarios best describes you: buying while still abroad, buying after a confirmed UK role is in place, or buying after you have already returned and re-established UK residency. Each route can work, but they are not equally easy from a lending perspective.",
          "Once the route is clear, map out the evidence the lender is likely to want: income proof, job contracts, passport and residency documents, deposit-source records and an honest view of when you will occupy the property. That usually produces a much more robust plan than beginning with headline mortgage rates alone.",
          "The better the timeline and documentation are defined, the easier it becomes to choose whether to apply now or position the case for a stronger application a little later.",
        ],
      },
    ],
  },
  {
    slug: "expat-remortgage-what-to-check",
    kind: "article",
    category: "Expats and remortgaging",
    title: "What expats should check before remortgaging a UK property",
    description: "The key issues for expats reviewing a UK mortgage, from rates and fees to lender policy, tenancy status and evidence.",
    readTime: "11 min read",
    published: "2026-07-02",
    updated: "2026-07-02",
    relatedCalculatorSlug: "remortgage-savings",
    relatedCalculatorEyebrow: "COMPARE SAVINGS",
    relatedCalculatorTitle: "Estimate whether remortgaging could save money",
    relatedCalculatorCta: "Compare remortgage savings",
    sections: [
      {
        heading: "The cheapest-looking deal may not be available to you",
        paragraphs: [
          "Expats reviewing an existing UK mortgage often start with the same question as any other borrower: can I get a lower rate? That is a fair question, but expat remortgaging usually turns first on eligibility and policy fit, then on headline price.",
          "A lender may be comfortable with a UK-resident remortgage case and much less comfortable once the borrower is living overseas, the income is foreign-currency based or the property use has changed since the original mortgage was taken. The gap between market headline rates and realistic expat options can therefore be wider than borrowers expect.",
          "That does not mean remortgaging is poor value. It means the comparison needs to begin with lenders that genuinely accept the case as it stands today rather than with products aimed at a different borrower profile.",
        ],
      },
      {
        heading: "Check how the property is currently used",
        paragraphs: [
          "A property that is owner-occupied, let to tenants, temporarily empty or intended for your return may sit in different lending categories. If the use of the property has changed since the current mortgage was arranged, that can materially affect the remortgage route.",
          "For example, a property originally bought for personal occupation may now be tenanted while you work abroad. In that situation, the lender’s view of risk, affordability and documentation may differ from the original application. Product transfers and external remortgages can both be affected by that change.",
          "The practical point is that expats should review the case based on the property’s current reality, not on how the mortgage was first set up years ago.",
        ],
      },
      {
        heading: "Total cost still matters more than headline rate",
        paragraphs: [
          "As with any remortgage, fees, early repayment charges, valuation costs and legal work all matter. In expat cases, those costs sit alongside the narrower lender pool, so the right deal is often the best realistic total-cost option rather than the lowest publicised rate in the wider UK market.",
          "Some borrowers also underestimate the cost of staying where they are. Reverting to a lender’s follow-on rate or missing the review window can be expensive, particularly where the lender does not offer an attractive internal option for overseas borrowers.",
          "A disciplined comparison should therefore include current lender options, external remortgage options that genuinely fit the case, and the cost of doing nothing.",
        ],
        bullets: [
          "Check the exact early repayment charge end date",
          "Compare internal product-transfer options as well as external switches",
          "Assess fees over the period you expect to keep the new deal",
        ],
      },
      {
        heading: "Income, residency and lender evidence can all have changed",
        paragraphs: [
          "Even if the property and loan feel familiar, a remortgage is still a new lending decision. The lender may reassess income evidence, overseas residency, tax position, tenancy details, bank statements and the source of any funds being introduced to the mortgage.",
          "Cases often become harder not because the borrower has done anything wrong, but because the current circumstances are more specialist than when the mortgage was first arranged. A move into self-employment, a change of country, a company-ownership structure or foreign-currency income can all narrow options.",
          "That is why expats should avoid assuming that a good payment history on the existing mortgage automatically means another lender will accept the case with minimal checks.",
        ],
      },
      {
        heading: "Loan-to-value and property value can change the outcome",
        paragraphs: [
          "The remortgage picture can improve significantly if the property value has risen or the balance has reduced enough to move the case into a better loan-to-value band. The reverse can also happen if the valuation comes back lower than expected or the available equity is tighter than assumed.",
          "For expat borrowers, that valuation point can be particularly important because the lender pool is already smaller. A weaker LTV can sometimes remove some of the more attractive specialist options and leave only a narrower range of deals.",
          "It is therefore worth testing the remortgage decision against more than one valuation assumption rather than building the whole plan around a best-case estimate.",
        ],
      },
      {
        heading: "How to review an expat remortgage sensibly",
        paragraphs: [
          "Start several months before the current deal ends. Confirm your property use, residency position, income structure and likely loan-to-value. Then compare the current lender’s options with lenders that actively support expat cases matching your profile.",
          "Use the numbers to test whether a switch genuinely saves money after fees, but do not stop at the numbers alone. Also ask whether the chosen route is realistic on evidence, timing and policy fit. That is the difference between a remortgage idea that looks good on paper and one that actually completes cleanly.",
          "In many expat cases, the best outcome comes from balancing three things at once: cost, lender appetite and operational simplicity.",
        ],
      },
    ],
  },
  {
    slug: "buy-to-let-for-uk-expats-what-changes",
    kind: "article",
    category: "Expat buy to let",
    title: "Buy-to-let for UK expats: what usually changes",
    description: "What overseas borrowers should expect when a UK property plan is investment-led rather than owner-occupied.",
    readTime: "11 min read",
    published: "2026-07-02",
    updated: "2026-07-02",
    relatedCalculatorSlug: "buy-to-let",
    relatedCalculatorEyebrow: "CHECK RENTAL COVER",
    relatedCalculatorTitle: "See whether the rent may support the mortgage",
    relatedCalculatorCta: "Check rental cover",
    sections: [
      {
        heading: "Expat buy-to-let is its own lending niche",
        paragraphs: [
          "A UK expat buying or refinancing a rental property is usually entering a more specialist market than a standard domestic buy-to-let borrower. The lender is not only looking at the property and the rent. It is also assessing overseas residency, income structure, tax position and how easy the case is to verify.",
          "That matters because some lenders are comfortable with straightforward domestic landlords but much more selective when the applicant lives abroad. The product pool can narrow quickly, and the right route often depends on policy detail rather than on generic buy-to-let headlines.",
          "For borrowers, the practical takeaway is that an expat buy-to-let case should be approached as a specialist placement exercise first and a rate comparison exercise second.",
        ],
      },
      {
        heading: "Rental stress testing still matters, but it is not the whole picture",
        paragraphs: [
          "Most lenders still want the expected rent to support the mortgage under a stress test. However, passing the rental calculation does not automatically mean the case will fit. Residency, currency, experience as a landlord and property type may still affect which lenders are prepared to proceed.",
          "This is why some overseas borrowers are confused when a buy-to-let calculator suggests the rent looks strong enough but the eventual lender pool still feels limited. The property numbers may work while the borrower profile remains more specialist.",
          "Used properly, the rental stress figure is a useful checkpoint. It just should not be mistaken for lender approval.",
        ],
      },
      {
        heading: "Tax and ownership structure can influence the plan",
        paragraphs: [
          "Some expat landlords buy in personal names, some through companies and others as part of broader property structures. The mortgage route, tax treatment and lender appetite can vary materially between those setups.",
          "Hub does not provide tax advice, but borrowers should recognise that tax planning and mortgage planning often interact in buy-to-let cases. A structure that appears efficient from one angle may create different financing constraints from another.",
          "That is one reason specialist professional advice tends to add more value in expat buy-to-let cases than in simpler mainstream borrowing scenarios.",
        ],
      },
      {
        heading: "Property type and location can narrow options further",
        paragraphs: [
          "Buy-to-let lenders already draw distinctions between flats, houses, HMOs, new-build units and properties with unusual construction or lease terms. When the borrower is also overseas, those distinctions can become sharper because the lender is stacking more than one policy filter at once.",
          "A case can therefore become restricted for two separate reasons: the borrower profile and the property profile. Understanding both matters early so that a purchase search is not built around assumptions the lender market will not support.",
          "This is especially relevant where a borrower is targeting a niche investment type because the yield looks attractive. Attractive yield does not automatically equal easy finance.",
        ],
      },
      {
        heading: "How to approach an expat buy-to-let case more sensibly",
        paragraphs: [
          "Start by testing the rent, the likely loan-to-value and the total deal costs, but also be clear about where you live, how you are paid and what ownership structure you intend to use. Those are all part of the placement, not background details to be dealt with later.",
          "A stronger strategy is usually to narrow the realistic lender universe first, then compare products within that narrower group. That saves time and reduces the risk of overcommitting to a property plan that is harder to finance than expected.",
          "In short, expat buy-to-let decisions work best when the investment idea and the financing route are checked together rather than separately.",
        ],
      },
      {
        heading: "What often catches expat landlords out",
        paragraphs: [
          "One common mistake is assuming a strong yield automatically means the finance will be easy. In practice, unusual property types, overseas residency and ownership-structure choices can narrow lender appetite even when the rent looks attractive on paper.",
          "Another is focusing on the initial mortgage payment while underestimating the ongoing cost of management, compliance, insurance and repairs. Where the case is already specialist, those commercial details matter even more because the financing route may be less flexible than in the broad domestic market.",
          "The more robust approach is to test the property as both an investment and a mortgage case from the beginning. That reduces the risk of finding a property first and discovering later that the finance is far less comfortable than expected.",
        ],
      },
      {
        heading: "A stronger expat buy-to-let process",
        paragraphs: [
          "The cases that tend to go best are the ones where the borrower tests lender appetite, rental strength and ownership structure together before becoming emotionally committed to a particular property. That sequence reduces avoidable surprises and usually produces a better financing conversation from the start.",
          "For overseas landlords, that extra preparation often matters more than small differences in headline pricing because the wrong property or structure can narrow options far more than expected.",
        ],
      },
    ],
  },
  {
    slug: "using-overseas-income-for-a-uk-mortgage",
    kind: "article",
    category: "Expat mortgages",
    title: "Using overseas income for a UK mortgage",
    description: "How lenders usually look at foreign-currency salary, variable earnings and evidence from abroad.",
    readTime: "11 min read",
    published: "2026-07-02",
    updated: "2026-07-02",
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "TEST THE NUMBERS",
    relatedCalculatorTitle: "Get an illustrative affordability starting point",
    relatedCalculatorCta: "Check affordability",
    sections: [
      {
        heading: "Overseas income can be acceptable, but not on the same terms everywhere",
        paragraphs: [
          "Many UK lenders that work in the expat space will consider overseas income, but the definition of acceptable income varies. Currency, employer type, country of residence, contract stability and how the income is documented can all change the lender pool.",
          "That is why two borrowers with similar salaries can receive very different outcomes. One may be paid a stable salary in a widely accepted currency with clean documents. Another may have a similar total income but with bonus-heavy pay, company ownership or a less familiar currency, which can create more caution.",
          "The central issue is not only how much you earn. It is how reliably the lender believes that income can be verified, converted and sustained against a sterling mortgage.",
        ],
      },
      {
        heading: "Foreign-currency income is often discounted",
        paragraphs: [
          "Some lenders apply a haircut to foreign-currency income to reflect exchange-rate risk. Others may accept only certain currencies or may become less comfortable where the mortgage payment would be in pounds but earnings are exposed to more volatility.",
          "This can be frustrating for borrowers because the nominal salary may look more than sufficient. From the lender’s side, the concern is that currency moves can change affordability without the borrower’s underlying job changing at all.",
          "As a result, an expat affordability estimate should be treated as a planning tool rather than a promise that every lender will use the same income figure in the same way.",
        ],
      },
      {
        heading: "Variable income and self-employment need stronger evidence",
        paragraphs: [
          "Bonus, commission, dividends and self-employed earnings are often usable, but they tend to require more evidence and more selective lender matching than a simple salaried case. Trends over time matter, and some lenders want a longer track record before relying on that income fully.",
          "This does not mean variable earnings are a problem by default. It means the case becomes more documentation-sensitive. The better the evidence pack is, the easier it is for a suitable lender to understand the story behind the numbers.",
          "Borrowers who assume that one year of strong earnings will always be enough often end up disappointed. Stability and explainability usually matter as much as peak income.",
        ],
      },
      {
        heading: "What documents usually strengthen the case",
        paragraphs: [
          "Payslips, contracts, bank statements, tax evidence and proof of overseas address are common starting points. Where the income structure is more complex, borrowers may also need company accounts, accountant references or extra evidence of how earnings are received.",
          "Consistency across those documents matters. If the lender sees unexplained differences between salary, bank credits and tax treatment, extra questions usually follow. Those questions are often manageable, but they can slow the case and narrow lender confidence if the answer is not ready.",
          "The practical way to think about this is that expat lending is often won by preparation rather than by rushing into an application first and fixing gaps later.",
        ],
        bullets: [
          "Gather income evidence before property search urgency builds",
          "Be ready to explain income structure in plain terms",
          "Check whether your currency and country are widely accepted",
        ],
      },
      {
        heading: "How to use affordability tools properly",
        paragraphs: [
          "An affordability calculator can help you frame a likely budget, compare deposit levels and stress-test whether a plan feels comfortable. What it cannot do is reflect the exact way a given lender will treat your income, currency or evidence.",
          "The best use of a calculator is to prepare sensible questions and narrow the property range you are exploring. Once the plan looks viable, the next step is usually lender-specific assessment rather than more generic headline comparisons.",
          "That approach is especially valuable for expats because policy differences between lenders are often wider than borrowers expect.",
        ],
      },
      {
        heading: "Why clear presentation of income makes a difference",
        paragraphs: [
          "Where the income structure is more complex, it helps to be able to explain it simply. What is fixed salary, what is variable, what currency is it paid in, how long has it been earned and which documents prove that clearly? Those questions are often more useful than assuming a high headline income will speak for itself.",
          "A lender-friendly case is usually one where the documents tell a consistent story quickly. That does not guarantee acceptance, but it does make the policy discussion easier and can widen the realistic lender pool compared with a rushed or poorly organised application.",
        ],
      },
      {
        heading: "What this means in practical mortgage planning",
        paragraphs: [
          "The practical implication is that overseas borrowers should build plans around realistic lender treatment of income rather than around the highest theoretical salary number. Once you do that, property ranges, deposit levels and timing decisions tend to become clearer and more defensible.",
          "That approach does not make the case simple, but it usually makes it more predictable. And in expat borrowing, predictability is often one of the most useful things you can create early.",
        ],
      },
    ],
  },
  {
    slug: "expat-deposit-source-checklist",
    kind: "article",
    category: "Expat mortgages",
    title: "Expat deposit source checks: what to prepare early",
    description: "How overseas savings, gifted deposits and cross-border transfers are usually checked in a UK property purchase.",
    readTime: "10 min read",
    published: "2026-07-02",
    updated: "2026-07-02",
    relatedCalculatorSlug: "deposit",
    relatedCalculatorEyebrow: "ESTIMATE DEPOSIT",
    relatedCalculatorTitle: "Estimate the deposit level you may need",
    relatedCalculatorCta: "Estimate deposit",
    sections: [
      {
        heading: "The deposit is not only about the amount",
        paragraphs: [
          "For expat borrowers, the size of the deposit matters, but the source and movement of the money often matter just as much. Lenders and conveyancers usually want to understand where the funds came from, how long they have been held and how they reached the UK purchase.",
          "This is not unique to expat cases, but overseas accounts, currency conversion and multiple cross-border transfers make the trail easier to disrupt if documents are collected late. A perfectly legitimate deposit can still cause delay if the paper trail is incomplete.",
          "The right way to think about this is that deposit-source evidence is part of the mortgage preparation process, not just part of the legal process after an offer is accepted.",
        ],
      },
      {
        heading: "Overseas savings should be easy to trace",
        paragraphs: [
          "If the deposit has been built from salary or retained savings abroad, statements should show how the money accumulated and where it was held. Large unexplained jumps in balances are more likely to trigger questions than regular visible saving behaviour.",
          "Where funds move between countries or accounts, keep records of the transfers and any currency conversions. A missing step in the chain often creates more friction than borrowers expect because the professionals involved need to be comfortable that the funds are legitimate and clearly sourced.",
          "This is one area where tidy records save disproportionate time later.",
        ],
      },
      {
        heading: "Gifted deposits and family support need clean evidence",
        paragraphs: [
          "If part of the deposit is a gift, lenders and conveyancers usually want to know who the donor is, where the money came from and whether it is repayable. The answers may sound obvious within a family, but they still need to be formalised in a way the lender can rely on.",
          "This can become more involved where the donor is also overseas, where funds move across jurisdictions or where the money has passed through several accounts before reaching the buyer. None of that is inherently a problem. It simply means more clarity is required.",
          "The earlier that gifted-deposit documents are prepared, the less likely the purchase is to stall later.",
        ],
      },
      {
        heading: "Cross-border timing can affect the property process",
        paragraphs: [
          "Currency transfers, banking checks and certified documentation can all take longer than borrowers expect. If the purchase timetable is already tight, delays in moving or evidencing funds can put pressure on exchange and completion planning.",
          "That is why expat buyers should think beyond the headline deposit percentage. The practical question is whether the money can be shown, moved and relied on in time for the transaction.",
          "In some cases it is worth organising the fund path before property negotiations become serious, even if the final amount is not yet fixed.",
        ],
      },
      {
        heading: "A practical expat deposit checklist",
        paragraphs: [
          "Before you make an offer, gather statements for the main deposit accounts, note any major transfers, keep records of currency conversion and identify whether any part of the deposit is a gift. If there is family support, make sure the donor is ready to provide the documents likely to be requested.",
          "This preparation does not remove every question, but it makes the questions much easier to answer. That usually means a smoother legal and mortgage process once the property search turns into a live purchase.",
          "In expat buying, document quality often creates more momentum than people expect.",
        ],
        bullets: [
          "Keep statements for the full deposit trail",
          "Record transfers and foreign-exchange movements clearly",
          "Prepare donor documents early if there is family help",
        ],
      },
      {
        heading: "What buyers should do before the offer stage",
        paragraphs: [
          "Before making an offer, it helps to decide which account will ultimately provide the deposit, whether any money still needs to be transferred and whether any donor documents or translations are still missing. Solving those questions early reduces the chance that the property process moves faster than the evidence pack.",
          "This is especially relevant where several family members, jurisdictions or currencies are involved. The more moving parts there are, the more valuable early simplification becomes.",
          "A cleaner fund path is not only easier to evidence. It is also easier to manage when exchange, completion dates and solicitor requests begin to accelerate.",
        ],
      },
      {
        heading: "Why deposit preparation supports the whole case",
        paragraphs: [
          "Good deposit records do more than satisfy a checklist. They help the mortgage, legal and anti-money-laundering parts of the transaction move with less friction. In expat purchases, that joined-up benefit is often underestimated until a delay appears.",
          "Put simply, the earlier you can make the money trail obvious, the more space you create to focus on the actual buying decision instead of on document recovery under time pressure.",
          "For cross-border purchases, that clarity can be one of the simplest ways to improve the overall quality of the case before it becomes urgent.",
        ],
      },
    ],
  },
];

export const resources = [...guides, ...articles];
export const getResource = (kind: Resource["kind"], slug: string) =>
  resources.find((item) => item.kind === kind && item.slug === slug);
