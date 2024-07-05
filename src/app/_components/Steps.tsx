import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <section className="">
      <div className="page-width">
        <h2 className="text-primary text-center max-w-5xl m-auto">
          Steps to Build a Successful Digital Product
        </h2>

        <img
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720172066/RfTechnologiesWebsite/Group_1597883770_bag6zl.png"
          loading="lazy"
          alt="Steps to Build a Successful Digital Product"
          className="object-center object-contain"
        />
      </div>
    </section>
  );
};

export default Steps;
