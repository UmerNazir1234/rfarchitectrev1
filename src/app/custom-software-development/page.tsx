import React from "react";
import Index from "./_component/Index";

import { Metadata } from "next";
const title = `RF Tech: Expert Custom Software Development`;
const description = `RF Tech provides custom software development services, creating tailored solutions to meet your business needs and drive success.`;
const URL = "/custom-software-development";

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
const pages = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default pages;
