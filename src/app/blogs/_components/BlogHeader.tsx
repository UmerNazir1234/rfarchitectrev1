"use client";
import Search from "./Search";
import BlogCategory from "./BlogCategory";
import fetchClient from "@/helpers/fetchClient";
import { Blog, BlogPost } from "@/lib/type";
import BlogCard from "./BlogCard";
import Image from "next/image";
import { useEffect, useState } from "react";

type props = {
  blogs: BlogPost[] | null;
};
const BlogHeader = async ({ blogs }: props) => {
  const [chips, setChips] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchClient(`/blog/all`);

      if (response) {
        const { data } = response;
        setChips(data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(blogs);
  return (
    <>
      <div className="relative z-1">
        <div className="page-width">
          <div className="md:!ps-6">
            <Search />
            <BlogCategory data={chips} />
          </div>
        </div>
      </div>
      <div className="relative">
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
      </div>
    </>
  );
};

export default BlogHeader;
