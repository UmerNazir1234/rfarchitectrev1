import Hero from "@/components/Hero";
import ProjectSubmission from "@/components/ProjectSubmission";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/lib/type";
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

      <div className="pt-32 pb-12 relative">
        {/* <BlogHeader /> */}
        <section className="relative">
          {blogs && blogs.length > 0 && (
            <div className="page-width py-12 relative z-50">
              <div className="flex  lg:gap-10 sm:gap-5 gap-6 flex-wrap">
                <BlogCard data={blogs} />
              </div>
              {/* <div className="flex items-center justify-center md:gap-8 gap-6 md:py-20 py-10 font-nunito md:text-xl text-lg text-primary">
              <Link
                href={"/"}
                className="bg-[#d0dbf3] rounded-full h-6 w-6 p-6 flex items-center justify-center"
              >
                1
              </Link>
              <Link href={"/"}>2</Link>
              <Link href={"/"}>3</Link>
              <Link href={"/"}>4</Link>
              <Link className="rounded-full bg-[#d0dbf3] px-6 py-3" href={"/"}>
                Next
              </Link>
            </div> */}
            </div>
          )}

          <Image
            src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721912289/RfTechnologiesWebsite/Vector_8_i14vkk.svg`}
            alt="Bg Image"
            loading="lazy"
            width={524}
            height={475}
            className="absolute left-0 -top-8"
          />
          <Image
            src={` https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721979215/RfTechnologiesWebsite/Group_1597883922_3x_e9biiv.png`}
            alt="Bg Image"
            loading="lazy"
            width={300}
            height={300}
            className="absolute left-0 -bottom-12"
          />
        </section>
        <Image
          src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721909694/RfTechnologiesWebsite/Trade_Mark-02_2_ppmsma.svg`}
          width={294}
          height={265}
          alt="rf logo"
          loading="lazy"
          className="absolute top-0 right-0 "
        />
      </div>
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
