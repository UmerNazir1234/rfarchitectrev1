import React from "react";
import BlogCard from "./BlogCard";
import { blog } from "@/dummyData/data";
import Image from "next/image";

const Blogs = () => {
  return (
    <section className="relative">
      <div className="page-width py-12 relative z-50">
        <div className="flex items-center justify-center lg:gap-10 sm:gap-5 gap-0 flex-wrap">
          <BlogCard data={blog} />
        </div>
      </div>
      <Image
        src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721912289/RfTechnologiesWebsite/Vector_8_i14vkk.svg`}
        alt="Bg Image"
        loading="lazy"
        width={524}
        height={475}
        className="absolute left-0 -top-8"
      />
    </section>
  );
};

export default Blogs;
