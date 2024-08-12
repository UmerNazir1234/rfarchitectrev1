import Index from "./_components/Index";
import { Metadata } from "next";
const title = `Custom WordPress Development Services  for Dynamic Websites`;
const description = `Get tailored WordPress development with RF Tech. We build custom themes and plugins to enhance your website's performance and design.
`;
const URL = "/wordpress-development";

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
