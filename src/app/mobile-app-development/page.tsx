import React from "react";
import MobileApp from "./_components/MobileApp";
import { Metadata } from "next";
const title = `Mobile App Development Services - Innovative & Scalable Solutions`;
const description = `RF Tech offers expert mobile app development services. Custom iOS & Android apps to enhance user experience and drive growth.
`;
const URL = "/mobile-app-development";

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
  return <MobileApp />;
};

export default page;
