"use client";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import fetchClient from "@/helpers/fetchClient";

const Newsletter = ({ classes }: any) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<any>("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email) return;
      setLoading(true);
      const response = await fetchClient("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response && response?.status == "Success") {
        setMessage(
          response?.message ||
            "Subscription successful! Check your email for a welcome newsletter."
        );
        setError(false);
        setEmail("");
      } else {
        setMessage("");
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <section className={`${classes || ""} lg:pb-20 md:pb-16 pb-12 pt-8 `}>
      <div className="page-width">
        <div className="bg-secondary rounded-xl sm:p-10 p-4 sm:py-16 py-10 relative">
          <div className="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap">
            <div className="lg:basis-[55%] basis-full">
              <h3 className="text-white lg:text-start text-center lg:m-0 mb-3">
                Subscribe to our Newsletter
              </h3>
            </div>
            <form
              className="lg:basis-[45%] basis-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="bg-white flex items-center justify-between gap-2 p-2 rounded-full ps-4">
                {" "}
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-full w-full px-2 py-1.5 bg-transparent border-none sm:text-2xl relative z-10 focus:ring-0 focus:outline-none hover:outline-none focus-visible:outline-none"
                  placeholder="Enter you email"
                />
                <button
                  className="btn btn--primary uppercase max-sm:text-base"
                  type="submit"
                  disabled={loading}
                >
                  <span>Subscribe</span>
                  {loading && (
                    <AiOutlineLoading3Quarters className="ms-3 animate-spin" />
                  )}
                </button>
              </div>
              {message && (
                <div className="p-3 font-semibold text-lg border-primary border rounded-full mt-3">
                  {message}
                </div>
              )}
              {error && (
                <div className="p-3 font-semibold text-lg border-primary border rounded-full mt-3">
                  Something went wrong! Please try again.
                </div>
              )}
            </form>
          </div>
          <Image
            src={
              "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1719937136/RfTechnologiesWebsite/Trade_Mark-02_2_pp7nsz.svg"
            }
            loading="lazy"
            alt="rftech logo"
            width={250}
            height={250}
            className="absolute left-0 bottom-0 object-contain max-md:w-40 max-md:h-40 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
