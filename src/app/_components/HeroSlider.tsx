"use client";

import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSliderButtons from "./HeroSliderButtons";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface HeroSliderProps {
  data: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ data }) => {
  return (
    <section className="w-full ">
      <div className=" h-screen">
        <ul className="h-full w-full flex">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={false}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map((item) => (
              <SwiperSlide key={item?.id}>
                <div
                  className="h-full w-full absolute left-0 top-0 "
                  style={{
                    background: `url(${item?.image}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center md:max-w-[57%] max-w-[90%]">
                    <p className="lg:text-[120px] md:text-[70px] text-4xl font-semibold leading-tight text-white">
                      {item?.title}
                    </p>
                    {item?.description && (
                      <p className="text-md p-lg  m-auto text-white">
                        {item?.description}
                      </p>
                    )}
                    {item?.buttons.length > 0 ? (
                      <p className="  mt-10 lg:mt-20">
                        <HeroSliderButtons buttons={item?.buttons} />
                      </p>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default HeroSlider;
