import React from "react";

type card = {
  title?: string;
  content?: string;
  icon?: React.ReactNode;
};
const WhyChooseLeftCard = ({ title, content, icon }: card) => {
  return (
    <div className="group cursor-pointer ">
      <div className="flex items-center group-hover:text-primary group-hover:transition-all group-hover:delay-100  group-hover:bg-white sm:gap-10  gap-3 text-white justify-start bg-white bg-opacity-20 sm:p-8 p-3 rounded-2xl border-primary border-2 lg:max-w-2xl max-w-full">
        <div>{icon}</div>
        <div>
          <h5 className="">{title}</h5>
          <p className="">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLeftCard;
