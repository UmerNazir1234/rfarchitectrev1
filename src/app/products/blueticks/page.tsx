import type { Metadata } from "next";
import Blueticks from "@/app/blueticks/_components/Blueticks";

const title = "BlueTicks";
const description =
  "BlueTicks is an e-ticketing platform for managing and promoting events, ticket sales, pricing, and branded experiences.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/blueticks" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/products/blueticks",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function BlueTicksProductPage() {
  return <Blueticks />;
}
