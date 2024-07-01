"use client";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  title?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classes?: string;
};

const Button = ({
  title,
  href,
  onClick,
  classes = "btn--primary",
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`btn flex items-center justify-center gap-1 ${classes}`}
      >
        <span>{title}</span>
        {icon && <span className="icon">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn flex items-center justify-center gap-1 ${classes}`}
      disabled={disabled}
    >
      <span>{title}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;
