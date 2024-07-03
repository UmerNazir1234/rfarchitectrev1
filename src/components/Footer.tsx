import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { informationLinks, serviceLinks } from "@/dummyData/data";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primarylight pb-10 pt-36 max-sm:pt-20 relative">
      <div className="page-width flex items-start  justify-between text-white md:flex-nowrap flex-wrap border-b border-white border-opacity-30 pb-10">
        <div className="flex items-start flex-col xl:basis-[60%] lg:basis-[40%] md:basis-[50%] basis-full justify-start gap-8 ">
          <div className="relative">
            <Link href={Site?.url}>
              {Site?.WhiteLogo ? (
                <Image
                  src={Site?.WhiteLogo}
                  alt={`${Site?.name} + 'Logo' `}
                  height={120}
                  width={250}
                  className="object-contain "
                />
              ) : (
                <span className="text-5xl font-bold text-white">
                  {Site?.name}
                </span>
              )}
            </Link>
          </div>
          <div className="flex gap-2 items-center justify-start text-lg font-normal md:w-60">
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            {Site?.address}
          </div>
          <Link
            href={`mailto:${Site?.email}`}
            className="flex gap-2 items-center justify-start text-lg font-normal"
          >
            <span>
              <MdEmail />
            </span>{" "}
            {Site?.email}
          </Link>
          <Link
            href={`tel:${Site?.number}`}
            className="flex gap-2 items-center justify-start text-lg font-normal"
          >
            <span>
              <BsFillTelephoneFill />
            </span>{" "}
            {Site?.number}
          </Link>
        </div>
        <div className="flex flex-col gap-8 items-start xl:basis-[20%] lg:basis-[30%] md:basis-[25%] basis-full  justify-start">
          <h2 className="font-bold text-[32px] max-md:mt-4">Information</h2>
          <ul className="flex flex-col items-start justify-start gap-4">
            {informationLinks?.map((item) => (
              <li key={item?.id}>
                <Link href={item?.link} className="font-normal text-lg">
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8 items-start xl:basis-[20%] lg:basis-[30%] md:basis-[25%] basis-full  justify-start">
          <h2 className="font-bold text-[32px] max-md:mt-4">Services</h2>
          <ul className="flex flex-col items-start justify-start gap-4">
            {serviceLinks?.map((item) => (
              <li key={item?.id}>
                <Link className="font-normal text-lg" href={item?.link}>
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-10 text-xl text-center text-white text-opacity-80">
        Ⓒ2024 RF Technologies, All rights reserved.
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png"
        }
        className="absolute bottom-8 right-0"
        loading="lazy"
        width={362}
        height={312}
        alt="Footer Logo"
      />
    </footer>
  );
};

export default Footer;
