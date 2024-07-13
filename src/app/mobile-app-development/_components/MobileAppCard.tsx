import React from "react";

type CardProps = {
  description?: string;
  title?: string;
  icon?: React.ReactElement;
  classes?: string;
  titleColor?: string;
  textColor?: string;
  iconColor?: string;
};

const MobileAppCard = ({
  description,
  title,
  icon,
  classes,
  titleColor = "text-primary",
  textColor = "text-black",
  iconColor = "text-red-500",
}: CardProps) => {
  return (
    <>
      {title && (
        <div
          className={`flex items-center group justify-center gap-5 flex-col md:p-10 p-4 w-full shadow-2xl bg-[#048C5B] ${
            classes || ""
          } rounded-2xl text-white`}
        >
          {icon && <div className={`group-hover:${iconColor}`}>{icon}</div>}
          <h4
            className={`max-md:text-lg text-center group-hover:${titleColor}`}
          >
            {title}
          </h4>
          <p
            className={`text-lg text-center text-balance max-md:text-base group-hover:${textColor}`}
          >
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default MobileAppCard;
