import Heading from "@/components/Heading";
import React from "react";

const DropDownMenu = () => {
  return (
    <section className="border-2 m-8 p-10 border-black">
      <div className="border-2 border-black">
        <div className="bg-red-300">
          <div className="items-center justify-center flex py-10 border-b border-white">
            <Heading title="Our Services" />
          </div>
          <div className="flex items-center justify-between gap-10 flex-wrap">
            <div className="flex items-start justify-center gap-4">
              <div className="bg-white w-11 h-11">shop</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropDownMenu;
