import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import {
  shopifyBenefits,
  shopifyFaq,
  shopifyFeatures,
  shopifyImageWithText,
  shopImageWithText,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ShopifyServices from "./ShopifyServices";
import Benifits from "@/components/Benifits";
import { content } from "@/data/sds";
import CaseStudySection from "./CaseStudySection";

const Index = () => {
  return (
    <>
      <Hero
        title={content?.banner?.title}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary "
      />
      <Hero />

      <SubServices data={content?.ourServices?.cards} />
      <ShopifyServices data={content?.whyChooseUs} />
      <div className="flex items-center justify-center md:pt-32 pt-16">
        <Heading
          title="Shopify online store 2.0"
          icon={true}
          classes="!mb-0 !text-primary max-md:text-2xl"
          iconStyle="stroke-primary"
        />
      </div>
      <ImageWithText content={shopImageWithText} classes="!p-8" />
      <Benifits data={shopifyBenefits} />
      <ImageWithText content={shopifyImageWithText} classes="md:!pb-24 !pb-8">
        <div className="mt-4 w-full">
          <Features data={shopifyFeatures} />
        </div>
      </ImageWithText>
      <Stacks />
      {/* case study for the shopify case study */}
      {/* <CaseStudySection /> */}
      <Faq data={content?.faqs} classes="md:!py-24 !py-8" />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we'll get back to you as soon as possible."
        btnTitle="Submit Your Project"
        btnUrl="/contact-us"
      />
    </>
  );
};

export default Index;
