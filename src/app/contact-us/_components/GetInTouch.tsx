import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-light">
      <div className="page-width py-36">
        <div className="flex items-center justify-center">
          <div className="basis-1/2 ">
            <div className="">
              <iframe
                width="100%"
                height="100%"
           
                title="map"
        
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
          <div className="basis-1/2">THIS IS LEFT SIDE</div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
