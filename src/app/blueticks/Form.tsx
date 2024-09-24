"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { baseURL } from "@/lib/utils";

type FormData = {
  firstName: string;
  lastName: string;
  organization: string;
  phone: string;
  country: string;
  email: string;
  message: string;
  joinUs: boolean;
  file: File | null;
};

const Form = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    organization: "",
    country: "",
    phone: "",
    email: "",
    message: "",
    joinUs: false,
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    if (e.target && e.target.type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // setLoading(true);
    // try {
    //   let form = new FormData();
    //   form.append("firstName", formData?.firstName);
    //   form.append("lastName", formData?.lastName);
    //   form.append("organization", formData?.firstName);
    //   form.append("phone", formData?.phone);
    //   form.append("country", formData?.country);
    //   form.append("email", formData?.email);
    //   form.append("message", formData?.message);
    //   form.append("join_us", String(formData?.joinUs));
    //   form.append("file", formData?.file ? formData?.file : "");
    //   const response = await fetch(baseURL + "/contact-us", {
    //     method: "POST",
    //     body: form,
    //   });
    //   if (response?.ok) {
    //     const result = await response?.json();
    //     if (result?.status == "Success") {
    //       setError(false);
    //       setSuccessMessage(
    //         "Thank you! Your form has been successfully submitted. We will get back to you shortly."
    //       );
    //       setLoading(false);
    //       setFormData({
    //         firstName: "",
    //         lastName: "",
    //         organization: "",
    //         phone: "",
    //         country: "",
    //         email: "",
    //         message: "",
    //         joinUs: false,
    //         file: null,
    //       });
    //     } else {
    //       setError(true);
    //       setLoading(false);
    //       console.error(
    //         "Form submission failed: We encountered an issue while processing your request. Please try again later !!"
    //       );
    //     }
    //   }
    // } catch (error) {
    //   setError(true);
    //   setLoading(false);
    //   console.error(
    //     "Form submission failed: We encountered an issue while processing your request. Please try again later !!"
    //   );
    // }
    console.log(formData);
    console.log(e);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-wrap md:pt-10 pt-4">
        <div className="flex max-md:flex-wrap items-center justify-between md:gap-10 gap-0 w-full">
          <div className="basis-1/2 max-md:basis-full ">
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name*"
                className="input--field placeholder:text-white placeholder:text-opacity-40 bg-white bg-opacity-20 text-white p-3"
                required
              />
            </div>
          </div>
          <div className="basis-1/2 max-md:basis-full max-md:mt-8">
            <div className="relative">
              <input
                type="lastName"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name*"
                className="input--field placeholder:text-white placeholder:text-opacity-40 bg-white bg-opacity-20 text-white p-3 "
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Work Email*"
              className="input--field placeholder:text-white placeholder:text-opacity-40 bg-white bg-opacity-20 text-white p-3"
              required
            />
          </div>
        </div>
        <div className="flex max-md:flex-wrap items-center justify-between md:gap-10 gap-0 w-full mt-8">
          <div className="basis-1/2 max-md:basis-full ">
            <div className="relative">
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Organization*"
                className="input--field placeholder:text-white placeholder:text-opacity-40 bg-white bg-opacity-20 text-white p-3 "
                required
              />
            </div>
          </div>
          <div className="basis-1/2 max-md:basis-full max-md:mt-8">
            <div className="relative">
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone*"
                className="input--field placeholder:text-white placeholder:text-opacity-40 bg-white bg-opacity-20 text-white p-3 "
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="relative">
            <input
              id="country"
              type="text"
              name="country"
              className="input--field placeholder:text-white placeholder:text-opacity-40 bg-white bg-opacity-20 text-white p-3 "
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country*"
              required
            />
          </div>
        </div>

        <div className="flex items-start gap-4 mt-8">
          <input
            id="link-checkbox"
            type="checkbox"
            name="joinUs"
            checked={formData.joinUs}
            onChange={handleInputChange}
            className="mt-1.5"
          />
          <label
            htmlFor="link-checkbox"
            className="lg:text-[18px] md:text-[16px] text-sm text-white leading-tight font-nunito"
          >
            I agree to receive emails from <strong>RF Technologies </strong>,
            Inc. about relevant content, products, and services. I understand I
            can manage my communication preferences or unsubscribe at any time.
            <div className="sm:mt-8 pt-4 lg:text-[18px] md:text-[16px] text-sm">
              Please refer to our
              <span className="px-1.5">
                <Link
                  href="/policies/privacy-policy"
                  className=" text-white underline"
                >
                  Privacy Policy
                </Link>
              </span>
              or
              <span className="px-1.5">
                <Link
                  href="/policies/privacy-policy"
                  className=" text-white underline"
                >
                  Contact Us
                </Link>
              </span>
              for more details.
            </div>
          </label>
        </div>

        <div className="w-full p-2 lg:mt-16 mt-8 flex items-center justify-center">
          <button
            type="submit"
            disabled={loading}
            className="btn text-primary !bg-secondary lg:!px-16 !px-12"
          >
            <span>Request a Demo</span>
            {loading && (
              <AiOutlineLoading3Quarters className="ms-3 animate-spin" />
            )}
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="tex text-green-500 font-normal text-xl mt-4">
          {successMessage}
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-600 font-medium">{`Form submission failed: We encountered an issue while processing your request. Please try again later !!`}</div>
      )}
    </div>
  );
};

export default Form;
