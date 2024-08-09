"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCard from "@/components/ServiceCard";
type props = {
  cards: {
    id: number;
    icon: string;
    title: string;
    content: string;
    btnText: string;
    btnLink: string;
  }[];
};
const ServiceSlider = ({ cards }: props) => {
  console.log(cards);
  return (
    <section className="w-full xl:-mt-[300px] sm:-mt-[200px] -mt-[140px] mb-20 z-50 relative max-sm:px-4 serviceSlider">
      <div className="">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="!pb-16 "
        >
          {cards?.map((card) => {
            return (
              <SwiperSlide key={card?.id}>
                <ServiceCard card={card}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSlider;
