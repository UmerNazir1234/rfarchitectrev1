import Form from "@/components/Form";
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-no-repeat bg-cover relative bg-black">
      <div className="lg:py-48 py-24 page-width">
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
        <Form />
      </div>
    </section>
  );
};

export default ContactForm;
