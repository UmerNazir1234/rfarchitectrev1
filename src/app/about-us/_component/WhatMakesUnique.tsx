import Tabs from "@/components/Tabs";
import React from "react";
import { aboutTabs, tabs } from "@/dummyData/data";
import Image from "next/image";
const WhatMakesUnique = () => {
  return (
    <section id="why-rf-technologies" className="relative ">
      <div className="page-width py-16">
        <h2 className="text-[#002577] text-center my-10">
          WHY BUSINESSES <span className="text-[#EDAC18]">CHOOSE</span> RF TECHNOLOGIES
        </h2>
        <Tabs tabs={aboutTabs} />
      </div>
      <Image
        src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1723551717/RfTechnologiesWebsite/Vector_cksoqw.png"
        width={500}
        height={440}
        alt="background"
        className="absolute -top-40 left-0 z-0 max-md:w-72 max-md:h-72"
        loading="lazy"
      />
    </section>
  );
};

export default WhatMakesUnique;
