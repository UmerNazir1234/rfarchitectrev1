import Link from "next/link";
import React from "react";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";

type props = {
  card: {
    id: number;
    icon: React.ReactElement;
    iconBg?: string;
    title: string;
    content: string;
    btnText: string;
    btnLink: string;
  };
};
const ServiceCard = ({ card }: props) => {
  return (
    <div className="h-full min-h-[450px] rounded-[30px] shadow-xl bg-white lg:p-8 p-4 flex items-center text-center justify-center flex-col gap-8 hover:bg-gradient-to-b hover:from-primary hover:to-primarylight group ">
      <Link
        href={card?.btnLink}
        aria-label={card?.title + "service"}
        className={`md:p-4 p-2 rounded-lg ${card?.iconBg || ""} `}
      >
        {card?.icon}
      </Link>
      <div className=" lg:text-2xl text-xl !font-bold group-hover:text-white text-center">
        {card?.title}
      </div>
      <p className="lg:text-xl text-lg text-textLight group-hover:text-white">
        {card?.content}
      </p>
      <Button
        title="Read More"
        icon={<GoArrowUpRight />}
        href={card?.btnLink}
        classes="bg-light !text-primary !py-3 !px-8 !text-lg !font-semibold"
      />
    </div>
  );
};

export default ServiceCard;
