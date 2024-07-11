import React from "react";
import Image from "next/image";
const OurworkCard = () => {
  return (
    <>
      <div>
        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720608625/Vector_9_a0n1qm.png"
            }
            loading="lazy"
            alt="background image"
            // width={1240}
            // height={400}
            fill={true}
            className="max-h-fit "
            
          />
        </div>
      </div>
    </>
  );
};

export default OurworkCard;
