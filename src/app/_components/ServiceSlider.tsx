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
    <section className="relative w-full pt-8 mb-20 serviceSlider">
      <div className="page-width grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {cards?.map((card) => (
          <div key={card?.id} className="min-w-0">
            <ServiceCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSlider;
