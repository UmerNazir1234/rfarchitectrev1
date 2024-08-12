import React from 'react'
import Index from './_components/Index'
import { Metadata } from "next";
const title = `Tailored Web Design & Development Solutions for Success`;
const description = `Get top-notch web design and development with RF Tech. We deliver custom, responsive websites tailored to your business needs and goals.`;
const URL = "/web-development";

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
    <div><Index/></div>
  )
}

export default page