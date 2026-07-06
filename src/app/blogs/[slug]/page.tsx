import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePage } from "@/components/resource-page";
import { articles, getResource } from "@/lib/resources";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resource = getResource("article", (await params).slug);

  return resource
    ? buildMetadata({
        title: resource.title,
        description: resource.description,
        path: `/blogs/${resource.slug}`,
        keywords: resource.keywords ?? [
          resource.category,
          resource.title,
          "UK mortgage article",
          "Nikera Hub article",
        ],
        category: resource.category,
        type: "article",
        publishedTime: resource.published,
        modifiedTime: resource.updated,
        section: resource.category,
      })
    : {};
}

export default async function ArticleDetail({ params }: Props) {
  const resource = getResource("article", (await params).slug);

  if (!resource) notFound();

  return <ResourcePage resource={resource} />;
}
