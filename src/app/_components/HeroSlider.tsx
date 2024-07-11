"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowUpRight } from "react-icons/go";
import Button from "@/components/Button";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
  url?:string;
};

type HeroSliderProps = {
  data: Slide[];
};

const HeroSlider = ({ data }: HeroSliderProps) => {
  return (
    <section className="w-full heroSlider ">
      <div className="md:h-[90vh] h-[80vh] ">
        <ul className="h-full w-full flex">
          <Swiper
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Pagination]}
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
                    <h1
                      className="lg:text-[120px]  drop-shadow-2xl md:text-[70px] text-4xl font-bold leading-tight text-white"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h1>
                    {item?.description && (
                      <p className="text-md !font-advent_Pro text-3xl m-auto text-white mt-6 max-w-[80%]">
                        {item?.description}
                      </p>
                    )}
                    <p className="mt-10 lg:mt-16 flex items-center justify-center ">
                      <Button
                        title="let's talk"
                        href={item?.url}
                      
                        classes="bg-white !text-primary uppercase !px-14  hover:!text-white bg-gradient-to-l hover:from-primary hover:to-primary hover:!transition-all hover:!ease-out hover:!duration-200"
                        icon={
                          <GoArrowUpRight className="group-hover:!stroke-white group-hover:!fill-white" />
                        }
                      />
                    </p>
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
