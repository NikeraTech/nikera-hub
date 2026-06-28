import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage, BlogsPage, ContactPage, GuidesPage, MortgagePage, PrivacyPage, TermsPage } from "@/components/content-pages";

const pages={
 "mortgage-protection":{title:"Mortgage & Protection",description:"Practical mortgage calculators, plain-English protection guidance and access to professional support.",component:MortgagePage},
 guides:{title:"Expert Guides",description:"Plain-English guides for mortgages, protection, remortgaging and buying a home.",component:GuidesPage},
 blogs:{title:"Mortgage & Protection Insights",description:"Useful articles explaining mortgage markets, affordability, protection and property finance.",component:BlogsPage},
 about:{title:"About Hub",description:"Learn why Nikera Hub exists and how we approach financial education and practical tools.",component:AboutPage},
 contact:{title:"Contact Hub",description:"Contact Nikera Hub, ask a question or request professional mortgage and protection guidance.",component:ContactPage},
 privacy:{title:"Privacy Notice",description:"How Nikera Hub collects, uses, protects and shares personal information.",component:PrivacyPage},
 terms:{title:"Terms of Use",description:"The terms that apply when accessing Nikera Hub content, calculators and enquiry services.",component:TermsPage},
} as const;
type PageSlug=keyof typeof pages;
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params,page=pages[slug as PageSlug];return page?{title:page.title,description:page.description,alternates:{canonical:`/${slug}`}}:{}}
export default async function ContentPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params,page=pages[slug as PageSlug];if(!page)notFound();const Component=page.component;return <Component/>}
