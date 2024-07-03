import Link from "next/link";
import React from "react";

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

const HeroSliderButtons: React.FC<{ buttons: ButtonProps[] }> = ({
  buttons,
}) => {
  return buttons.map(({ id, link, text }) => (
    <Link  target="_blank" key={id} href={'/'} className="btn btn--primary">
      <span>{text}</span>
    </Link>
  ));
};

export default HeroSliderButtons;
