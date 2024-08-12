import Index from "./_components/Index";

import { Metadata } from "next";
const title = `FAQs - Common Questions About RF Tech Services`;
const description = `Have questions about RF Tech’s services? Visit our FAQs page for answers to common queries about digital marketing and web development.

`;
const URL = "/faq";

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
    <Index />
  );
};

export default page;
