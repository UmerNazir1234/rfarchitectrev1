import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
const ServiceCard = () => {
  return (
    <div className="rounded-[30px] shadow-lg bg-white p-8 flex items-center justify-center flex-col gap-10 hover:bg-gradient-to-b hover:from-primary hover:to-primarylight group ">
      <Link
        href="#"
        className="bg-gradient-to-br from-primary to-primarylight md:p-4 p-2 rounded-lg"
      >
        <FaLaptopCode className="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14  fill-white" />
      </Link>
      <h5 className="group-hover:text-white">Website Development</h5>
      <p className="text-lg text-textLight group-hover:text-white">
        Process of designing, creating, deploying, and maintaining software for
        a specific organizations.
      </p>
      <Button
        title="Read More"
        icon={<GoArrowUpRight />}
        classes="bg-light !text-primary !py-3 !px-8 !text-base !font-semibold"
      />
      
    </div>
  );
};

export default ServiceCard;
