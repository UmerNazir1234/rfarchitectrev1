import Link from "next/link";
import React from "react";
type categoryProps = {
  title?: string;
  _id: number;
  slug: string;
};
type props = {
  data: categoryProps[];
};
const BlogCategory = ({ data }: props) => {
  // console.log(data);
  return (
    <div className="">
      <div className="flex items-center justify-start flex-wrap lg:gap-16 md:gap-8 gap-6 py-6">
        {data?.map((item, index) => (
          <Link
            href={`blog/${item?.slug}`}
            key={index}
            className={`md:text-xl text-sm text-medium ${
              index == 0
                ? "rounded-full bg-[#d0dbf3] px-6 py-3 text-primary font-bold"
                : ""
            }`}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
