import Heading from "@/components/Heading";
import IconBlueTicksDots from "@/components/Icons/IconBlueTicksDots";
import ImageWithText from "@/components/ImageWithText";
import { blueTicksImageWithText } from "@/data/blueticks";
import React from "react";

const TicktingSolution = () => {
  return (
    <div className="text-center max-sm:pt-10">
      <Heading
        title="SIMPLIFIED TICKTING <span class='text-secondary'>SOLUTIONS</span>"
        icon={true}
        iconStyle="stroke-primary"
        classes="text-primary font-bold drop-shadow-lg max-sm:text-xl "
      />
      <div className="relative">
        <ImageWithText content={blueTicksImageWithText} classes="sm:!pt-16" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="598"
          height="641"
          viewBox="0 0 598 641"
          fill="none"
          className="absolute -top-56 left-0 max-md:h-96 max-md:w-96 max-sm:h-72 max-sm:w-72 "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M226.726 106.963C259.534 121.766 299.608 107.399 332.183 122.708C364.862 138.066 388.036 166.925 411.926 193.999C436.69 222.063 452.014 255.68 475.344 284.946C514.576 334.162 596.105 363.279 597.034 426.212C597.86 482.219 552.42 498.341 503.73 526.032C461.448 550.078 405.548 530.884 364.349 556.74C315.79 587.214 326.188 649.906 269.873 639.17C206.519 627.091 190.756 564.889 133.923 534.399C80.896 505.952 9.425 586.396 -42.9361 556.74C-86.9264 531.826 -84.2016 462.648 -81.94 412.143C-79.8409 365.268 -42.9875 328.219 -30.6755 282.941C-18.9461 239.806 -25.2523 194.392 -11.1902 151.96C6.64642 98.1382 7.00671 11.6637 62.719 1.12697C127.461 -11.1176 166.667 79.8642 226.726 106.963Z"
            fill="#EDAC18"
            fill-opacity="0.18"
          />
        </svg>
        <IconBlueTicksDots classes="max-lg:w-40 max-lg:h-40  absolute right-0 -bottom-24 " />
      </div>
    </div>
  );
};

export default TicktingSolution;
