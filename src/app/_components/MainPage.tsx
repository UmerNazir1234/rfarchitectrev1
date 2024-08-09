import React from "react";
import Newsletter from "@/components/Newsletter";
import LeadingSolution from "./LeadingSolution";
import ServiceSlider from "./ServiceSlider";
import Steps from "./Steps";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import Faq from "@/components/Faq";
import { faq, testimonial, featuredProjects } from "@/dummyData/data";
import HeroSlider from "./HeroSlider";
import { homeContent } from "@/data/home";


const MainPage = () => {
  return (
    <>
      <HeroSlider data={homeContent?.banner} />
      <LeadingSolution content={homeContent?.ourServices} />
      <ServiceSlider />
      <Steps />
      <WhyChooseUs />
      <FeaturedProjects data={featuredProjects} />
      <Testimonials data={testimonial} />
      <Faq data={faq} />
      <Newsletter />
    </>
  );
};

export default MainPage;
