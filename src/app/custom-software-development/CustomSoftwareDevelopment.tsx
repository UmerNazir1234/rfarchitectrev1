import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import TextWithCards from "@/components/TextWithCards";
import React from "react";
import {
  customSoftwareDeveloperCardText,
  customSoftwareDeveloperImageWithText,
} from "./_component/data";
import { GoArrowUpRight } from "react-icons/go";
import Stacks from "@/components/Stacks";
import Faq from "@/components/Faq";
import { faq } from "@/dummyData/data";
import ProjectSubmission from "@/components/ProjectSubmission";
import SubServices from "@/snippet/SubServices";

const CustomSoftwareDevelopment = () => {
  return (
    <div>
      <Hero
        title={`<span class="text-secondary">Custom Software</span> Development`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <SubServices />
      <TextWithCards
        content={customSoftwareDeveloperCardText}
        classes="py-32"
      />
      <ImageWithText
        content={customSoftwareDeveloperImageWithText}
        classes="pb-32"
      />
      <Stacks />
      <Faq data={faq} classes="py-24" />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        email="info@rftechnologies.com"
        number="00 000 0000"
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </div>
  );
};

export default CustomSoftwareDevelopment;
