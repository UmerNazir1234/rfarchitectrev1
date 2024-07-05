"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

const ServiceSlider = () => {
  return (
    <section className="w-full -mt-80 mb-20 z-50 relative ">
      <div className="">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="!pb-16"
        >
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          title="How We Do It"
          classes="bg-secondary uppercase"
          enableIcons={true}
          iconStyle="stroke-secondary"
        />
      </div>
    </section>
  );
};

export default ServiceSlider;
