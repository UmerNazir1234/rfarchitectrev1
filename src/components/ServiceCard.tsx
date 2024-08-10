import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
type props = {
  card: {
    id: number;
    icon: string;
    title: string;
    content: string;
    btnText: string;
    btnLink: string;
  };
};
const ServiceCard = ({ card }: props) => {
  return (
    <div className="rounded-[30px] shadow-xl bg-white p-8 flex items-center justify-center flex-col gap-8 hover:bg-gradient-to-b hover:from-primary hover:to-primarylight group ">
      <Link
        href="#"
        className="bg-gradient-to-br group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white from-primary to-primarylight md:p-4 p-2 rounded-lg "
      >
        <FaLaptopCode className="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14  fill-white" />
      </Link>
      <h5 className=" text-[20px] font-bold group-hover:text-white">
        {card?.title}
      </h5>
      <p className="text-lg text-textLight group-hover:text-white">
        {card?.content}
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
