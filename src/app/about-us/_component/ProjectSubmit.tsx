import Button from "@/components/Button";
import Heading from "@/components/Heading";
import React from "react";

const ProjectSubmit = () => {
  return (
    <section className="bg-secondary min-h-[40vh] flex items-center ">
      <div className="page-width">
        <div className="flex items-center justify-start gap-8">
          <div>
            <Heading
              title="Submit your project"
              icon={false}
              classes="text-primary !capitalize "
            />
            <div>
              <p className="text-white p-lg w-3/4 ">
                Let us know your requirements and we'll get back to you as soon
                as possible.
              </p>
            </div>
          </div>
          <div className="flex gap-6 flex-col items-center">
            <p className="p-lg text-white">Email: info@rftechnologies.com.pk</p>
            <p className="p-lg text-white">Phone# +92 334 4738506</p>
            <Button title="Submit Your Project" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSubmit;
