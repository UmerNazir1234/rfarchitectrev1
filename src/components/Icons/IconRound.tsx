import React from "react";

const IconRound = ({ classes }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="50"
      viewBox="0 0 83 39"
      fill="none"
      className={`${classes}  icon--rounded lg:w-[70px] lg:h-[50px] w-[60px] h-[50px]`}
    >
      <path
        d="M81.5 2H37.51C18 2.98682 2 15.9868 2 37.51"
        stroke={`${classes ? "" : "#EDAC18"} `}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default IconRound;
