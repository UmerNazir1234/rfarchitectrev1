import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div>
        <div
          className="bg-no-repeat bg-cover m-auto min-h-[80vh] max-sm:min-h-[70vh]"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720179109/WhyChooseUs_pm78cb.png")`,
          }}
        >
            <div className="md:flex justify-center content-center gap-80">
          <h1 className="text-white text-nowrap text-[25px] md:text-[30px] mt-[100px]">
            WE PROVIDE THE BEST IT SOLUTION
          </h1>
        <img className="mt-[190px] size-60" src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720183580/FourGridimg_a1xejn.png" alt="img" />
        </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
