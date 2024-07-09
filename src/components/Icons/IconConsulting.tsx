import React from "react";

const IconConsulting = ({ classes,fill }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      className={`${classes}`}
    >
      <g clip-path="url(#clip0_873_41)">
        <path
          d="M68.75 50C68.75 60.3553 60.3553 68.75 50 68.75C39.6447 68.75 31.25 60.3553 31.25 50C31.25 39.6447 39.6447 31.25 50 31.25C60.3553 31.25 68.75 39.6447 68.75 50ZM100 68.75L81.25 50L100 31.25V68.75ZM0 31.25L18.75 50L0 68.75V31.25ZM31.25 100L50 81.25L68.75 100H31.25ZM68.75 0L50 18.75L31.25 0H68.75Z"
          fill="white"
          className={`${fill}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_873_41">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconConsulting;
