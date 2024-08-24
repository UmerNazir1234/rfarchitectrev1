import React from "react";
type card = {
  number?: string;
  title?: string;
};
const WhyChooseRightCard = ({ number, title }: card) => {
  return (
    <div className="transform3d flex items-center flex-col gap-2 text-white justify-start bg-white bg-opacity-20 min-w-52 max-sm:min-w-36 sm:py-6 sm:px-14 py-6 px-4 rounded-xl border-primary border-2">
      <h3 className="!font-medium">{number}</h3>
      <p>{title}</p>
    </div>
  );
};

export default WhyChooseRightCard;
