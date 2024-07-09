import Image from "next/image";
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
const TestimonialCard = () => {
  return (
    <div className=" bg-white shadow-sm p-8 max-md:p-6 rounded-3xl">
      <BiSolidQuoteLeft className="text-primary text-8xl" />
      <p className="p-lg mt-5 max-md:mt-4 ">
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia.
      </p>
      <div className="flex items-center justify-start gap-2 mt-8 max-md:mt-4">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720430132/RfTechnologiesWebsite/lnccqhvcrsgsb6dfodp7.png"
            }
            width={60}
            height={60}
            alt="client Image"
            loading="lazy"
          />
        </div>
        <div className="flex-grow flex flex-col pl-4">
          <h4 className="text-primary font-bold">Sandra M.</h4>
          <span className="text-[#A5A5A5] text-lg leading-tight">
            E-Commerce Entrepreneur
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
