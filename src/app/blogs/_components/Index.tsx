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
        btnTitle="Discuss Your Project"
        btnIcon={<GoArrowUpRight />}
        href="/contact-us"
        classes="bg-white !text-primary"
      />
      <div className=" relative z-60 -mt-[81px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="81"
          viewBox="0 0 1440 81"
          fill="none"
          preserveAspectRatio="none"
          className=" -mb-[2px]"
        >
          <g clipPath="url(#clip0_1766_1353)" transform="scale(1)">
            <path
              d="M307.5 0H1440V81H203C211.4 81 219.166 77 222 75C237.166 64 278.4 12.6 286 7C293.6 1.4 303.5 0 307.5 0Z"
              fill="#f1f3fb"
            />
            <path
              d="M204 81H0V0H308.5C300.1 0 292.333 4 289.5 6C274.333 17 233.1 68.4 225.5 74C217.9 79.6 208 81 204 81Z"
              fill=""
            />
          </g>
          <defs>
            <clipPath id="clip0_1766_1353">
              <rect width="1440" height="81" fill="white" />
            </clipPath>
          </defs>
        </svg>
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
            className="absolute top-0 right-0 z-0"
          />
        </section>
      </div>
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
