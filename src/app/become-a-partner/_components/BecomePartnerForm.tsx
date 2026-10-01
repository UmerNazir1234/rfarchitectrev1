"use client";
import React, { useState } from "react";
import Heading from "@/components/Heading";
import { baseURL } from "@/lib/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
type formProps = {
  name: string;
  email: string;
  message: string;
  file: null;
  joinUs: "companyToCompany" | "outSourceProject";
};
const BecomePartnerForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<formProps>({
    name: "",
    email: "",
    message: "",
    file: null,
    joinUs: "companyToCompany", // default value
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
            joinUs: "companyToCompany",
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
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="input--field !text-black bg-transparent border-gray-600"
                      required
                    />
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="input--field !text-black  bg-transparent border-gray-600"
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
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input--field !text-black  bg-transparent border-gray-600"
                    rows={6}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-full mt-8">
                <p className="text-black font-bold md:text-2xl text-base">
                  How would you like to join us?
                </p>

                <div className="flex items-center justify-between mt-5 flex-wrap md:flex-nowrap gap-6">
                  <div className="bg-blueLight w-full p-4 rounded-lg border-primary border basis-full">
                    <label className="flex items-center justify-start gap-3">
                      <input
                        type="radio"
                        name="joinOption"
                        defaultChecked={formData.joinUs === "companyToCompany"}
                        onChange={handleInputChange}
                      />
                      <p className="text-xl">Company to Company Business</p>
                    </label>
                  </div>
                  <div className="bg-blueLight w-full p-4 rounded-lg border-primary border basis-full">
                    <label className="flex items-center justify-start gap-3">
                      <input
                        type="radio"
                        name="joinOption"
                        defaultChecked={formData.joinUs === "outSourceProject"}
                        onChange={handleInputChange}
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
                  <span>Send Inquiry</span>
                  {loading && (
                    <AiOutlineLoading3Quarters className="ms-3 animate-spin" />
                  )}
                </button>
              </div>
              {successMessage && (
                <div className="tex text-green-600 font-normal text-xl mt-4 border rounded p-3 border-gray-600">
                  {successMessage}
                </div>
              )}
              {error && (
                <div className="mt-4 text-red-600 font-medium">{`Form submission failed: We encountered an issue while processing your request. Please try again later !!`}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomePartnerForm;
