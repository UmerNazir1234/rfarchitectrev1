import MainPage from "./_components/MainPage";
import { Metadata } from "next";
const title = `RF Tech - Your Partner in Digital Growth & Innovation`;
const description = `Boost your business with RF Tech's digital marketing, web development, and SEO services. Innovative solutions for growth and success.
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
