"use client";
import { Blog } from "@/lib/type";
import React, { useState } from "react";

type props = {
  data: Blog[] | null;
};
const BlogCategory = ({ data }: props) => {
  const [active, setActive] = useState<any>(null);
  // console.log(data);
  return (
    <div className="flex items-center justify-start flex-wrap lg:gap-8 md:gap-6 gap-3 py-6">
      <button
        type="button"
        className={`md:text-xl text-sm text-medium ${
          !active
            ? "rounded-full bg-[#d0dbf3] px-6 py-3 text-primary font-bold"
            : ""
        }`}
      >
        All
      </button>
      {data?.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`md:text-xl text-sm text-medium ${
              index == 0
                ? "rounded-full bg-[#d0dbf3] px-6 py-3 text-primary font-bold"
                : ""
            }`}
          >
            {item?.title}
          </button>
        );
      })}
    </div>
  );
};

export default BlogCategory;
