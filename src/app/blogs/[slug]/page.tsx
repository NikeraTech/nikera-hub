import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePage } from "@/components/resource-page";
import { articles, getResource } from "@/lib/resources";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams(){return articles.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const resource=getResource("article",(await params).slug);if(!resource)return {};const url=`/blogs/${resource.slug}`;return {title:resource.title,description:resource.description,alternates:{canonical:url},openGraph:{type:"article",url,title:resource.title,description:resource.description,publishedTime:resource.published,modifiedTime:resource.updated,section:resource.category},twitter:{card:"summary_large_image",title:resource.title,description:resource.description}};}
export default async function ArticleDetail({params}:Props){const resource=getResource("article",(await params).slug);if(!resource)notFound();return <ResourcePage resource={resource}/>;}
