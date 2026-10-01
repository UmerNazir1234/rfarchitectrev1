"use client";
import { baseURL } from "@/lib/utils";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
type data = {
  message: string;
  name: string;
  email: string;
  published: boolean;
  article: any;
};
const CommentForm = ({ id }: { id: any }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<data>({
    message: "",
    name: "",
    email: "",
    published: false,
    article: id,
  });

  const handleInputChnage = (e: any) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);

    try {
      let form = new FormData();
      form.append("name", formData?.name);
      form.append("email", formData?.email);
      form.append("message", formData?.message);
      form.append("article", id);
      const response = await fetch(baseURL + "/contact-us", {
        method: "POST",
        body: form,
      });
      if (response?.ok) {
        const result = await response?.json();
        if (result?.status == "Success") {
          setError(false);
          setSuccessMessage(
            "Thank you! Your form has been successfully submitted."
          );
          setLoading(false);
          setFormData({
            message: "",
            name: "",
            email: "",
            published: false,
            article: id,
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
    <>
      <form className="flex flex-wrap md:pt-8 pt-10" onSubmit={handleSubmit}>
        <h4 className="text-[26px] capitalize">Leave Your Comment</h4>
        <div className="w-full mt-8">
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              value={formData?.message}
              onChange={handleInputChnage}
              className="input--field !text-black"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              onChange={handleInputChnage}
              placeholder="Name"
              className="input--field !text-black"
              required
            />
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChnage}
              value={formData?.email}
              placeholder="Email"
              className=" input--field !text-black"
              required
            />
          </div>
        </div>

        <div className="w-full p-2 lg:mt-4 flex items-center justify-center">
          <button
            type="submit"
            className="btn bg-white !text-secondary btn--outline !px-16 !border-secondary"
          >
            <span>Post Comment</span>
            {loading && (
              <AiOutlineLoading3Quarters className="ms-3 animate-spin" />
            )}
          </button>
        </div>
        {successMessage && (
          <div className="tex text-green-500 font-normal text-xl mt-4">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-600 font-medium">{`Form submission failed: We encountered an issue while processing your request. Please try again later !!`}</div>
        )}
      </form>
    </>
  );
};

export default CommentForm;
