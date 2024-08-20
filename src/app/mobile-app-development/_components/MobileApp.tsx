import Hero from "@/components/Hero";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import MobileService from "./MobileService";
import { textWithCardData } from "./Data";
import { imageWithText } from "./Data";
import TextWithCards from "@/components/TextWithCards";
import ImageWithText from "@/components/ImageWithText";
import HeadingBox from "@/components/HeadingBox";
import OurStack from "./OurStack";
import Faq from "@/components/Faq";
import {  madFaqs } from "@/dummyData/data";
import ProjectSubmission from "@/components/ProjectSubmission";

const MobileApp = () => {
  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720687833/RfTechnologiesWebsite/representation-user-experience-interface-design_1_1_jpayhx.png"
        title={`<span class="text-secondary">Mobile App</span> Development`}
        btnTitle="LET'S TALK"
        href="/"
        classes="bg-white !text-primary"
        btnIcon={<GoArrowUpRight className="fill-primary icon icon--up" />}
      />
      <MobileService />
      <TextWithCards content={textWithCardData} />
      <ImageWithText content={imageWithText} />
      <HeadingBox
        classes="text-primary"
        title="our priorities"
        description="Fully-fledged, stable, and scalable mobile applications use this alternative to reduce costs and time-to-market and to reach more users without loss of quality. we analyse your needs and come up with a better solution that perfectly aligns with your business goals and budget."
      />
      <OurStack />
      <Faq data={madFaqs} />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default MobileApp;
