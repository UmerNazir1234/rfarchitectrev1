import MainPage from "./_components/MainPage";
import { Metadata } from "next";

const title = `Digital Product, Commerce & Technology Partner`;
const description = `RF Technologies partners with businesses to solve business problems using technology, from digital product and commerce engineering to launch, support, and growth.
`;
const URL = "/";

export const metadata: Metadata = {
  title: `${title} | RF Technologies`,
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

export default async function page() {
  return <MainPage />;
}
