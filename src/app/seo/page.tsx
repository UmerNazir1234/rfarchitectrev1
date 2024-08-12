import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
const title = `RF Tech: Expert SEO Services for Online Visibility`;
const description = `RF Tech offers expert SEO services. Improve your search rankings, drive traffic, and grow your business with tailored strategies.`;
const URL = "/seo";

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
  return (
    <div>
      <Index />
    </div>
  );
};

export default page;
