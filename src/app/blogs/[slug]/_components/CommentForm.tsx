"use client";
import React, { useState } from "react";

const CommentForm = () => {
  type data = {
    comments?: string;
    name?: string;
    email?: string;
  };
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<data>({
    comments: "",
    name: "",
    email: "",
  });

  const handleInputChnage = (e: any) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data", formData);
  };
  return (
    <>
      <form className="flex flex-wrap md:pt-8 pt-10" onSubmit={handleSubmit}>
        <h4 className="text-[26px] capitalize">Leave Your Comment</h4>
        <div className="w-full mt-8">
          <div className="relative mb-4">
            <textarea
              id="comments"
              name="comments"
              placeholder="Comments"
              value={formData?.comments}
              onChange={handleInputChnage}
              className="input--field !text-black"
              rows={4}
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
            />
          </div>
        </div>

        <div className="w-full p-2 lg:mt-4 flex items-center justify-center">
          <button
            type="submit"
            className="btn bg-white !text-secondary btn--outline !px-16 !border-secondary"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
