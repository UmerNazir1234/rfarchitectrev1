import React from "react";
import IconRound from "./Icons/IconRound";

type HeadingProps = {
  title?: string;
  icon?: boolean;
  classes?: string;
  iconStyle?: string;
};

const Heading: React.FC<HeadingProps> = ({
  title,
  icon = true,
  classes = "text-secondary",
  iconStyle = "stroke-secondary",
}) => {
  return (
    title && (
      <h2
        className={`${classes} relative inline-block  uppercase z-50  ${
          icon && "xl:mb-12 mb-8"
        }`}
      >
        {icon && (
          <>
            <span className="absolute left-0 top-0 -ml-5 lg:-mt-4 -mt-5 bg-transparent bg-contain ">
              <IconRound classes={iconStyle} />{" "}
            </span>
            <span className="absolute right-0 bottom-0 -mr-5 lg:-mb-4 -mb-5  bg-transparent bg-contain transform rotate-180 ">
              <IconRound classes={iconStyle} />{" "}
            </span>
          </>
        )}
        <span>{title}</span>
      </h2>
    )
  );
};

export default Heading;
