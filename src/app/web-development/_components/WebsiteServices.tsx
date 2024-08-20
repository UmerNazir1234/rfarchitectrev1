import React from "react";
import WebServiceCard from "./WebServiceCard";

const WebsiteServices = () => {
  return (
    <section>
      <div className="page-width sm:pt-32 max-sm:py-12">
        <div className="flex gap-3 justify-center max-lg:flex-wrap ">
          <WebServiceCard
            title="Front End development"
            details="We build engaging and responsive user interfaces that provide a seamless and intuitive experience, ensuring your website is visually appealing and functional across all devices."
            classes="bg-[#D98200]"
          />
          <WebServiceCard
            title="Back End development"
            details="We develop robust server-side solutions that ensure your website’s functionality, performance, and data management are efficient, secure, and scalable."
            classes="bg-[#710583]"
          />
          <WebServiceCard
            title="Responsive Website Design"
            details="We create websites that adapt flawlessly to any device or screen size, providing a consistent and engaging user experience across desktops, tablets, and smartphones."
            classes="bg-[#00923A]"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteServices;
