import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { articles, guides } from "@/lib/resources";

const baseUrl = "https://hub.nikera.co.uk";
const staticLastModified = "2026-07-02";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/mortgage-protection`, lastModified: staticLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/expat-mortgages`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 0.82 },
    { url: `${baseUrl}/calculators`, lastModified: staticLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/guides`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/blogs`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: staticLastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: staticLastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/request-advice`, lastModified: staticLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: staticLastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: staticLastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const calculatorPages: MetadataRoute.Sitemap = calculators.map(({ slug }) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map(({ slug, updated }) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map(({ slug, updated }) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...calculatorPages, ...guidePages, ...articlePages];
}
