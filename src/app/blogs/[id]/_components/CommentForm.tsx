import React from "react";
import Link from "next/link";
import Heading from "@/components/Heading";

const CommentForm = () => {
  return (
    <>
      <div className="flex flex-wrap md:pt-8 pt-10">
        <h4 className="text-[26px] capitalize">Leave Your Comment</h4>
        <div className="w-full mt-8">
          <div className="relative mb-4">
            <textarea
              id="comments"
              name="comments"
              placeholder="Comments"
              className="input--field !text-black"
              rows={4}
            ></textarea>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="input--field !text-black"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
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
      </div>
    </>
  );
};

export default CommentForm;
