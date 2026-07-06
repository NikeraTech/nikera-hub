import type { Metadata } from "next";
import { RequestAdvicePage } from "@/components/content-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request Professional Advice",
  description:
    "Request professional UK mortgage and protection advice with a no-obligation enquiry through Nikera Hub.",
  path: "/request-advice",
  keywords: ["request mortgage advice", "UK protection advice", "Nikera Hub advice request"],
  category: "Contact",
});

export default function RequestAdviceRoute() {
  return <RequestAdvicePage />;
}
