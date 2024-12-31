import ImageWithText from "@/components/ImageWithText";
import { createandcustom } from "@/data/blueticks";
import React from "react";

const CreateandCustom = () => {
  return (
    <div className="relative pt-10">
      <ImageWithText fullWidth={true} content={createandcustom} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="697"
        height="698"
        viewBox="0 0 697 698"
        fill="none"
        className="absolute lg:top-0 bottom-0 right-0 max-xl:w-[450px] max-xl:h-[450] max-md:w-[400px] max-md:h-[400px] max-sm:h-[300px] max-sm:w-[300px]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M416.974 36.5117C489.874 42.4184 578.134 -1.54124 631.622 48.3434C687.098 100.084 653.072 193.896 665.892 268.665C674.897 321.189 699.867 369.293 695.76 422.425C691.461 478.051 673.536 531.312 642.033 577.357C607.842 627.333 567.893 681.738 508.927 695.505C450.459 709.155 397.092 663.037 338.933 648.123C278.046 632.509 212.39 639.122 159.094 605.796C94.6212 565.479 29.3672 514.113 7.94792 441.151C-14.2987 365.371 14.2286 285.13 43.4121 211.742C73.7808 135.374 104.338 46.5515 178.744 11.6493C252.522 -22.9586 335.748 29.9304 416.974 36.5117Z"
          fill="#EDAC18"
          fillOpacity="0.18"
        />
      </svg>
    </div>
  );
};

export default CreateandCustom;
