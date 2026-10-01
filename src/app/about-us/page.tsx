import React from "react";
import AboutUs from "./_component/AboutUs";
import { Metadata } from "next";
const title = `About RF Technologies | Digital Products & Commerce Partner`;
const description = `Meet RF Technologies, a technology partner for digital products and commerce. We solve business problems using technology through Shopify engineering, product engineering, and long-term partnership.
`;
const URL = "/about-us";

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
  return <AboutUs />;
};

export default page;
