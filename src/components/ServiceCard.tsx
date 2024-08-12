import Link from "next/link";
import React from "react";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";

type props = {
  card: {
    id: number;
    icon: React.ReactElement;
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
       {card?.icon}
      </Link>
      <h5 className=" text-[19px] !font-bold group-hover:text-white">
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
