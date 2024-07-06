import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
const TestimonialCard = () => {
  return (
    <>
   
        <section> 
  <div className="px-5 py-24 mx-auto">
    
    <div className="flex -m-4">
      <div className="p-4 md:w-1/2 w-full">
      <div
        className=" bg-no-repeat bg-contain "
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dzmrdbwqh/image/upload/v1720262520/Vector_19_tm6ohn.png")`,
        }}
      >
        <BiSolidQuoteLeft className="text-primary text-8xl"  />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque semper elit non pellentesque. Curabitur neque arcu, efficitur facilisis porta at, feugiat ut est. Vivamus sed dui in dui vehicula congue. Phasellus sed pellentesque nisi. Phasellus tempus bibendum massa ut tincidunt. Nam hendrerit ut tortor eget rutrum. Suspendisse facilisis ante eget fringilla auctor. Nam a odio orci. Pellentesque imperdiet quis sem
          <a className="inline-flex items-center">
            {/* <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
            <span className="flex-grow flex flex-col pl-4">
              <span className=" text-2xl font-bold text-primary">Sandra M.</span>
              <span className="text-[#A5A5A5] text-lg">E-Commerce Entrepreneur</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        
      </div>
    </div>
  </div>
</section>



      
    </>
  );
};

export default TestimonialCard;
