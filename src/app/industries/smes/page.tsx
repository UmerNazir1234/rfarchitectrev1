import type { Metadata } from "next";
import IndustryPage from "../_components/IndustryPage";
import { industryPages } from "@/data/industries";

const industry = industryPages.smes;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: industry.canonical },
};

const SmesPage = () => <IndustryPage industry={industry} />;

export default SmesPage;