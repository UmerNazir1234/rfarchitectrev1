import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const CaseStudycard = () => {
  return (
    <div className="pl-3">
      <div className="max-w-sm bg-light border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
        <div className="p-2 flex justify-between ">
          <a href="#">
            <h5 className="mb-2 text-primary dark:text-white">
              Elite, ECW
            </h5>
          </a>

          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#EDAC18] dark:bg-[#EDAC18] dark:hover:bg-[#EDAC18] dark:focus:ring-[#EDAC18]"
          >
            Learn More
            <GoArrowUpRight />
          </a>
        </div>
        <a href="#">
          <img
            className="rounded-t-lg p-3"
            src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720256827/image_8_j2fxk9.png"
            alt="img"
          />
        </a>
      </div>
    </div>
  );
};

export default CaseStudycard;
