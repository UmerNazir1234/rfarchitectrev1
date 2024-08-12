import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
const title = `RF Tech: Professional Shopify Development Services`;
const description = `Unlock e-commerce success with RF Tech's Shopify development services. Custom solutions to grow and optimize your online store`;
const URL = "/";

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
