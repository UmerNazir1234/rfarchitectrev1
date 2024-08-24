import Form from "@/components/Form";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactForm = ({ data }: any) => {
  return (
    <section className="bg-no-repeat bg-cover  bg-black !z-50 relative  w-full block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 53"
        width="100%"
        height="100%"
        fill="none"
        className="w-full block -mb-1 top-svg -top-34"
      >
        <path
          d="M307.5 0H1440V81H203C211.4 81 219.166 77 222 75C237.166 64 278.4 12.6 286 7C293.6 1.4 303.5 0 307.5 0Z"
          fill="white"
        />
      </svg>
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
    </section>
  );
};

export default ContactForm;
