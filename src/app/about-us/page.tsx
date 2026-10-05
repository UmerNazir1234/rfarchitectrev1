import React from "react";
import AboutUs from "./_component/AboutUs";
import { Metadata } from "next";
const title = `About`;
const description = `Meet RF Technologies, a Digital Product, Commerce & Technology Partner. We solve business problems using Shopify engineering, product engineering, custom software, and long-term technical partnership.
`;
const URL = "/about-us";

export const metadata: Metadata = {
  title: `${title} | Digital Product, Commerce & Technology Partner`,
  description,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: `${title} | Digital Product, Commerce & Technology Partner | RF Technologies`,
    description,
    url: URL,
  },
  twitter: {
    title: `${title} | Digital Product, Commerce & Technology Partner | RF Technologies`,
    description,
  },
};
const page = () => {
  return <AboutUs />;
};

export default page;
