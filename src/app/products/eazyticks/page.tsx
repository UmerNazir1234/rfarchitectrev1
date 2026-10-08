import type { Metadata } from "next";
import Blueticks from "@/app/blueticks/_components/Blueticks";

const title = "EazyTicks";
const description =
  "EazyTicks is a mobile-focused ticketing platform that helps organizations create, manage, and sell tickets for sports, concerts, theater, and other live events.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/eazyticks" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/products/eazyticks",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function EazyTicksProductPage() {
  return <Blueticks />;
}
