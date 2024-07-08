"use client";
import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  return (
    <section className=" relative md:py-32 py-20">
      <div className="page-width">
        <div className="flex items-center justify-center">
          <Button
            title="testimonials"
            classes="bg-secondary"
            icon={true}
            enableIcons={true}
          />
        </div>
        <h2 className="text-primary text-center mt-8 max-w-5xl m-auto">
          what our clients say
        </h2>
        <div className="mt-20 relative">
          <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            scrollbar={{ draggable: true }}
            spaceBetween={20}
            slidesPerView={3}
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
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="featuredProjects testimonial !pb-20 "
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720433679/dlpwnp32urkh4nv8bgua.png"
        }
        loading="lazy"
        alt="Dots"
        width={697}
        height={546}
        className="absolute top-0 left-[30%] max-xl:max-w-[400px] max-xl:max-h-[400px] max-md:max-w-[200px] max-md:max-h-[200px] max-md:left-auto max-md:right-0"
      />
    </section>
  );
};

export default Testimonials;
