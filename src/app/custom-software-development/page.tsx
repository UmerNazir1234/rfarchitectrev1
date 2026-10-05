import React from "react";
import Index from "./_component/Index";

import { Metadata } from "next";
const title = `Custom Software`;
const description = `Purpose-built software to connect workflows, systems, and business operations.`;
const URL = "/solutions/custom-software";

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
const pages = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default pages;
