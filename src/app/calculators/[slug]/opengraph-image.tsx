import { notFound } from "next/navigation";
import { getCalculator } from "@/lib/calculators";
import { createOgImage, getOgTheme, ogContentType, ogSize } from "@/lib/og";

export const alt = "Nikera Hub calculator preview";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calculator = getCalculator(slug);

  if (!calculator) {
    notFound();
  }

  return createOgImage({
    eyebrow: calculator.category,
    title: calculator.title,
    description: calculator.description,
    footer: "Illustrative result • No obligation",
    theme: getOgTheme(`${calculator.category} calculator ${calculator.slug}`),
  });
}
