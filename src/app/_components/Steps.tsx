import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <section className="relative py-20">
      <div className="page-width">
        <div className="flex items-center justify-center">
          <Button
            title="How We Do It"
            classes="bg-secondary uppercase"
            enableIcons={true}
            iconStyle="stroke-secondary"
          />
        </div>
        <h2 className="text-primary text-center max-w-5xl m-auto">
          Steps to Build a SuccessfulDigital Product
        </h2>

        <img
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720172066/RfTechnologiesWebsite/Group_1597883770_bag6zl.png"
          loading="lazy"
          alt="Steps to Build a SuccessfulDigital Product"
          className="object-center object-contain mt-20 "
        />
        <img
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720174781/RfTechnologiesWebsite/Let_s_get_IT_done_rgluhx.png"
          loading="lazy"
          alt="Let's get it done"
          className="absolute left-2 bottom-64 "
        />
        <img
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720175560/RfTechnologiesWebsite/Trade_Mark-02_1_zxts3i.png"
          loading="lazy"
          alt="Logo"
          className="absolute right-0 top-0"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="584"
          height="550"
          viewBox="0 0 584 550"
          fill="none"
          className="absolute -top-[10%] left-[30%]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M266.008 91.7059C294.136 104.397 328.493 92.0801 356.422 105.205C384.44 118.372 404.308 143.115 424.791 166.328C446.023 190.388 459.161 219.21 479.163 244.302C512.8 286.498 582.699 311.462 583.495 365.418C584.203 413.437 545.245 427.259 503.5 451C467.25 471.616 419.323 455.16 384 477.328C342.368 503.456 351.282 557.205 303 548C248.682 537.644 235.168 484.315 186.442 458.174C140.978 433.784 79.7017 502.753 34.8092 477.328C-2.90637 455.967 -0.570221 396.657 1.36879 353.355C3.16842 313.167 34.7652 281.402 45.321 242.583C55.3774 205.601 49.9706 166.664 62.027 130.284C77.3194 84.14 77.6283 10 125.394 0.966218C180.901 -9.53179 214.515 68.4726 266.008 91.7059Z"
            fill="#EDAC18"
            fill-opacity="0.18"
          />
        </svg>
      </div>
    </section>
  );
};

export default Steps;
