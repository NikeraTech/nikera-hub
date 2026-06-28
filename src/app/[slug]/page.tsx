import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
const pages: Record<string, { title: string; description: string }> = {
  "mortgage-protection": { title: "Mortgage & Protection", description: "Clear guidance and practical tools for your home and the people you care about." },
  calculators: { title: "Financial Calculators", description: "Simple tools designed to make important financial numbers easier to understand." },
  guides: { title: "Expert Guides", description: "Plain-English guidance for the financial decisions that matter." },
  blogs: { title: "Latest Insights", description: "Useful perspectives and timely financial knowledge from the Hub team." },
  about: { title: "About Hub", description: "Hub is a standalone knowledge platform by Nikera Technologies." },
  contact: { title: "Contact Hub", description: "Ask a question or request guidance from a trusted professional." },
  privacy: { title: "Privacy", description: "How Nikera Hub handles and protects your information." },
  terms: { title: "Terms", description: "The terms that apply when using Nikera Hub." },
};
export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = pages[slug]; return page ? { title: page.title, description: page.description } : {}; }
export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = pages[slug]; if (!page) notFound(); return <main id="main" className="basic-page"><div className="container"><span className="kicker">NIKERA HUB</span><h1>{page.title}</h1><p>{page.description}</p><div className="coming-panel"><span>Content in progress</span><h2>We’re building something useful here.</h2><p>This section is ready for the next set of trusted resources and practical tools.</p><Link href="/">Return home <ArrowIcon /></Link></div></div></main>; }
