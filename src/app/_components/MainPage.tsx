import React from "react";

import Faq from "./Faq";
import Newsletter from "@/components/Newsletter";
import Hero from "./Hero";
import LeadingSolution from "./LeadingSolution";
import ServiceSlider from "./ServiceSlider";

const MainPage = () => {
  return (
    <main className="bg-light">
      <Hero />

      <LeadingSolution />
      <ServiceSlider />
      <Faq />
      <Newsletter />
    </main>
  );
};

export default MainPage;
