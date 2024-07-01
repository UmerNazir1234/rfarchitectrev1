import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { footerLinks } from "@/dummyData/data";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primarylight py-16">
      <div className="page-width flex items-start  max-md:flex-wrap justify-between text-white">
        <div>
          <div className="relative">
            <Link href={Site?.url}>
              {Site?.WhiteLogo ? (
                <Image
                  src={Site?.WhiteLogo}
                  alt={Site?.name}
                  height={70}
                  width={162}
                  className="object-contain"
                />
              ) : (
                <span className="text-xl font-bold">{Site?.name}</span>
              )}
            </Link>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            {Site?.address}
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <MdEmail />
            </span>{" "}
            {Site?.email}
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <BsFillTelephoneFill />
            </span>{" "}
            {Site?.number}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start">
          <h2 className="font-bold">Information</h2>
          <ul className="flex flex-col items-start justify-start gap-4">
            {footerLinks?.map((item) => (
              <li key={item?.id}>
                <Link href={item?.link}>{item?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start">
          <h2 className="font-bold">Information</h2>
          <ul className="flex flex-col items-start justify-start gap-4">
            {footerLinks?.map((item) => (
              <li key={item?.id}>
                <Link href={item?.link}>{item?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
