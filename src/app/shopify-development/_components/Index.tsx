import WebsiteServices from "@/app/web-development/_components/WebsiteServices";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
  digitalFeatures,
  digitalMarketingCardText,
  shopifyFaq,
  shopifyFeatures,
  shopifyImageWithText,
  shopifyServiceData,
  shopImageWithText,
  socialAnalysisImageWithText,
  trustedBrandImageWithText,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ShopifyServices from "./ShopifyServices";
import Benifits from "@/components/Benifits";

const Index = () => {
  return (
    <>
      <Hero
        title={`<span class="text-secondary">Shopify</span> Development Services`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779660/RfTechnologiesWebsite/image_70_unicwe.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Hero />
      <SubServices data={shopifyServiceData} />
      <ShopifyServices />
      <div className="flex items-center justify-center pt-32">
        <Heading
          title="Shopify online store 2.0"
          icon={true}
          classes="!mb-0 !text-secondary"
        />
      </div>
      <ImageWithText content={shopImageWithText} classes="!pt-8" />
      <Benifits />
      <ImageWithText content={shopifyImageWithText} classes="!pb-16">
        <div className="mt-4 w-full">
          <Features data={shopifyFeatures} />
        </div>
      </ImageWithText>
      <Stacks />
      <Faq data={shopifyFaq} classes="py-24" />
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
