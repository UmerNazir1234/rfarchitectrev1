import React from "react";
import { homeContent } from "@/data/home";
import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";

const page = () => {
  const { cards } = homeContent?.ourServices || {};
  return (
    <>
      <Hero
        title="Our Services"
        image={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1727169916/RfTechnologiesWebsite/Desktop_-_10_ieqlla.png"
        }
      />

      <div className="bg-white section py-12">
        <div className="!max-w-screen-2xl px-4 m-auto">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => (
                <div
                  key={card?.id} // Correct placement of the key prop
                  className="xl:basis-[22%] md:basis-[30%] sm:basis-[45%] basis-full"
                >
                  <ServiceCard card={card} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
