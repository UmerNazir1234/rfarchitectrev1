"use client";
import React, { useState } from "react";
import Heading from "@/components/Heading";

const BecomePartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    joinOption: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="bg-no-repeat bg-cover ">
      <div className="pb-24 page-width">
        <div className="bg-black bg-opacity-10 lg:mt-28 mt-16 lg:px-10 lg:py-16 py-6 px-2 rounded-3xl border-[#97989C] rounded-4xl border border-opacity-45 bp-form-bg">
          <div>
            <div className="flex items-center justify-center">
              <Heading
                title="Contact Us"
                icon={true}
                iconStyle="!stroke-primary"
                classes="text-primary "
              />
            </div>
            <p className="md:text-2xl text-base text-center text-black">
              We look forward to your questions and inquiries.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap md:pt-16 pt-10">
              <div className="flex items-center justify-between md:gap-10 gap-2 w-full">
                <div className="basis-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="input--field !text-black"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="input--field !text-black"
                      value={formData.email}
                      onChange={handleChange}
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
                    className="input--field !text-black"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="w-full mt-8">
                <p className="text-black font-bold md:text-2xl text-base">
                  How would you like to join us?
                </p>

                <div className="flex items-center justify-between gap-10 mt-5 flex-wrap">
                  <div className="bg-blueLight w-full p-4 rounded-lg border-primary border">
                    <label className="flex items-center justify-start gap-3">
                      <input
                        type="radio"
                        name="joinOption"
                        value="companyToCompany"
                        checked={formData.joinOption === "companyToCompany"}
                        onChange={handleChange}
                      />
                      <p className="text-xl">Company to Company Business</p>
                    </label>
                  </div>
                  <div className="bg-blueLight w-full p-4 rounded-lg border-primary border">
                    <label className="flex items-center justify-start gap-3">
                      <input
                        type="radio"
                        name="joinOption"
                        value="outSourceProject"
                        checked={formData.joinOption === "outSourceProject"}
                        onChange={handleChange}
                      />
                      <p className="text-xl">Out Source Project</p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full p-2 lg:mt-16 mt-8 flex items-center justify-center">
                <button
                  type="submit"
                  className="btn bg-primary !text-secondary lg:!px-32 !px-24 
                  !text-white"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomePartnerForm;
