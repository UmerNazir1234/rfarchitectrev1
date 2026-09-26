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
    <article className="group flex h-full min-h-[360px] flex-col items-center rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-primary hover:to-primarylight hover:shadow-xl sm:p-7">
      <Link
        href={card?.btnLink}
        aria-label={`${card?.title} service`}
        className="mb-5 rounded-xl p-3 transition-transform duration-300 group-hover:scale-105 sm:mb-6 sm:p-4"
        style={{ backgroundColor: `${card?.iconBg || ""}` }}
      >
        {card?.icon}
      </Link>
      <h3 className="mb-3 text-xl font-bold leading-tight text-primary transition-colors duration-300 group-hover:text-white sm:text-2xl">
        {card?.title}
      </h3>
      <p className="mb-6 flex-1 text-base leading-relaxed text-textLight transition-colors duration-300 group-hover:text-white sm:text-lg">
        {card?.content}
      </p>
      <Button
        title="Read More"
        icon={<GoArrowUpRight />}
        href={card?.btnLink}
        classes="mt-auto bg-light !text-primary !py-3 !px-8 !text-lg !font-semibold transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </article>
  );
};

export default ServiceCard;
