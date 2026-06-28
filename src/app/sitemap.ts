import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/mortgage-protection", "/calculators", ...calculators.map(({slug})=>`/calculators/${slug}`), "/guides", "/blogs", "/about", "/contact", "/privacy", "/terms"]; return paths.map((path) => ({ url: `https://hub.nikera.co.uk${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path.startsWith("/calculators") ? .8 : .7 })); }
