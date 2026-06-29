import { notFound } from "next/navigation";
import { getResource } from "@/lib/resources";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Nikera Hub article preview";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResource("article", slug);

  if (!resource) {
    notFound();
  }

  return createOgImage({
    eyebrow: resource.category,
    title: resource.title,
    description: resource.description,
    footer: `${resource.readTime} • Updated ${resource.updated}`,
  });
}
