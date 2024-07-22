import Faq from "@/components/Faq";
import HeadingBox from "@/components/HeadingBox";
import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
  seoServiceData,
  woocomemrceCardText,
  woocomemrcefaq,
  woocomemrceServiceData,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">Search Engine Optimization</span> Services`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721639866/RfTechnologiesWebsite/fikret-tozak-Zk--Ydz2IAs-unsplash_vmk6pk.svg"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={seoServiceData} />
      <HeadingBox
      classes="text-primary"
        title="our priorities"
        description="Fully-fledged, stable, and scalable mobile applications use this alternative to reduce costs and time-to-market and to reach more users without loss of quality. we analyse your needs and come up with a better solution that perfectly aligns with your business goals and budget."
      />
      <Stacks />
      <Faq data={woocomemrcefaq} classes="py-24" />
      <ProjectSubmission
        title="Submit Your Project"
        
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        email="info@rftechnologies.com"
        number="00 000 0000"
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default Index;
