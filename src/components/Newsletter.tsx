import React from "react";
import Button from "./Button";
import Image from "next/image";

const Newsletter = ({ classes }: any) => {
  return (
    <section className={`${classes || ""} pb-20 pt-12 `}>
      <div className="page-width">
        <div className="bg-secondary rounded-xl sm:p-10 p-4 sm:py-16 py-10 relative">
          <div className="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap">
            <div className="lg:basis-[55%] basis-full">
              <h3 className="text-white lg:text-start text-center lg:m-0 mb-3">
                Subscribe to our Newsletter
              </h3>
            </div>
            <div className="lg:basis-[45%] basis-full">
              <div className="bg-white flex items-center justify-between gap-2 p-2 rounded-full ps-4">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-full w-full px-2 py-1.5 border-none sm:text-2xl relative z-10"
                  placeholder="Enter you email"
                />
                <button className="btn btn--primary uppercase max-sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <Image
            src={
              "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719937136/RfTechnologiesWebsite/Trade_Mark-02_2_pp7nsz.svg"
            }
            loading="lazy"
            alt="rftech logo"
            width={250}
            height={300}
            className="absolute left-0 bottom-0 object-contain max-md:w-40 max-md:h-40 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
