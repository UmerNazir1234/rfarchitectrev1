import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

type contentProps = {
  title: string;
  description?: string;
  classes?: string;
};

const HeadingBox = ({ title, description, classes }: contentProps) => {
  return (
    <section className="relative">
      <div className="page-width ">
        <div className="flex items-center justify-center lg:py-36 py-16 lg:gap-24 gap-6 lg:flex-nowrap flex-wrap">
          <div className="lg:basis-[45%] basis-full max-lg:ps-6 max-sm:text-center max-sm:p-0">
            <Heading
              title={title}
              classes={classes}
              iconStyle="stroke-primary"
            />
          </div>
          <div className="lg:basis-[65%] basis-full relative z-50">
            <p className="bg-grayDark md:p-10 p-6 rounded-[50px] border-primary border md:text-2xl text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <div className="relative  ">
          {/* <Image
            className="max-w-full block"
            loading="lazy"
            alt="Background logo"
            src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719920546/RfTechnologiesWebsite/Vector_vpvzwx.png"
            fill
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="422"
            height="550"
            viewBox="0 0 422 550"
            fill="none"
            className="xl:h-[550px] xl:w-[583px] lg:h-[400px] lg:w-[420px] h-[300px] w-[300px] object-contain"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M155.497 91.7059C127.369 104.397 93.0114 92.0801 65.0827 105.205C37.0652 118.372 17.1964 143.115 -3.28638 166.328C-24.5179 190.388 -37.6563 219.21 -57.6583 244.302C-91.2947 286.498 -161.194 311.462 -161.99 365.418C-162.698 413.437 -123.74 427.259 -81.9951 451C-45.7446 471.616 2.18185 455.16 37.5049 477.328C79.1374 503.456 70.2225 557.205 118.505 548C172.823 537.644 186.337 484.315 235.063 458.174C280.527 433.784 341.803 502.753 386.696 477.328C424.411 455.967 422.075 396.657 420.136 353.355C418.336 313.167 386.74 281.402 376.184 242.583C366.127 205.601 371.534 166.664 359.478 130.284C344.185 84.14 343.877 10 296.111 0.966218C240.604 -9.53179 206.99 68.4726 155.497 91.7059Z"
              fill="#EDAC18"
              fillOpacity="0.18"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeadingBox;
