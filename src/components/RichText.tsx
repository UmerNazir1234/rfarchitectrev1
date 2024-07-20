import Button from "@/components/Button";
import Heading from "@/components/Heading";
import React from "react";

const RichText = () => {
  return (
    <div className="py-12 page-width">
      <div className="flex items-center justify-center flex-col gap-8">
        <Button href="/" title="Our Stack" classes="bg-secondary" enableIcons />

        <h2 className="text-primary">Technologies We work</h2>
        <p className="p-lg max-w-4xl text-center ">
          With Latest Technologies and our expert teams Get a scalable and
          reliable website design and development which increase your profit.
        </p>
      </div>
    </div>
  );
};

export default RichText;
