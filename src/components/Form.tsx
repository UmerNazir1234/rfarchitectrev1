"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Form = ({ data }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Implement form submission logic here
    console.log("Form submitted:", formData);

    // try {
    //   setLoading(true);
    //   const form = {
    //     to: "raoabrar629@gmail.com",
    //     subject: "Need Help?",
    //     text: "Sending this message form the website",
    //     html: `<h1>Name:  ${formData?.name}</h1><p>Email:  ${formData?.email}</p><p>Message: <br/> ${formData?.message}</p>`,
    //   };
    //   const response = await fetch(baseURL + "/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form),
    //   });
    //   console.log(response);
    //   setLoading(false);
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // }
    // // Reset form fields after submission (optional)
    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
  };

  return (
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

      <form onSubmit={handleSubmit} className="flex flex-wrap md:pt-16 pt-10">
        <div className="flex items-center justify-between md:gap-10 gap-2 w-full">
          <div className="basis-1/2 ">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData?.name}
                onChange={(e) => handleInputChange(e)}
                placeholder="Name"
                className="input--field text-black"
                required
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
                value={formData?.email}
                onChange={(e) => handleInputChange(e)}
                className=" input--field text-black"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="relative">
            <textarea
              id="message"
              name="message"
              className="input--field text-black"
              value={formData?.message}
              onChange={(e) => handleInputChange(e)}
              required
              rows={6}
            ></textarea>
          </div>
        </div>
        <div className="w-full mt-8 ">
          <input
            className="input--field !border-dashed !md:py-10 text-black"
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
            We care about your privacy and automatically agree to the following
            NDA. This site is protected by reCAPTCHA and the Google Privacy
            Policy and Terms of Service apply.
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
            disabled={loading}
            className="btn bg-white !text-secondary lg:!px-32 !px-24"
          >
            <span>Submit</span>
            {loading && (
              <AiOutlineLoading3Quarters className="ms-3 animate-spin" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
