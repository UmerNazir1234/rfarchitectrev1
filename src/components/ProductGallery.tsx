import React from "react";
import Button from "@/components/Button";
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
          <h2 className=" text-primary">BOOST YOUR MOBILE TRAFIC!</h2>
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
    </div>
  );
};

export default ProductGallery;
