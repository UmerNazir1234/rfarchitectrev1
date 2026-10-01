
import AnalyticsTools from "@/components/AnalyticsTools";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
  digitalFeatures,
  digitalMarketingCardText,
  digitalMarketingfaq,
  digitalServiceData,
  socialAnalysisImageWithText,
  trustedBrandImageWithText,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">Digital Marketing </span> Services`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721639866/RfTechnologiesWebsite/fikret-tozak-Zk--Ydz2IAs-unsplash_vmk6pk.svg"
        btnTitle="Discuss Your Project"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={digitalServiceData} />
      <TextWithCards content={digitalMarketingCardText} classes="!pt-32">
        <Features data={digitalFeatures}  />
      </TextWithCards>
      <ImageWithText content={socialAnalysisImageWithText} classes="" />
      <ImageWithText content={trustedBrandImageWithText} classes="!pb-16" />
      <AnalyticsTools />
      <Faq data={digitalMarketingfaq} classes="py-24" />
      <ProjectSubmission
        title="Discuss Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Discuss Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default Index;
