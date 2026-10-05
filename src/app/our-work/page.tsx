import React from "react";
import OurWork from "./_components/OurWork";
import { Metadata } from "next";
const title = `Work & Case Studies`;
const description = `Explore RF Technologies case studies to see the business challenges, approaches, and digital solutions behind our client work.`;
const URL = "/our-work";

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
    title: `${title} | RF Technologies`,
    description,
  },
};
const page = () => {
  return <OurWork />;
};

export default page;
