import type { Metadata } from "next";
import { CalculatorDirectory } from "@/components/calculator-directory";
import { calculators } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Financial Calculators",
  description: "Free mortgage and protection calculators providing quick, illustrative results.",
  path: "/calculators",
  keywords: ["mortgage calculator", "affordability calculator", "remortgage calculator", "protection calculator"],
  category: "Financial calculators",
});
export default function CalculatorsPage(){ return <main id="main" className="listing-page"><div className="container"><span className="kicker">FREE FINANCIAL TOOLS</span><h1>Calculators built for clarity.</h1><p className="listing-intro">Explore the numbers behind important mortgage and protection decisions. Results are illustrative and are not financial advice.</p><CalculatorDirectory items={calculators}/></div></main>; }
