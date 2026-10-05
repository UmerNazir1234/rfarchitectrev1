import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
const title = `Shopify Engineering`;
const description = `Shopify engineering across storefronts, integrations, and commerce operations, shaped around your business needs.`;
const URL = "/solutions/shopify-engineering";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: `${title} | RF Technologies`,
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
