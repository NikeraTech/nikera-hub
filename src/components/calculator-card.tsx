import Link from "next/link";
import { ArrowIcon } from "./icons";
import type { Calculator } from "@/lib/calculators";
export function CalculatorCard({ item }: { item: Calculator }) { return <article className="content-card calculator-card"><div className="calculator-icon">{item.icon}</div><span className="time-pill">FREE · INSTANT RESULT</span><small className="calculator-category">{item.category}</small><h3>{item.shortTitle}</h3><p>{item.description}</p><Link href={`/calculators/${item.slug}`}>Try calculator <ArrowIcon /></Link></article>; }
