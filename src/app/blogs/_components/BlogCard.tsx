"use client";
import { BlogPost } from "@/lib/type";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogProps = {
  data: BlogPost[];
};

const BlogCard = ({ data}: BlogProps) => {
  // console.log(data);
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/blogs/${item?.slug}`}
            className="bg-white lg:basis-[30%] relative z-50 sm:basis-[46%] basis-full rounded-2xl  border border-opacity-30 hover:shadow-2xl shadow-xl overflow-hidden"
          >
            <div className="h-[260px] relative">
              <Image
                src={`${
                  item?.feature_image
                    ? item?.feature_image
                    : "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1723542370/RfTechnologiesWebsite/placeholder-image_ilu8u6.jpg"
                }`}
                alt={`${item?.title}`}
                loading="lazy"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="xl:p-8 md:p-5 p-4 bg-white">
              <div className="flex items-start justify-center flex-col gap-3">
                <h4 className="text-bold xl:text-[26px] lg:text-[23px] text-[20px]">
                  {item?.title}
                </h4>
                <p className="text-[#8C8C8C] text-sm">
                  {formatDate(item?.createdAt)}
                </p>
                <div className="flex items-center justify-start gap-3">
                  <Image
                    src={`${
                      item?.author?.image
                        ? item?.author?.image
                        : "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1723542314/RfTechnologiesWebsite/27470334_7309681_yjzb6l_ewsoc4.jpg"
                    }`}
                    alt={`${item?.author?.name}`}
                    width={44}
                    height={44}
                    className="rounded-full w-[32px] h-[32px]"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-700 mb-0">
                      {item?.author?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BlogCard;
