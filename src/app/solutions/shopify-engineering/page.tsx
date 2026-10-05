import type { Metadata } from "next";
import Index from "@/app/shopify-development/_components/Index";

const title = "Shopify Engineering";
const description =
  "Shopify engineering across storefronts, integrations, and commerce operations, shaped around your business needs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions/shopify-engineering" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/solutions/shopify-engineering",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function ShopifyEngineeringPage() {
  return <Index />;
}
