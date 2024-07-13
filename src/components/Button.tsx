"use client";
import Link from "next/link";
import React from "react";
import IconRound from "./Icons/IconRound";

type ButtonProps = {
  title?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classes?: string;
  iconStyle?: string;
  enableIcons?: boolean;
};

const Button = ({
  title,
  href,
  onClick,
  classes = "btn--primary",
  icon,
  type = "button",
  disabled = false,
  iconStyle,
  enableIcons = false,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`btn flex items-center justify-center relative uppercase gap-1 ${classes}`}
      >
        {enableIcons && (
          <>
            <span className="absolute left-0 top-0 -ml-2 -mt-4 bg-transparent bg-contain">
              <IconRound classes={iconStyle} />{" "}
            </span>
            <span className="absolute right-0 bottom-0 -mr-2 -mb-4 bg-transparent bg-contain transform rotate-180 ">
              {" "}
              <IconRound classes={iconStyle} />{" "}
            </span>
          </>
        )}
        <span>{title}</span>
        {icon && <span className="icon">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn flex items-center justify-center uppercase gap-1 relative ${classes}`}
      disabled={disabled}
    >
      {enableIcons && (
        <>
          <span className="absolute left-0 top-0 -ml-2 -mt-4 bg-transparent bg-contain">
            <IconRound classes={iconStyle} />{" "}
          </span>
          <span className="absolute right-0 bottom-0 -mr-2 -mb-4 bg-transparent bg-contain transform rotate-180 ">
            {" "}
            <IconRound classes={iconStyle} />{" "}
          </span>
        </>
      )}

      <span>{title}</span>
      {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
