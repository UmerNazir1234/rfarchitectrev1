import React from "react";
import Hero from "@/components/Hero";
import ContactForm from "./_components/ContactForm";
import GetinTouch from "@/components/GetinTouch";

const page = () => {
  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720528423/RfTechnologiesWebsite/u3zkpsspioigvktsnwve.png"
        title="Get in Touch, Get"
        colorTitle="Ahead"
      />
      <ContactForm />
      <GetinTouch />
    </>
  );
};

export default page;
