"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { baseURL } from "@/lib/utils";

type FormProps = {
  data: {
    title: string;
    tagline: string;
  };
};

type FormData = {
  name: string;
  email: string;
  message: string;
  joinUs: boolean;
  file: File | null;
};

const Form = ({ data }: FormProps) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
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

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let form = new FormData();
      form.append("name", formData?.name);
      form.append("email", formData?.email);
      form.append("message", formData?.message);
      form.append("join_us", String(formData?.joinUs));
      form.append("file", formData?.file ? formData?.file : "");
      const response = await fetch(baseURL + "/contact-us", {
        method: "POST",
        body: form,
      });
      if (response?.ok) {
        const result = await response?.json();
        if (result?.status == "Success") {
          setError(false);
          setSuccessMessage(
            "Thank you! Your form has been successfully submitted. We will get back to you shortly."
          );
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
            joinUs: false,
            file: null,
          });
        } else {
          setError(true);
          setLoading(false);
          console.error(
            "Form submission failed: We encountered an issue while processing your request. Please try again later !!"
          );
        }
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error(
        "Form submission failed: We encountered an issue while processing your request. Please try again later !!"
      );
    }
  };

  return (
    <div className="bg-themblack relative z-30 lg:mt-28 mt-16 max-sm:mt-8 lg:px-10 lg:py-16 py-6 px-2 rounded-2xl border border-white border-opacity-45">
      <div>
        <div className="flex items-center justify-center">
          <Heading
            title={data?.title}
            icon={true}
            iconStyle="!stroke-white"
            classes="text-white"
          />
        </div>
        <p className="text-white md:text-2xl text-base text-center">
          {data?.tagline}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-wrap md:pt-16 pt-10">
        <div className="flex max-md:flex-wrap items-center justify-between md:gap-10 gap-0 w-full">
          <div className="basis-1/2 max-md:basis-full ">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="input--field text-black"
                required
              />
            </div>
          </div>
          <div className="basis-1/2 max-md:basis-full max-md:mt-8">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input--field text-black"
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
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              rows={6}
            ></textarea>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="relative">
            <input
              className="input--field !border-dashed !md:py-10 text-black"
              id="file_input"
              type="file"
              name="file"
              onChange={handleFileChange}
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
            className="lg:text-2xl md:text-xl text-base text-white leading-tight"
          >
            We care about your privacy and automatically agree to the following
            NDA. This site is protected by reCAPTCHA and the Google Privacy
            Policy and Terms of Service apply.
            <Link
              href="/policies/privacy-policy"
              className="ps-2 text-white hover:underline"
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
