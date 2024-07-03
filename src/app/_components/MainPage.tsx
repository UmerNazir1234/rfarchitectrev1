import React from "react";
import ServiceCard from "./ServiceCard";
import Faq from "./Faq";
import Newsletter from "@/components/Newsletter";
import Hero from "./Hero";

const MainPage = () => {
  return (
    <>
      <Hero />
      <ServiceCard />
      <Faq />
      <Newsletter />
    </>
  );
};

export default MainPage;
