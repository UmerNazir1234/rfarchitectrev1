import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
const ProductGallery = () => {
  return (
    <div className="page-width">
      <div className="md:flex justify-center">
        <div>
          <img
            src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720698819/RfTechnologiesWebsite/Group_1597883917_jpewpc.png"
            alt=""
          />
        </div>
        <div>
          <Button
            title="product gallery"
            classes="bg-secondary uppercase"
            enableIcons={true}
            iconStyle="stroke-secondary"
          />
          <h2 className=" text-primary">Our Case Study</h2>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Porem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Porem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        
      </div>
      <div className="md:flex justify-center items-center m-auto md:max-w-[1240px] h-[580px]">
      <Heading
          title="our priorities"
          classes="text-primary"
          iconStyle="stroke-primary"
        />
        <p className="text-[#333333]  text-center bg-blue-50 border rounded-full ">
          Our company was established in late 2018. Our main office is situated
          in Rawalpindi where our staff is available 24 hours a day. We work as
          a team there and provide them with our maximum efforts. A friendly
          environment enables our clients to completely speak their minds. So we
          can have an idea about what type of work they expected from us. And we
          are always so on with their expectations..
        </p>
      </div>
    </div>
  );
};

export default ProductGallery;
