import React from "react";
import WeAreRf from "./_component/WeAreRf";
import Experience from "./_component/Experience";
import OurVision from "./_component/OurVision";
import WhatMakesUnique from "./_component/WhatMakesUnique";
import ProjectSubmit from "./_component/ProjectSubmit";
import AboutSection from "./_component/AboutSection";
import Hero from "@/components/Hero";
import HeadingBox from "@/components/HeadingBox";

const page = () => {
  return (
  <>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719827376/RfTechnologiesWebsite/aboutusimage_q5msz5.jpg"
        title={`WHO WE ARE <span class="text-secondary">?</span>`}
      />
      <AboutSection />
      <HeadingBox
      classes="text-primary"
        title="we are rf tech"
        description="Our company was established in late 2018. Our main office is situated in Rawalpindi where our staff is available 24 hours a day. We work as a team there and provide them with our maximum efforts. A friendly environment enables our clients to completely speak their minds. So we can have an idea about what type of work they expected from us. And we are always so on with their expectations."
      />
      <Experience />
      <OurVision />
      <WhatMakesUnique />
      <ProjectSubmit />
      </>

  );
};

export default page;
