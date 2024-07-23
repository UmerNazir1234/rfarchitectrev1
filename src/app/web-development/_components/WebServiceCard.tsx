import React from "react";
type cardProps = {
  title?: string;
  details?: string;
  classes?: string;
};
const WebServiceCard = ({ title, details, classes }: cardProps) => {
  return (
    title &&
    details && (
      <div
        className={`rounded-xl lg:basis-1/3 md:basis-[47%]  ${
          classes ? classes : "bg-primary"
        } flex items-center justify-center flex-col gap-3 sm:p-6 p-4 text-white shadow`}
      >
        <div className="xl:text-3xl md:text-2xl text-xl font-bold text-center">
          {title}
        </div>
        <p className="lg:text-lg text-base text-center">{details}</p>
      </div>
    )
  );
};

export default WebServiceCard;
