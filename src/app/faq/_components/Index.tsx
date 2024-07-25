import React from 'react'
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import { digitalMarketingfaq } from "@/dummyData/data";
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {
  return (
    <div>
      <Hero
        title={`<span class="text-secondary">Frequently Asked </span> Questions`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721663715/RfTechnologiesWebsite/question-mark-icon-solving-problem-solution-concept_1_typb1e.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <Faq data={digitalMarketingfaq} />
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        email="info@rftechnologies.com"
        number="00 000 0000"
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </div>
  )
}

export default Index