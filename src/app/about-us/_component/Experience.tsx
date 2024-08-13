import Heading from "@/components/Heading";
import React from "react";

const Experience = ({ data }: any) => {
  return (
    <section>
      <div className="page-width min-h-[48vh] sm-max:min-h-[75vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <Heading title={data?.title} classes="text-secondary " />
        </div>

        <p
          className="p-lg"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></p>
      </div>
    </section>
  );
};

export default Experience;
