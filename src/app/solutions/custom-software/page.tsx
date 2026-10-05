import type { Metadata } from "next";
import Index from "@/app/custom-software-development/_component/Index";

const title = "Custom Software";
const description =
  "Purpose-built software to connect workflows, systems, and business operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions/custom-software" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/solutions/custom-software",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

export default function CustomSoftwarePage() {
  return <Index />;
}
