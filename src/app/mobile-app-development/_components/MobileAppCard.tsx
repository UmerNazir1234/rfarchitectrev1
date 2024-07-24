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
  titleColor,
  textColor,
  iconColor,
}: CardProps) => {
  return (
    <>
      {title && (
        <div
          className={`flex items-center group justify-center gap-5 flex-col md:p-10 p-4 w-full shadow-2xl   ${
            classes ? classes : "bg-[#13429B] text-white"
          } rounded-2xl`}
        >
          {icon && <div className={`${iconColor}`}>{icon}</div>}
          <h4 className={`max-md:text-lg text-center ${titleColor}`}>
            {title}
          </h4>
          <p
            className={`text-lg text-center text-balance max-md:text-base ${textColor}`}
          >
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default MobileAppCard;
