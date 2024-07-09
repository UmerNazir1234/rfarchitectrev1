import Form from "@/components/Form";
import Heading from "@/components/Heading";
import { url } from "inspector";
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <section className=" bg-no-repeat bg-cover relative bg-black">
      <div className="py-48 page-width">
        <Image
          src={
            "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720517018/RfTechnologiesWebsite/Group_ykgflq.png"
          }
          loading="lazy"
          alt="Form background image"
          width={300}
          height={250}
          className="m-auto"
        />
        <div className="bg-themblack mt-28 px-10 py-16 rounded-2xl border border-white border-opacity-45 ">
          <div>
            <div className="flex items-center justify-center">
              <Heading
                title="Contact Us"
                icon={true}
                iconStyle="!stroke-white"
                classes="text-white "
              />
            </div>
            <p className="text-white text-2xl text-center">
              We look forward to your questions and inquiries.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
