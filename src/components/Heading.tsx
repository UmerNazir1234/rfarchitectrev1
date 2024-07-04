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
        className={`${classes} relative inline-block uppercase ${
          icon && "xl:mb-12 mb-8"
        }  `}
      >
        {icon && (
          <>
            <span className="absolute left-0 top-0 -ml-8 -mt-1 bg-transparent bg-contain max-sm:hidden">
              <IconRound classes={iconStyle} />{" "}
            </span>
            <span className="absolute right-0 bottom-0 -mr-8 -mb-1 bg-transparent bg-contain transform rotate-180 max-sm:hidden">
              {" "}
              <IconRound classes={iconStyle} />{" "}
            </span>
          </>
        )}
        {title}
      </h2>
    )
  );
};

export default Heading;
