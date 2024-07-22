import { customSoftwareDeveloperImageWithText } from "@/app/custom-software-development/_component/data";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import {
  websitefaq,
  websiteImageWithText,
  websiteServiceData,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">Web Design & </span> Development`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721639866/RfTechnologiesWebsite/fikret-tozak-Zk--Ydz2IAs-unsplash_vmk6pk.svg"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={websiteServiceData} />
      <ImageWithText content={websiteImageWithText} classes="md:py-32 py-16" />
      <Stacks />
      <Faq data={websitefaq} classes="py-24" />
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
