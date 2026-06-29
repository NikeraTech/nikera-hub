"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Calculator } from "@/lib/calculators";

type Field = {
  key: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
};

type Result = { label: string; value: string; note: string; rows: Array<[string, string]> };

const money = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(Math.max(0, n));

const monthly = (loan: number, rate: number, years: number) => {
  const n = years * 12;
  const r = rate / 1200;
  return r === 0 ? loan / n : (loan * r * (1 + r) ** n) / ((1 + r) ** n - 1);
};

const configs: Record<string, Field[]> = {
  "mortgage-affordability": [
    { key: "income", label: "Your annual income", value: 45000, prefix: "£" },
    { key: "secondIncome", label: "Second applicant income", value: 25000, prefix: "£" },
    { key: "commitments", label: "Monthly credit commitments", value: 300, prefix: "£" },
    { key: "deposit", label: "Available deposit", value: 30000, prefix: "£" },
  ],
  "mortgage-repayment": [
    { key: "loan", label: "Mortgage amount", value: 250000, prefix: "£" },
    { key: "rate", label: "Interest rate", value: 4.5, suffix: "%", step: 0.1 },
    { key: "years", label: "Mortgage term", value: 25, suffix: "years", min: 1, max: 40 },
    { key: "interestOnly", label: "Interest-only (1 = yes, 0 = no)", value: 0, min: 0, max: 1, step: 1 },
  ],
  "stamp-duty": [
    { key: "price", label: "Property price", value: 350000, prefix: "£" },
    { key: "firstTime", label: "First-time buyer (1 = yes, 0 = no)", value: 1, min: 0, max: 1, step: 1 },
  ],
  "remortgage-savings": [
    { key: "balance", label: "Mortgage balance", value: 220000, prefix: "£" },
    { key: "currentRate", label: "Current interest rate", value: 6, suffix: "%", step: 0.1 },
    { key: "newRate", label: "Potential new rate", value: 4.5, suffix: "%", step: 0.1 },
    { key: "years", label: "Remaining term", value: 20, suffix: "years", min: 1, max: 40 },
    { key: "fees", label: "New deal fees", value: 999, prefix: "£" },
  ],
  "life-insurance": [
    { key: "mortgage", label: "Outstanding mortgage", value: 220000, prefix: "£" },
    { key: "debts", label: "Other debts", value: 15000, prefix: "£" },
    { key: "income", label: "Annual family income to replace", value: 30000, prefix: "£" },
    { key: "years", label: "Years of income support", value: 10, suffix: "years" },
    { key: "savings", label: "Existing savings and cover", value: 30000, prefix: "£" },
  ],
  "income-protection": [
    { key: "income", label: "Gross annual income", value: 45000, prefix: "£" },
    { key: "replacement", label: "Target replacement", value: 60, suffix: "%", min: 1, max: 70 },
    { key: "existing", label: "Monthly existing benefit", value: 0, prefix: "£" },
  ],
  "critical-illness": [
    { key: "mortgage", label: "Outstanding mortgage", value: 220000, prefix: "£" },
    { key: "debts", label: "Other debts", value: 15000, prefix: "£" },
    { key: "recovery", label: "Recovery and adaptation fund", value: 25000, prefix: "£" },
    { key: "existing", label: "Existing critical illness cover", value: 0, prefix: "£" },
  ],
  overpayment: [
    { key: "balance", label: "Mortgage balance", value: 220000, prefix: "£" },
    { key: "rate", label: "Interest rate", value: 4.5, suffix: "%", step: 0.1 },
    { key: "years", label: "Remaining term", value: 25, suffix: "years", min: 1, max: 40 },
    { key: "overpayment", label: "Monthly overpayment", value: 200, prefix: "£" },
  ],
  "buy-to-let": [
    { key: "loan", label: "Proposed mortgage", value: 175000, prefix: "£" },
    { key: "rent", label: "Expected monthly rent", value: 1200, prefix: "£" },
    { key: "rate", label: "Rental stress rate", value: 5.5, suffix: "%", step: 0.1 },
    { key: "coverage", label: "Required rental coverage", value: 125, suffix: "%", min: 100, max: 200 },
  ],
  "loan-to-value": [
    { key: "price", label: "Property value", value: 300000, prefix: "£" },
    { key: "deposit", label: "Deposit", value: 45000, prefix: "£" },
  ],
  deposit: [
    { key: "price", label: "Property price", value: 300000, prefix: "£" },
    { key: "ltv", label: "Target loan-to-value", value: 85, suffix: "%", min: 1, max: 100 },
  ],
  "interest-only": [
    { key: "loan", label: "Mortgage amount", value: 250000, prefix: "£" },
    { key: "rate", label: "Interest rate", value: 4.5, suffix: "%", step: 0.1 },
    { key: "years", label: "Mortgage term", value: 25, suffix: "years", min: 1, max: 40 },
  ],
  "debt-to-income": [
    { key: "income", label: "Gross annual household income", value: 60000, prefix: "£" },
    { key: "commitments", label: "Monthly credit commitments", value: 500, prefix: "£" },
  ],
  "early-repayment-charge": [
    { key: "balance", label: "Mortgage balance being repaid", value: 200000, prefix: "£" },
    { key: "ercRate", label: "Early repayment charge rate", value: 2, suffix: "%", step: 0.1 },
    { key: "fees", label: "Administration fees", value: 100, prefix: "£" },
  ],
  "protection-needs": [
    { key: "mortgage", label: "Outstanding mortgage", value: 220000, prefix: "£" },
    { key: "income", label: "Annual income to replace", value: 30000, prefix: "£" },
    { key: "years", label: "Years of income support", value: 10, suffix: "years", min: 0, max: 40 },
    { key: "existing", label: "Existing savings and cover", value: 50000, prefix: "£" },
  ],
};

function stampDuty(price: number, first: boolean) {
  if (first && price <= 500000) return Math.max(0, price - 300000) * 0.05;
  const bands: [[number, number], ...Array<[number, number]>] = [
    [125000, 0],
    [250000, 0.02],
    [925000, 0.05],
    [1500000, 0.1],
    [Infinity, 0.12],
  ];
  let tax = 0;
  let from = 0;
  for (const [to, rate] of bands) {
    tax += Math.max(0, Math.min(price, to) - from) * rate;
    if (price <= to) break;
    from = to;
  }
  return tax;
}

function payoff(balance: number, rate: number, payment: number) {
  const r = rate / 1200;
  let months = 0;
  let interest = 0;
  while (balance > 0.01 && months < 1200) {
    const charge = balance * r;
    if (payment <= charge) return { months: 1200, interest: Infinity };
    interest += charge;
    balance = balance + charge - payment;
    months++;
  }
  return { months, interest };
}

function calculate(slug: string, v: Record<string, number>): Result {
  if (slug === "mortgage-affordability") {
    const borrowing = Math.max(0, (v.income + v.secondIncome) * 4.5 - v.commitments * 12);
    return {
      label: "Estimated borrowing",
      value: money(borrowing),
      note: "Uses an illustrative 4.5× income multiple, adjusted for stated commitments.",
      rows: [["Indicative property budget", money(borrowing + v.deposit)], ["Deposit", money(v.deposit)]],
    };
  }
  if (slug === "mortgage-repayment") {
    const capital = monthly(v.loan, v.rate, v.years);
    const interestOnly = (v.loan * v.rate) / 1200;
    const payment = v.interestOnly === 1 ? interestOnly : capital;
    const total = payment * v.years * 12;
    return {
      label: v.interestOnly === 1 ? "Monthly interest-only payment" : "Monthly capital-and-interest payment",
      value: money(payment),
      note:
        v.interestOnly === 1
          ? "The original mortgage balance remains due at the end of the term."
          : "Assumes a constant rate and full repayment over the selected term.",
      rows: [
        ["Capital-and-interest payment", money(capital)],
        ["Interest-only payment", money(interestOnly)],
        ["Total payments over term", money(total)],
      ],
    };
  }
  if (slug === "stamp-duty") {
    const tax = stampDuty(v.price, v.firstTime === 1);
    return {
      label: "Estimated Stamp Duty",
      value: money(tax),
      note: "England and Northern Ireland only. Excludes additional-property and non-resident surcharges.",
      rows: [
        ["Effective tax rate", `${((tax / v.price) * 100 || 0).toFixed(2)}%`],
        ["Purchase price", money(v.price)],
      ],
    };
  }
  if (slug === "remortgage-savings") {
    const oldPayment = monthly(v.balance, v.currentRate, v.years);
    const newPayment = monthly(v.balance, v.newRate, v.years);
    const saving = oldPayment - newPayment;
    return {
      label: "Potential monthly saving",
      value: money(saving),
      note: "Comparison assumes the same balance, term and repayment basis.",
      rows: [
        ["Current repayment", money(oldPayment)],
        ["Potential repayment", money(newPayment)],
        ["First-year saving after fees", money(saving * 12 - v.fees)],
      ],
    };
  }
  if (slug === "life-insurance") {
    const cover = v.mortgage + v.debts + v.income * v.years - v.savings;
    return {
      label: "Illustrative cover amount",
      value: money(cover),
      note: "A needs-based starting point; it does not account for every personal circumstance.",
      rows: [
        ["Liabilities and income need", money(v.mortgage + v.debts + v.income * v.years)],
        ["Existing resources", money(v.savings)],
      ],
    };
  }
  if (slug === "income-protection") {
    const benefit = Math.max(0, (v.income / 12) * v.replacement / 100 - v.existing);
    return {
      label: "Illustrative monthly benefit",
      value: money(benefit),
      note: "Providers apply their own maximum benefits, definitions, tax treatment and underwriting.",
      rows: [
        ["Target replacement", `${v.replacement}%`],
        ["Existing monthly benefit", money(v.existing)],
      ],
    };
  }
  if (slug === "critical-illness") {
    const cover = v.mortgage + v.debts + v.recovery - v.existing;
    return {
      label: "Illustrative cover amount",
      value: money(cover),
      note: "A simple needs estimate; policy definitions, exclusions and medical underwriting vary.",
      rows: [
        ["Total identified need", money(v.mortgage + v.debts + v.recovery)],
        ["Existing cover", money(v.existing)],
      ],
    };
  }
  if (slug === "overpayment") {
    const base = monthly(v.balance, v.rate, v.years);
    const normal = payoff(v.balance, v.rate, base);
    const faster = payoff(v.balance, v.rate, base + v.overpayment);
    const saved = normal.interest - faster.interest;
    return {
      label: "Potential interest saved",
      value: money(saved),
      note: "Assumes the rate and overpayment remain constant and no early-repayment charge applies.",
      rows: [
        ["Time saved", `${Math.floor((normal.months - faster.months) / 12)} years ${(normal.months - faster.months) % 12} months`],
        ["New monthly payment", money(base + v.overpayment)],
      ],
    };
  }
  if (slug === "loan-to-value") {
    const loan = Math.max(0, v.price - v.deposit);
    const ltv = v.price ? (loan / v.price) * 100 : 0;
    return {
      label: "Loan-to-value",
      value: `${ltv.toFixed(1)}%`,
      note: "LTV is the mortgage amount as a percentage of the property value.",
      rows: [
        ["Mortgage amount", money(loan)],
        ["Deposit", money(v.deposit)],
        ["Deposit percentage", `${(v.price ? (v.deposit / v.price) * 100 : 0).toFixed(1)}%`],
      ],
    };
  }
  if (slug === "deposit") {
    const loan = (v.price * v.ltv) / 100;
    const deposit = v.price - loan;
    return {
      label: "Deposit required",
      value: money(deposit),
      note: "Based on the property price and target loan-to-value entered.",
      rows: [
        ["Mortgage amount", money(loan)],
        ["Deposit percentage", `${(100 - v.ltv).toFixed(1)}%`],
        ["Target LTV", `${v.ltv.toFixed(1)}%`],
      ],
    };
  }
  if (slug === "interest-only") {
    const payment = (v.loan * v.rate) / 1200;
    const total = payment * v.years * 12;
    return {
      label: "Monthly interest-only payment",
      value: money(payment),
      note: "The full mortgage capital remains outstanding at the end of the term.",
      rows: [
        ["Total interest over term", money(total)],
        ["Capital due at term end", money(v.loan)],
      ],
    };
  }
  if (slug === "debt-to-income") {
    const annualDebt = v.commitments * 12;
    const ratio = v.income ? (annualDebt / v.income) * 100 : 0;
    return {
      label: "Debt-to-income ratio",
      value: `${ratio.toFixed(1)}%`,
      note: "Compares annual committed credit payments with gross annual household income.",
      rows: [
        ["Annual credit commitments", money(annualDebt)],
        ["Gross annual income", money(v.income)],
      ],
    };
  }
  if (slug === "early-repayment-charge") {
    const charge = (v.balance * v.ercRate) / 100;
    const total = charge + v.fees;
    return {
      label: "Estimated total charge",
      value: money(total),
      note: "Your lender’s ERC may apply only to the amount repaid and can vary during the deal period.",
      rows: [
        ["Percentage charge", money(charge)],
        ["Administration fees", money(v.fees)],
        ["ERC rate", `${v.ercRate.toFixed(2)}%`],
      ],
    };
  }
  if (slug === "protection-needs") {
    const need = v.mortgage + v.income * v.years;
    const gap = Math.max(0, need - v.existing);
    return {
      label: "Illustrative protection gap",
      value: money(gap),
      note: "A simple starting estimate, not a personal insurance recommendation.",
      rows: [
        ["Mortgage and income need", money(need)],
        ["Existing savings and cover", money(v.existing)],
      ],
    };
  }
  const stressedInterest = (v.loan * v.rate) / 100;
  const requiredRent = (stressedInterest * v.coverage) / 100 / 12;
  const actualCover = stressedInterest ? (v.rent * 12) / stressedInterest * 100 : 0;
  const passes = v.rent >= requiredRent;
  return {
    label: passes ? "Rental stress test passes" : "Rental stress shortfall",
    value: passes ? money(v.rent - requiredRent) : money(requiredRent - v.rent),
    note: "Indicative only. Lenders use different stress rates, coverage ratios and underwriting rules.",
    rows: [
      ["Required monthly rent", money(requiredRent)],
      ["Actual rental coverage", `${actualCover.toFixed(0)}%`],
      ["Required coverage", `${v.coverage.toFixed(0)}%`],
    ],
  };
}

function buildCalculatorContext(calculator: Calculator, fields: Field[], values: Record<string, number>, result: Result) {
  return [
    `Calculator: ${calculator.title}`,
    `Result: ${result.label} - ${result.value}`,
    `Summary: ${result.note}`,
    "",
    "Inputs:",
    ...fields.map((field) => `${field.label}: ${field.prefix ?? ""}${values[field.key]}${field.suffix ? ` ${field.suffix}` : ""}`),
    "",
    "Breakdown:",
    ...result.rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

function getInitialValues(fields: Field[]) {
  const defaults = Object.fromEntries(fields.map((field) => [field.key, field.value]));

  if (typeof window === "undefined") {
    return defaults;
  }

  const params = new URLSearchParams(window.location.search);

  if (!params.size) {
    return defaults;
  }

  const next = { ...defaults };

  for (const field of fields) {
    const raw = params.get(field.key);

    if (raw === null) {
      continue;
    }

    const parsed = Number(raw);

    if (!Number.isFinite(parsed)) {
      continue;
    }

    next[field.key] = parsed;
  }

  return next;
}

export function CalculatorTool({ calculator }: { calculator: Calculator }) {
  const fields = configs[calculator.slug];
  const [values, setValues] = useState<Record<string, number>>(() => getInitialValues(fields));

  const result = useMemo(() => calculate(calculator.slug, values), [calculator.slug, values]);

  const adviceHref = useMemo(() => {
    const params = new URLSearchParams({
      topic: calculator.category === "Protection" ? "Protection advice" : "Mortgage advice",
      calculator: calculator.title,
      calculatorContext: buildCalculatorContext(calculator, fields, values, result),
    });
    return `/contact?${params.toString()}`;
  }, [calculator, fields, result, values]);

  return (
    <div className="tool-grid">
      <form className="calculator-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Your details</h2>
        <p>Adjust the figures to update your result instantly.</p>
        {fields.map((field) => (
          <label key={field.key}>
            {field.label}
            <span className="field-wrap">
              {field.prefix && <i>{field.prefix}</i>}
              <input
                type="number"
                value={values[field.key]}
                min={field.min ?? 0}
                max={field.max}
                step={field.step ?? 1}
                onChange={(e) => setValues({ ...values, [field.key]: Number(e.target.value) })}
              />
              {field.suffix && <i>{field.suffix}</i>}
            </span>
          </label>
        ))}
      </form>
      <aside className="calculator-result" aria-live="polite">
        <span>YOUR ILLUSTRATIVE RESULT</span>
        <h2>{result.label}</h2>
        <strong>{result.value}</strong>
        <p>{result.note}</p>
        <dl>
          {result.rows.map(([key, value]) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="result-advice">
          <b>Need personalised advice?</b>
          <p>A trusted adviser can review your circumstances and explain your options.</p>
          <Link href={adviceHref}>Request professional advice →</Link>
        </div>
      </aside>
    </div>
  );
}
