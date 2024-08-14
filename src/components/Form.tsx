import React from "react";
import Heading from "./Heading";
import Link from "next/link";

const Form = ({ data }: any) => {
  return (
    <>
      {" "}
      <div className="bg-themblack lg:mt-28 mt-16 lg:px-10 lg:py-16 py-6 px-2 rounded-2xl border border-white border-opacity-45 ">
        <div>
          <div className="flex items-center justify-center">
            <Heading
              title={data?.title}
              icon={true}
              iconStyle="!stroke-white"
              classes="text-white "
            />
          </div>
          <p className="text-white md:text-2xl text-base text-center">
            {data?.tagline}
          </p>
        </div>

        <div className="flex flex-wrap md:pt-16 pt-10">
          <div className="flex items-center justify-between md:gap-10 gap-2 w-full">
            <div className="basis-1/2 ">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="input--field"
                />
              </div>
            </div>
            <div className="basis-1/2 ">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className=" input--field "
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="input--field"
                rows={6}
              ></textarea>
            </div>
          </div>
          <div className="w-full mt-8 ">
            <input
              className="input--field !border-dashed !py-10"
              id="file_input"
              type="file"
            />
          </div>

          <div className="flex items-start gap-4 mt-8">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="mt-1.5"
            ></input>
            <label
              htmlFor="link-checkbox"
              className="lg:text-2xl md:text-xl text-base text-white leading-tight"
            >
              We care about your privacy and automatically agree to the
              following NDA. This site is protected by reCAPTCHA and the Google
              Privacy Policy and Terms of Service apply.
              <Link
                href="#"
                className="ps-2 text-white dark:text-black hover:underline"
              >
                Privacy Policy and Terms of Service apply.
              </Link>
              .
            </label>
          </div>

          <div className="w-full p-2 lg:mt-16 mt-8 flex items-center justify-center">
            <button
              type="submit"
              className="btn bg-white !text-secondary lg:!px-32 !px-24"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
