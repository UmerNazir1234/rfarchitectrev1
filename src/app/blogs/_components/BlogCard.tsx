"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type blogProps = {
  id?: number;
  blog_image?: string;
  blog_url?: string;
  blog_title?: string;
  publish_date?: string;
  auther_image?: string;
  auther_name?: string;
};
type BlogProps = {
  data: blogProps[];
};

const BlogCard = ({ data }: BlogProps) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/blog/${item?.id}`}
            className="lg:basis-[30%] relative z-50 sm:basis-[46%] basis-full rounded-2xl  border border-opacity-30 hover:shadow-2xl shadow-xl overflow-hidden"
          >
            <div className="h-[260px] relative">
              <Image
                src={`${item?.blog_image}`}
                alt={`${item?.blog_title}`}
                loading="lazy"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="xl:p-8 md:p-5 p-4 bg-white">
              <div className="flex items-start justify-center flex-col gap-3">
                <h4 className="text-bold xl:text-[26px] lg:text-[23px] text-[20px]">
                  {item?.blog_title}
                </h4>
                <p className="text-[#8C8C8C] text-sm">{item?.publish_date}</p>
                <div className="flex items-center justify-start gap-3">
                  <Image
                    src={`${item?.auther_image}`}
                    alt={`${item?.auther_name}`}
                    width={44}
                    height={44}
                  />
                  <p className="text-xl font-semibold">{item?.auther_name}</p>
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
