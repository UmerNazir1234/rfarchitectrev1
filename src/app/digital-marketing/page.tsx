import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
const title = `RF Tech: Expert Digital Marketing Solutions for Your Business`;
const description = `RF Tech offers comprehensive digital marketing services. Drive growth with customized strategies in SEO, social media, PPC, and more.`;
const URL = "/digital-marketing";

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
