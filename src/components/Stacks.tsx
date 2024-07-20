import Image from "next/image";
import Link from "next/link";
import React from "react";
import { stack } from "@/dummyData/data";

const Stacks = () => {
  console.log(stack);
  return (
    <div className="page-width pb-12">
      <div className="flex items-stretch  justify-center xl:gap-10 md:gap-4 gap-2 flex-wrap">
        {stack?.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="bg-white  md:basis-[30%] basis-[48%] border border-black border-opacity-20 rounded-[20px] shadow-sm xl:p-16 lg:p-10 max-sm:py-6 max-sm:px-2"
          >
            <div className="flex items-center justify-center flex-col gap-3">
              <Image
                src={item.image}
                loading="lazy"
                alt={item.title}
                width={130}
                height={130}
                className="max-md:w-80 max-md:h-80 max-sm:w-16 max-sm:h-16"
              />
              <h4 className="text-primary max-sm:text-base">{item.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
