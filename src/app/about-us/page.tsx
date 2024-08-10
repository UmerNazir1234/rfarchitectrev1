import React from "react";
import AboutUs from "./_component/AboutUs";
import { Metadata } from "next";
const title = `About BlueTicks - Revolutionizing Ticketing Experiences`;
const description = `Discover the story behind BlueTicks, a mobile-focused ticket platform transforming event experiences. Learn about our commitment to seamless ticketing, innovative features, and how we empower organizers. Join us on a journey to redefine the way you buy and sell tickets for sports, concerts, and more.`;
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
  return (
    <>
      <AboutUs />
    </>
  );
};

export default page;
