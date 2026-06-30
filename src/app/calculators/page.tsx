import type { Metadata } from "next";
import { CalculatorDirectory } from "@/components/calculator-directory";
import { calculators } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "UK Mortgage & Protection Calculators",
  description:
    "Free UK mortgage and protection calculators for repayments, affordability, remortgaging, deposit planning and cover estimates.",
  path: "/calculators",
  keywords: [
    "UK mortgage calculator",
    "UK affordability calculator",
    "UK remortgage calculator",
    "UK protection calculator",
    "UK deposit calculator",
  ],
  category: "Financial calculators",
});
export default function CalculatorsPage(){ return <main id="main" className="listing-page"><div className="container"><span className="kicker">FREE FINANCIAL TOOLS</span><h1>Calculators built for clarity.</h1><p className="listing-intro">Explore the numbers behind important mortgage and protection decisions. Results are illustrative and are not financial advice.</p><CalculatorDirectory items={calculators}/></div></main>; }
