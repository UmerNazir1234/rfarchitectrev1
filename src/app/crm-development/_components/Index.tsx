import {
  customSoftwareDeveloperCardText,
  customSoftwareDeveloperImageWithText,
} from "@/app/custom-software-development/_component/data";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import KeyFeatures from "@/components/KeyFeatures";
import ProjectSubmission from "@/components/ProjectSubmission";
import Stacks from "@/components/Stacks";
import TextWithCards from "@/components/TextWithCards";
import {
  crmFaqs,
  crmFeatures,
  crmImageWithText,
  crmKeyFeatures,
  crmServiceData,
  faq,
} from "@/dummyData/data";
import SubServices from "@/snippet/SubServices";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <div>
      <Hero
        title={`<span class="text-secondary">CRM</span>  Development`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721737499/RfTechnologiesWebsite/customer-relationship-management-concept_2_webhmt.svg"
        btnTitle="Discuss Your Project"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <SubServices data={crmServiceData} />
      <KeyFeatures
        data={crmKeyFeatures}
        heading="Benefits of CRM Software"
        btnTitle="Care features"
        btnUrl="/"
      />
      {/* <TextWithCards
        content={customSoftwareDeveloperCardText}
        classes="py-32"
      /> */}
      <ImageWithText content={crmImageWithText} classes="pb-32">
        <div className="mt-6 w-full">
          <Features data={crmFeatures} />
        </div>
      </ImageWithText>
      <Stacks />
      <Faq data={crmFaqs} classes="py-24" />
      <ProjectSubmission
        title="Discuss Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Discuss Your Project"
        btnUrl="/"
      />
    </div>
  );
};

export default Index;
