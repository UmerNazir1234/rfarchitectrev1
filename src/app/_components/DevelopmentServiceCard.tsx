import React from "react";
import Image from "next/image";
const DevelopmentServiceCard = () => {
  return (
    <div className="text-center">
      <div className="h-full w-full">
        <Image
          className="rounded block max-w-full m-auto pt-4 "
          src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720779658/RfTechnologiesWebsite/ic_outline-shopify_hbr2is.png"
          alt="Case Study Image"
          width={100}
          height={100}
        />
      </div>
      <h5>Shopify Store Setup</h5>
      <p>
        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>
  );
};

export default DevelopmentServiceCard;
