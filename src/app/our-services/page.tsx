import React from "react";
import ServiceSlider from "../_components/ServiceSlider";
import { homeContent } from "@/data/home";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <h1>Our Services</h1>
      </div>
      <div className="bg-white py-4">
        <ServiceSlider cards={homeContent?.ourServices?.cards} />
      </div>
    </>
  );
};

export default page;
