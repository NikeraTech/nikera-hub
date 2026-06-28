import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://hub.nikera.co.uk/sitemap.xml", host: "https://hub.nikera.co.uk" }; }
