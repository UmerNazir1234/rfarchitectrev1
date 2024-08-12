import React from "react";
import Button from "./Button";
import Image from "next/image";

const Newsletter = ({ classes }: any) => {
  return (
    <section className={`${classes || ""} pb-20 pt-12 `}>
      <div className="page-width">
        <div className="bg-secondary rounded-xl sm:p-10 p-4 sm:py-16 py-10 relative">
          <div className="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap">
            <div className="lg:basis-2/3 basis-full">
              <h3 className="text-white lg:text-start text-center lg:m-0 mb-3">
                Subscribe to our Newsletter
              </h3>
            </div>
            <div className="lg:basis-1/3 basis-full">
              <div className="bg-white flex items-center justify-between gap-2 p-2 rounded-full ps-4">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-full w-full px-2 py-1.5 border-none"
                  placeholder="Enter you email"
                />
                <Button title="Subscribe" />
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
            className="absolute left-0 bottom-0 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
