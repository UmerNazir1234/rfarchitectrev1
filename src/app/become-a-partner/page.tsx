import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
const title = `RF Tech Partnership Opportunities - Collaborate with Us`;
const description = `Become a partner with RF Tech and unlock new opportunities. Collaborate on innovative digital marketing and development projects.

`;
const URL = "/become-a-partner";

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
