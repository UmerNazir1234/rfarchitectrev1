"use client";

import React from "react";
import CaseStudycard from "./CaseStudycard";
import Button from "@/components/Button";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type projectsProps = {
  id: number;
  title?: string;
  url?: string;
  image?: string;
};
type propsProjects = {
  data: projectsProps[];
};
const FeaturedProjects = ({ data }: propsProjects) => {
  return (
    <section className="bg-gradient-to-tr from-primary to-primarylight  relative md:py-32 py-20">
      <div className="xl:ps-48 max-xl:px-4">
        <div className="flex items-center justify-center">
          <Button
            title="featured projects"
            classes="bg-secondary"
            icon={true}
            href="/our-work"
            enableIcons={true}
          />
        </div>
        <h2 className="text-white text-center mt-6 max-w-5xl m-auto ">
          We Serve the Best Works View Case Studies
        </h2>
        <div className="mt-16 relative">
          <Swiper
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                slidesPerView: 3,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="featuredProjects !pb-20 max-md:!pb-16"
          >
            {data?.map((item) => (
              <SwiperSlide key={item?.id}>
                <CaseStudycard
                  title={item?.title}
                  url={item?.url}
                  image={item?.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720274241/RfTechnologiesWebsite/Group_1597883856_rtysqf.png"
        }
        loading="lazy"
        alt="Dots"
        width={200}
        height={200}
        className="absolute top-0 right-0 max-md:max-w-28 max-md:max-h-28"
      />
      <Image
        src={
          "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720274602/RfTechnologiesWebsite/Frame_1597883705_1_jhja6f.png"
        }
        loading="lazy"
        alt="Dots"
        width={200}
        height={200}
        className="absolute -bottom-24 left-0 max-md:max-w-28 max-md:max-h-28 max-md:-bottom-12 "
      />
    </section>
  );
};

export default FeaturedProjects;
