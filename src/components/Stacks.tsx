import Image from "next/image";
import Link from "next/link";
import React from "react";
import { stack } from "@/dummyData/data";
import Button from "./Button";

const Stacks = () => {
  return (
    <div className="relative">
      <div className="page-width pb-12 relative z-50">
        <div className="flex items-center justify-center flex-col gap-8 pb-10">
          <Button
            href="/"
            title="Our Stack"
            classes="bg-secondary"
            enableIcons
          />

          <h2 className="text-primary">Technologies We work</h2>
          <p className="p-lg max-w-4xl text-center ">
            With Latest Technologies and our expert teams Get a scalable and
            reliable website design and development which increase your profit.
          </p>
        </div>
        <div className="flex items-stretch justify-center xl:gap-10 md:gap-4 gap-2 flex-wrap">
          {stack?.map((item, index) => (
            <Link
              key={index}
              href=""
              className="group md:basis-[30%] basis-[48%] max-sm:basis-[98%] xl:min-w-[360px] xl:min-h-[320px]"
            >
              <div className="bg-white group-hover:bg-primary flex items-center justify-center flex-col lg:gap-6 gap-3 border border-black border-opacity-20 lg:p-8 p-4  rounded-[20px] shadow-sm h-full w-full">
                <div className="flex items-center justify-center flex-col lg:gap-5 gap-2 group-hover:flex-row">
                  <Image
                    src={item.image}
                    loading="lazy"
                    alt={item.title}
                    width={130}
                    height={130}
                    className=" max-sm:w-24 max-sm:h-24 group-hover:w-24 group-hover:h-24 group-hover:bg-white rounded p-2"
                  />
                  <h4 className="text-primary max-sm:text-base group-hover:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="lg:hidden group-hover:block p-lg text-center group-hover:text-white">
                  {item?.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Image
        src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1721464653/RfTechnologiesWebsite/Vector_4_mpaszr.svg`}
        alt="Backgruond Image"
        loading="lazy"
        width={545}
        height={427}
        className="absolute right-0 top-16 max-md:w-72 max-md:h-72"
      />
    </div>
  );
};

export default Stacks;
