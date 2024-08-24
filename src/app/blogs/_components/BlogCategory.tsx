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
    <div className="flex items-center justify-start flex-wrap gap-3 py-6">
      <button
        type="button"
        className={`blog-chip ${!active ? "bg-[#d0dbf3] text-primary" : ""}`}
      >
        All
      </button>
      {data ? (
        data?.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`blog-chip ${
                active == item?._id ? "bg-[#d0dbf3] text-primary" : ""
              }`}
            >
              {item?.title}
            </button>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default BlogCategory;
