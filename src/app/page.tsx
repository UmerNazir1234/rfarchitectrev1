import MainPage from "./_components/MainPage";
import { Metadata } from "next";

const title = `RF Technologies | Technology Partner for Digital Products & Commerce`;
const description = `RF Technologies partners with businesses to solve business problems using technology, from digital product and commerce engineering to launch, support, and growth.
`;
const URL = "/";

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

export default async function page() {
  return <MainPage />;
}
