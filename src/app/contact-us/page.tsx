import React from "react";
import Hero from "@/components/Hero";
import contact from "@/data/contact";
import ContactForm from "./_components/ContactForm";
import GetInTouch from "./_components/GetInTouch";
import { Metadata } from "next";
const title = `Contact Us - Get in Touch with RF Tech
`;
const description = `Have questions or need assistance? Contact RF Tech today. We're here to help with your digital marketing, web development, and more.`;
const URL = "/contact-us";

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
  const { banner, conactform, getInTouch } = contact;
  return (
    <>
      <Hero image={banner?.image} title={banner?.title} />
      <ContactForm data={conactform} />
      <GetInTouch data={getInTouch} />
    </>
  );
};

export default page;
