import Image from "next/image";
import React from "react";
type cardProps = {
  title?: string;
  details?: string;
  classes?: string;
  image?: string;
};
const ShopifyServiceCards = ({ title, details, classes, image }: cardProps) => {
  return (
    title &&
    details && (
      <div
        className={`rounded-xl lg:basis-1/3 md:basis-[47%]  ${
          classes ? classes : "bg-primary"
        } flex items-center justify-center flex-col gap-3 sm:p-6 p-4 text-white shadow `}
      >
        <div className="flex items-center justify-center">
          <Image
            src={`${image}`}
            alt={`${title}` + "logo"}
            width={100}
            height={100}
            className="m-auto max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="xl:text-3xl md:text-2xl text-xl font-bold text-center text-primary">
          {title}
        </div>
        <p className="lg:text-lg text-base text-center text-black">{details}</p>
      </div>
    )
  );
};

export default ShopifyServiceCards;
