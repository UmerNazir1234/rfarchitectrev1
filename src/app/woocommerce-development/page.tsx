import React from "react";
import Index from "./_components/Index";
import { Metadata } from "next";
const title = `RF Tech: Expert WooCommerce Development for E-commerce`;
const description = `RF Tech offers custom WooCommerce development services. Build and optimize your online store for a seamless shopping experience.`;
const URL = "/woocommerce-development";

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
