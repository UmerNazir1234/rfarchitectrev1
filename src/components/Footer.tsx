"use client";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { informationLinks, serviceLinks } from "@/dummyData/data";
import { usePathname } from "next/navigation";
import Social from "./Social";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  const footerColors: { [key: string]: string } = {
    "/about-us": "!bg-[#edac18]",
    "/blogs": "!bg-[#edac18]",
    "/crm-development": "!bg-[#edac18]",
    "/shopify-development": "!bg-[#edac18]",
    "/graphic-design": "!bg-[#edac18]",
    "/seo": "!bg-[#edac18]",
    "/faq": "!bg-[#edac18]",
    "/digital-marketing": "!bg-[#edac18]",
    "/web-development": "!bg-[#edac18]",
    "/woocommerce-development": "!bg-[#edac18]",
    "/wordpress-development": "!bg-[#edac18]",
    "/mobile-app-development": "!bg-[#edac18]",
    "/custom-software-development": "!bg-[#edac18]",
    "/contact-us": "!bg-light",
    "/our-work": "!bg-[#e6e6e6]",
    "/become-a-partner": "!bg-light",
    "/": "!bg-light",
    "/our-services": "!bg-white",
  };

  const caseStudyPathPattern = /^\/case-studies\/(.+)\/(.+)$/;
  const isCaseStudyPath = caseStudyPathPattern.test(pathname);

  // Apply color based on the dynamic case study path
  const footerClass = isCaseStudyPath ? "!bg-[#edac18]" : (footerColors[pathname] || "bg-gray-500");

  return (
    <footer
      className={`pt-20 max-sm:pt-20 relative overflow-hidden bg-light ${footerClass}`}
    >
      <div className="bg-gradient-to-b from-primary to-primarylight sm:pt-24">
        <div className="page-width flex items-start  justify-between text-white md:flex-nowrap flex-wrap border-b border-white border-opacity-30 pb-10">
          <div className="flex items-start flex-col xl:basis-[60%] lg:basis-[40%] md:basis-[50%] basis-full justify-start gap-8 ">
            <div className="relative">
              <Link href={'/'}>
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
            <p className="text-lg font-normal">
              Digital Product, Commerce &amp; Technology Partner
            </p>
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
            <div className="flex items-center justify-start gap-6">
              <Social url={Site?.social_links?.facebook} icon={<FaFacebook className="w-8 h-auto" />} />
              <Social url={Site?.social_links?.instagram} icon={<FaInstagram className="w-8 h-auto" />} />
              <Social url={Site?.social_links?.twitter} icon={<FaTwitter className="w-8 h-auto" />} />
              <Social url={Site?.social_links?.youtube} icon={<FaYoutube className="w-8 h-auto" />} />
              <Social
                url={`tel:${Site?.social_links?.whatsapp || ""}`}
                icon={<FaWhatsapp className="w-8 h-auto" />}
              />


            </div>
          </div>
          <div className="flex flex-col gap-8 items-start xl:basis-[20%] lg:basis-[30%] md:basis-[25%] basis-full  justify-start">
            <h2 className="font-bold text-[32px] max-md:mt-4">Explore</h2>
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
          <div className="flex flex-col gap-8 items-start xl:basis-[20%] lg:basis-[30%] md:basis-[25%] basis-full  justify-start relative z-1">
            <h2 className="font-bold text-[32px] max-md:mt-4">Solutions</h2>
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
        <div className="pt-10 text-xl text-center text-white text-opacity-80 pb-8">
          Ⓒ{new Date().getFullYear()} RF Technologies, All rights reserved.
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719848735/RfTechnologiesWebsite/Trade_Mark-02_2_oggpmo.png"
        }
        className="absolute bottom-8 right-0 max-sm:max-w-48 max-lg:max-w-48 z-0"
        loading="lazy"
        width={362}
        height={312}
        alt="Footer Logo"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="737"
        height="81"
        viewBox="0 0 737 81"
        fill="none"
        className="absolute top-0 left-0 max-sm:40%"
      >
        <path
          d="M0 0C0 0 588 0 600 0C625.5 0 638 15.8 662 35C704.5 69 710 75 737 80C737.695 80.1288 0 80 0 80V0Z"
          fill="#002577"
        />
      </svg>
    </footer>
  );
};

export default Footer;
