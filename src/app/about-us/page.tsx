import React from "react";
import WeAreRf from "./_component/WeAreRf";
import Experience from "./_component/Experience";
import OurVision from "./_component/OurVision";
import WhatMakesUnique from "./_component/WhatMakesUnique";
import ProjectSubmit from "./_component/ProjectSubmit";
import AboutSection from "./_component/AboutSection";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <main className="bg-light">
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg"
        title="WHO WE ARE"
        colorTitle="?"
      />
      <AboutSection />
      <WeAreRf />
      <Experience />
      <OurVision />
      <WhatMakesUnique />
      <ProjectSubmit />
    </main>
  );
};

export default page;
