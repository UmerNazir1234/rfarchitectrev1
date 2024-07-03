import Button from "@/components/Button";
import Heading from "@/components/Heading";
import React from "react";

const ProjectSubmit = () => {
  return (
    <section className="bg-secondary py-28 max-sm:py-16 ">
      <div className="page-width">
        <div className="flex items-center justify-start gap-8 md:flex-nowrap flex-wrap">
          <div className="lg:basis-2/3 basis-full">
            <div className=" max-md:text-center">
              <Heading
                title="Submit your project"
                icon={false}
                classes="text-primary !capitalize "
              />
              <div>
                <p className="text-white p-lg w-3/4 max-md:text-center text-start max-lg:w-full ">
                  Let us know your requirements and we'll get back to you as
                  soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/3 basis-full ">
            <div className="flex gap-4 items-center justify-between flex-col">
              <p className="p-lg text-white">
                Email: info@rftechnologies.com.pk
              </p>
              <p className="p-lg text-white">Phone# +92 334 4738506</p>
              <Button title="Submit Your Project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSubmit;
