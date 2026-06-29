import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
import { articles, guides } from "@/lib/resources";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/mortgage-protection", "/calculators", ...calculators.map(({slug})=>`/calculators/${slug}`), "/guides", ...guides.map(({slug})=>`/guides/${slug}`), "/blogs", ...articles.map(({slug})=>`/blogs/${slug}`), "/about", "/contact", "/privacy", "/terms"]; return paths.map((path) => ({ url: `https://hub.nikera.co.uk${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path.startsWith("/calculators") || path.startsWith("/guides/") || path.startsWith("/blogs/") ? .8 : .7 })); }
