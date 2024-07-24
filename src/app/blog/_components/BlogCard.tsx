import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="basis-[32%] rounded-2xl border border-opacity-5 shadow-2xl overflow-hidden">
      <div className="h-[222px] relative">
        <Image
          src={
            "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721834451/RfTechnologiesWebsite/image_202_tzlx4m.svg"
          }
          alt="Blog Image"
          loading="lazy"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-center justify-start gap-3 p-3">
        <h4>New HTML tag: An absolute game changer</h4>
      </div>
    </div>
  );
};

export default BlogCard;
