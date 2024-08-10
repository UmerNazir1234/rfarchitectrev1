import React from "react";

type props = {
  clasess?: string;
};
const IconLeading = ({ clasess }: props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1239 93"
      fill="none"
      className={`${clasess} max-w-full`}
    >
      <path
        d="M39 53C8.6 53 0.333333 80 0 93H1239V38.5C1239 8.5 1213.67 0.333333 1201 0H349.5C336.7 0 328.956 4 323 8.5C315.5 14.1667 296.6 28.3 281 39.5C265.4 50.7 254.167 53.1667 250.5 53H39Z"
        fill="url(#paint0_linear_1766_1506)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1766_1506"
          x1="45.4633"
          y1="52.7784"
          x2="1227.01"
          y2="52.779"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BCCDF2" />
          <stop offset="1" stop-color="#0B3DAB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconLeading;
