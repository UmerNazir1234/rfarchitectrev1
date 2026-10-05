import type { Metadata } from "next";
import IndustryPage from "../_components/IndustryPage";
import { industryPages } from "@/data/industries";

const industry = industryPages.agencies;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: industry.canonical },
  openGraph: {
    title: `${industry.title} | RF Technologies`,
    description: industry.description,
    url: industry.canonical,
  },
  twitter: {
    title: `${industry.title} | RF Technologies`,
    description: industry.description,
  },
};

const AgenciesPage = () => <IndustryPage industry={industry} />;

export default AgenciesPage;