import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import IconFiverr from "./Icons/IconFiverr";
import Link from "next/link";

type TestimonialCardProps = {
  review?: string;
  client_name?: string;
  client_image?: string;
  client_country?: string;
};

const TestimonialCard = ({
  review,
  client_name,
  client_image,
  client_country,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-sm p-8 max-md:p-6 rounded-xl flex items-stretch justify-start flex-col sm:gap-6 gap-4 min-h-[430px] relative">
      <Link
        href="#"
        className="absolute md:top-8 top-6 right-4 max-sm:w-10 max-sm:h-10"
      >
        <IconFiverr />
      </Link>
      <FaQuoteLeft className="text-primary sm:text-6xl text-5xl" />
      {review && <div className="sm:text-2xl text-xl">{review}</div>}
      <div className="flex items-center justify-start gap-2">
        {/* <div>
          {client_image && (
            <Image
              src={client_image}
              width={45}
              height={45}
              alt={`${client_name} review`}
              loading="lazy"
              className="rounded-full"
            />
          )}
        </div> */}
        <div className="flex-grow flex flex-col ">
          <h4 className="text-primary font-bold">{client_name}</h4>
          <span className="text-[#A5A5A5] text-lg leading-tight">
            {client_country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
