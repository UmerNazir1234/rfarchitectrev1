import type { Metadata } from "next";
import IndustryPage from "../_components/IndustryPage";
import { industryPages } from "@/data/industries";

const industry = industryPages.ecommerce;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: industry.canonical },
};

const EcommercePage = () => <IndustryPage industry={industry} />;

export default EcommercePage;