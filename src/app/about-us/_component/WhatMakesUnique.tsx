import Tabs from "@/components/Tabs";
import React from "react";
import { aboutTabs, tabs } from "@/dummyData/data";
import Image from "next/image";
const WhatMakesUnique = () => {
  return (
    <section className="relative ">
      <div className="page-width py-16">
        <h2 className="text-[#002577] text-center my-10">
          WHAT MAKES US <span className="text-[#EDAC18]">UNIQUE</span>?
        </h2>
        <Tabs tabs={aboutTabs} />
      </div>
      <Image
        src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1723551717/RfTechnologiesWebsite/Vector_cksoqw.png"
        width={580}
        height={480}
        alt="background"
        className="absolute top-0 left-0 z-0 max-md:w-96 max-md:h-96"
        loading="lazy"
      />
    </section>
  );
};

export default WhatMakesUnique;
