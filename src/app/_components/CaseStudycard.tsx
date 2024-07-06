import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const CaseStudycard = () => {
  return (
    <div className=" w-full bg-light rounded-[30px] shadow-lg p-3 ">
      <div className="flex justify-between items-center py-4   ">
        <h4 className="text-primary font-bold ">Elite, ECW</h4>

        <Link
          href="#"
          className="inline-flex items-center gap-1 text-lg font-semibold text-secondary"
        >
          <span>Learn More</span>
          <span>
            <GoArrowUpRight className="w-6 h-6" />
          </span>
        </Link>
      </div>
      <div className="h-full w-full">
        <Image
          className="rounded block max-w-full"
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720256827/image_8_j2fxk9.png"
          alt="Case Study Image"
          width={472}
          height={257}
        />
      </div>
    </div>
  );
};

export default CaseStudycard;
