import React from "react";

type CardProps = {
  description?: string;
  title?: string;
  icon?: React.ReactElement;
  classes?: string;
};

const MobileAppCard = ({ description, title, icon, classes }: CardProps) => {
  return (
    <>
      {title && (
        <div
          className={`flex items-center  justify-center gap-5 flex-col md:p-10 p-4 w-full shadow-2xl bg-[#048C5B] ${
            (classes && classes) || ""
          }  rounded-2xl text-white`}
        >
          {icon && <div>{icon}</div>}
          <h4 className="max-md:text-lg">{title}</h4>
          <p className="text-lg text-center text-balance max-md:text-base">
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default MobileAppCard;
