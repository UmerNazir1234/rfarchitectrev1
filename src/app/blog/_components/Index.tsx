import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Blogs from "./Blogs";
import Search from "./Search";
import BlogHeader from "./BlogHeader";

const Index = () => {
  return (
    <>
      <Hero
        title={`Read Our  <span class="text-secondary">Blogs</span>`}
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721832787/RfTechnologiesWebsite/spiral-notepad-with-black-coffee-spectacle_1_hthc6s.png"
        btnTitle="Lets Talk"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <div className="pt-32 pb-12">
        <BlogHeader />
        <Blogs />
      </div>
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
