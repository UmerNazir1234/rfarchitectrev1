import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
type caseStudy = {
  title?: string;
  image?: string;
  url?: string;
};
const CaseStudycard = ({ title, image, url }: caseStudy) => {
  return (
    <div className=" w-full bg-light rounded-[30px] shadow-lg p-3 ">
      <div className="flex justify-between items-center py-4   ">
        <h4 className="text-primary font-bold ">{title}</h4>

        <Link
          href={`${url}`}
          className="inline-flex items-center gap-1 text-lg font-semibold text-secondary"
        >
          <span>Learn More</span>
          <span>
            <GoArrowUpRight className="w-6 h-6" />
          </span>
        </Link>
      </div>
      <div className=" relative h-72 w-full">
        <Image
          className="rounded-[20px] w-full h-full m-auto object-cover object-center"
          src={`${image}`}
          alt={`${title} + project`}
          fill
        />
      </div>
    </div>
  );
};

export default CaseStudycard;
