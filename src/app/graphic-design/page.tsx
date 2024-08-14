import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";

const title = `RF Tech: Expert Graphic Design for Your Brand`;
const description = `Elevate your brand with RF Tech's graphic design services. Custom, visually stunning designs tailored to your business needs.
`;
const URL = "/graphic-design";

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
