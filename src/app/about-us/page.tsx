import React from "react";
import AboutUs from "./_component/AboutUs";
import { Metadata } from "next";
const title = `About Us - Discover RF Tech's Mission & Expertise`;
const description = `Explore the story behind RF Tech. Find out how our commitment to innovation and excellence drives our digital marketing and development services.
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
