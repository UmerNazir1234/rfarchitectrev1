import Benifits from "@/components/Benifits";
import Hero from "@/components/Hero";
import ImageWithText from "@/components/ImageWithText";
import ProjectSubmission from "@/components/ProjectSubmission";
import { becomeImageWithText } from "@/dummyData/data";
import React from "react";
import Benefits from "./BenefitsOfPartnerShip";
import PerfectPartnerShip from "./PerfectPartnerShip";

const Index = () => {
  return (
    <div>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1722244527/RfTechnologiesWebsite/pexels-sora-shimazaki-5673488_2_khakqn.svg"
        title='Become a <span class="text-secondary">Valued Partner</span>'
        logo={true}
      />
      <PerfectPartnerShip />
      <ImageWithText content={becomeImageWithText} />
      <Benefits />

      <ProjectSubmission
        title="Transform your brand's challenges into successes with our expert solutions."
      />
    </div>
  );
};

export default Index;
