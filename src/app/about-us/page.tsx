import React from "react";
import Hero from "./_component/Hero";
import AboutSection from "./_component/AboutSection";
import WeAreRf from "./_component/WeAreRf";
import Experience from "./_component/Experience";
import OurVision from "./_component/OurVision";
import WhatMakesUnique from "./_component/WhatMakesUnique";
import ProjectSubmit from "./_component/ProjectSubmit";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WeAreRf />
      <Experience />
      <OurVision />
      <WhatMakesUnique />
      <ProjectSubmit />
    </div>
  );
};

export default page;
