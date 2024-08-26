import Form from "@/components/Form";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactForm = ({ data }: any) => {
  return (
    <section className=" relative z-60 -mt-[82px] w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="81"
        viewBox="0 0 1440 81"
        fill="none"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1766_1353)" transform="scale(1)">
          <path
            d="M307.5 0H1440V81H203C211.4 81 219.166 77 222 75C237.166 64 278.4 12.6 286 7C293.6 1.4 303.5 0 307.5 0Z"
            fill="black"
          />
          <path
            d="M204 81H0V0H308.5C300.1 0 292.333 4 289.5 6C274.333 17 233.1 68.4 225.5 74C217.9 79.6 208 81 204 81Z"
            fill=""
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1353">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="bg-no-repeat bg-cover  bg-black w-full block">
        <div className="lg:py-48 py-24 page-width">
          <Link href={Site?.url}>
            <Image
              src={data?.logo}
              loading="lazy"
              alt="Rf Logo"
              width={300}
              height={250}
              className="m-auto"
            />
          </Link>
          <Form data={data} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
