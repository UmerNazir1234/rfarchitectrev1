import React from "react";
type eyeProps = {
  classes?: string;
};
const IconEye = ({ classes }: eyeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className={`${classes || "icon icon--eye"}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.4693 24.9853C32.4693 28.9669 29.2402 32.1937 25.2587 32.1937C21.2771 32.1937 18.0503 28.9669 18.0503 24.9853C18.0503 21.0014 21.2771 17.7747 25.2587 17.7747C29.2402 17.7747 32.4693 21.0014 32.4693 24.9853Z"
        stroke="#EDAC18"
        stroke-width="4.56081"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.2557 41.6364C33.9395 41.6364 41.8821 35.3927 46.354 24.9849C41.8821 14.5771 33.9395 8.33337 25.2557 8.33337H25.2648C16.581 8.33337 8.63838 14.5771 4.1665 24.9849C8.63838 35.3927 16.581 41.6364 25.2648 41.6364H25.2557Z"
        stroke="#0029B4"
        stroke-width="4.56081"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconEye;
