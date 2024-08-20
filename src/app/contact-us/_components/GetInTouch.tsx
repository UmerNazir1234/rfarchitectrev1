"use client";
import { Site } from "@/helpers/Site";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const GetInTouch = ({ data }: any) => {
  const [loading, setLoading] = useState();
  return (
    <section className="bg-light relative z-50">
      <div className="page-width xl:py-40 lg:py-36 py-20">
        <div className="flex lg:flex-nowrap flex-wrap items-center justify-center xl:gap-20 lg:gap-10 md:gap-6 gap-3">
          <div className=" lg:basis-1/2 relative z-20 basis-full rounded-lg overflow-hidden">
            {loading ? (
              <iframe
                className="rounded-2xl w-full min-h-[500px] shadow-lg relative z-10"
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                }
              ></iframe>
            ) : (
              <iframe
                className="rounded-2xl w-full min-h-[500px] shadow-lg relative z-10"
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                }
              ></iframe>
            )}
          </div>

          <div className="lg:basis-1/2 basis-full relative z-50 ">
            <div className="flex items-start justify-center flex-col lg:gap-10 gap-6">
              <div className="">
                <h3 className="text-primary !font-bold">{data?.title}</h3>
              </div>

              <div className="">
                <p className="p-lg flex items-center justify-start gap-4">
                  {" "}
                  <span>
                    <FaLocationDot className="icon iocn--map text-secondary" />
                  </span>
                  <span>{Site?.address}</span>
                </p>
              </div>
              <div className="">
                <Link href={`mailto:` + `${Site?.email}`}>
                  <p className="p-lg flex items-center justify-start gap-4">
                    {" "}
                    <span>
                      <MdEmail className="icon iocn--email text-secondary" />
                    </span>
                    <span>{Site?.email}</span>
                  </p>
                </Link>
              </div>

              <div className="">
                <Link href={`tel:` + `${Site?.number}`}>
                  <p className="p-lg flex items-center justify-start gap-4">
                    {" "}
                    <span>
                      <FaPhone className="icon iocn--phone text-secondary" />
                    </span>
                    <span>{Site?.number}</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={`https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720604874/RfTechnologiesWebsite/Vector_1_erwppa.png`}
        loading="lazy"
        alt="Get in touch background image"
        width={545}
        height={427}
        className="absolute z-10 lg:top-[160px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bottom-0 right-0 max-lg:h-60 max-lg:w-80"
      />
    </section>
  );
};

export default GetInTouch;
