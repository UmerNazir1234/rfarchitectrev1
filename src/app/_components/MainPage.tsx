import React from "react";
import Newsletter from "@/components/Newsletter";
import LeadingSolution from "./LeadingSolution";
import ServiceSlider from "./ServiceSlider";
import Steps from "./Steps";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import Faq from "@/components/Faq";
import { testimonial, featuredProjects } from "@/dummyData/data";
import HeroSlider from "./HeroSlider";
import { homeContent } from "@/data/home";

const homeSolutionOrder = [6, 1, 9, 5];
const homeSolutions = homeContent.ourServices.cards
  .filter((card) => homeSolutionOrder.includes(card.id))
  .sort(
    (first, second) =>
      homeSolutionOrder.indexOf(first.id) - homeSolutionOrder.indexOf(second.id),
  );

const MainPage = () => {
  return (
    <>
      <HeroSlider data={homeContent?.banner} />
      <LeadingSolution content={homeContent?.ourServices} />
      <ServiceSlider cards={homeSolutions} />
      <FeaturedProjects data={featuredProjects} />
      <Testimonials data={testimonial} />
      <Steps classes="max-sm:!py-10" />
      <WhyChooseUs />
      <Faq data={homeContent?.faqs} />
      <Newsletter />
    </>
  );
};

export default MainPage;
