"use client";

import React from "react";
import ServiceCard from "@/components/ServiceCard";
type props = {
  cards: {
    id: number;
    icon: React.ReactElement;
    iconBg?: string;
    title: string;
    content: string;
    btnText: string;
    btnLink: string;
  }[];
};
const ServiceSlider = ({ cards }: props) => {
  return (
    <section className="w-full lg:-mt-[240px] md:-mt-[210px] max-md:-mt-[150px] max-sm:-mt-[80px] mb-20 z-50 relative serviceSlider">
      <div className="page-width grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {cards?.map((card) => (
          <ServiceCard key={card?.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSlider;
