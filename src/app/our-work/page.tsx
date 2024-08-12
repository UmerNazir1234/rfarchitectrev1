import React from "react";
import OurWork from "./_components/OurWork";
import { Metadata } from "next";
const title = `Portfolio - RF Tech's Best Work & Case Studies`;
const description = `Explore RF Tech’s portfolio to see our successful projects and case studies. Discover how our digital solutions drive business results.`;
const URL = "/portfolio";

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
  return <OurWork />;
};

export default page;
