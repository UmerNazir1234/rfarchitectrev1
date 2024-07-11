import React from "react";
import Button from "@/components/Button";
const BoostYourMob = () => {
  return (
    <div className="page-width">
      <Button
        title="ABOUT US"
        classes="bg-secondary uppercase"
        enableIcons={true}
        iconStyle="stroke-secondary"
      />
      <div className="md:flex justify-center">
        <div>
      <h2 className=" text-primary">BOOST YOUR MOBILE TRAFIC!</h2>
      <p>
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Porem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Porem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720696510/RfTechnologiesWebsite/Group_1597883915_uvmnj4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BoostYourMob;
