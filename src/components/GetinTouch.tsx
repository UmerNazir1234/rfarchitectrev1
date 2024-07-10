import React from "react";
import { FaLocationDot,FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const GetinTouch = () => {
  return (
    <div  className="flex">
      
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-20">
         
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe className="rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="426"
                  height="426"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">

                <div className="max-w-2xl lg:max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>

                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900 flex"> <FaLocationDot className="text-yellow-500 mx-2" /> 
                   3rd floor Taha Mall, Defence Rd, Rawalpindi, Punjab 47300
                    </h3>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900 flex">
                    <MdEmail className="text-yellow-500 mx-2" /> info@rftechnologies.com.pk
                    </h3>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900 flex">
                    <FaPhone className="text-yellow-500 mx-2" />  +92 334 4738506
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default GetinTouch;
