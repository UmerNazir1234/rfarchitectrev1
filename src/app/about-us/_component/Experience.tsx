import Heading from "@/components/Heading";
import React from "react";

const Experience = () => {
  return (
    <section>
      <div className="page-width min-h-[65vh]">
        <div className="text-center">
          <Heading title="Experience Talk" classes="text-secondary " />
        </div>

        <p className="p-lg">
          {" "}
          In the era of the 20th century, our lives are dependent on
          technologies and we are bound to these gadgets. These robotic machines
          have turned our lives into survival mode.
          <br />
          <br />
          What would be the success definition in our words? Or how we interrupt
          failures in our lives? Yes, we called success to a well-settled
          business, air-conditioned offices with well-furnished furniture. We
          give importance to materialistic things but not to life's moral and
          ethical values.
          <br />
          <br />
          Why do people clap on other successes and feel sad about their
          failures? We have fed our minds that success brings prosperity to
          lives. That is just a stubborn statement made by ourselves.
        </p>
      </div>
    </section>
  );
};

export default Experience;
