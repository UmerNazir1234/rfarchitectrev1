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
    <div className="relative -mt-[130px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 81"
        fill="none"
        className="w-full max-w-full -mb-[1px]"
      >
        <g clipPath="url(#clip0_1766_1353)">
          <path
            d="M307.5 0H1440V81H203C211.4 81 219.166 77 222 75C237.166 64 278.4 12.6 286 7C293.6 1.4 303.5 0 307.5 0Z"
            fill="#002475"
          />
          <path
            d="M204 81H0V0H308.5C300.1 0 292.333 4 289.5 6C274.333 17 233.1 68.4 225.5 74C217.9 79.6 208 81 204 81Z"
            fill="transparent"
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1353">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <section className="bg-primary  md:py-12 py-8">
        <div className="xl:ps-48 max-xl:px-4">
          <div className="flex items-center justify-center">
            <Button
              title="CASE STUDIES"
              classes="bg-secondary"
              icon={true}
              href="/our-work"
              enableIcons={true}
            />
          </div>
          <h2 className="text-white text-center mt-6 max-w-5xl m-auto ">
            Business challenges met with practical delivery
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
          alt="Circle"
          width={200}
          height={200}
          className="absolute -bottom-24 left-0 max-md:max-w-28 max-md:max-h-28 max-md:-bottom-12 z-10 "
        />
          <Image
          src={
            "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1725888135/RfTechnologiesWebsite/Frame_1597883705_p6avmh.png"
          }
          loading="lazy"
          alt="Circle"
          width={200}
          height={200}
          className="absolute bottom-0 left-1 max-md:max-w-28 max-md:max-h-28 z-20 "
        />
       
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-full -mt-[1px]"
        viewBox="0 0 1440 81"
        fill="none"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1766_1358)">
          <path
            d="M968 0H1439.5V81.5L847 81C855.4 81 863.167 77 866 75C881.167 64 938.9 12.6 946.5 7C954.1 1.4 964 0 968 0Z"
            fill="transparent"
          />
          <path
            d="M847 81H0V0H967.5C959.1 0 951.333 4 948.5 6C933.333 17 876.1 68.4 868.5 74C860.9 79.6 851 81 847 81Z"
            fill="#002475"
          />
        </g>
        <defs>
          <clipPath id="clip0_1766_1358">
            <rect width="1440" height="81" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default FeaturedProjects;
