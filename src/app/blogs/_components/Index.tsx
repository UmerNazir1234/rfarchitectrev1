import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import React, { Suspense } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { BlogPost } from "@/lib/type";
import BlogHeader from "./BlogHeader";

type props = {
  blogs: BlogPost[] | null;
};

const Index = ({ blogs }: props) => {
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
      <section className="pt-32 pb-12 relative">
        <Suspense fallback={<p>loading....</p>}>
          <BlogHeader blogs={blogs} />
        </Suspense>
        <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721909694/RfTechnologiesWebsite/Trade_Mark-02_2_ppmsma.svg`}
          width={294}
          height={265}
          alt="rf logo"
          loading="lazy"
          className="absolute top-0 right-0 "
        />
      </section>
      <ProjectSubmission
        title="Submit Your Project"
        description="Let us know your requirements and we’ll get back to you as soon as possible."
        btnTitle="Submit Your Project"
        btnUrl="/"
      />
    </>
  );
};

export default Index;
