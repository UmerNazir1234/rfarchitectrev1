import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
import content from "@/data/crm";
const title = `CRM Development Services - Custom Solutions for Your Business`;
const description = `Optimize your customer management with RF Tech's CRM development. Custom solutions designed to drive business efficiency and growth.`;
const URL = "/crm-development";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title,
    description,
    url: URL,
  },
  twitter: {
    title,
    description,
    
  },
};
const page = () => {
  return <Index />;
};

export default page;
