import Form from "@/components/Form";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactForm = ({ data }: any) => {
  return (
    <section className="bg-no-repeat bg-cover  bg-black !z-50 relative ">
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
