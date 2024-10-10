import React from "react";
import Form from "../Form";
const benefits = {
  title: "Benefits",
  description: "All-in-one platform & integrated tech for seamless event management. Request a demo to see how you can:",

  benefitsList: [
    {
      title: "Improved Efficiency",
      description: "Reduces manual processing and long queues by offering digital ticketing."
    },
    {
      title: "Enhanced User Experience",
      description: "Provides a simple and convenient way for students, faculty, and visitors to purchase and access tickets."
    },
    {
      title: "Centralized Event Management",
      description: "Organize and promote all events from a single platform, increasing visibility and attendance."
    }
  ]
};


const BlueTicksForm = () => {
  return (
    <>
      <section className="flex items-center jusity-start flex-wrap pb-10">
        <div className="lg:basis-1/2 basis-full sm:px-16 px-3 bg-secondary lg:py-28 md:py-20 py-16 relative">
          <h2 className="text-primary pb-6"> {benefits?.title}</h2>
          <p className="md:text-2xl text-xl text-white mt-4">
           {benefits?.description}
          </p>
          <ul className="list-disc ps-8 text-white md:text-2xl text-xl flex items-start justify-start flex-col gap-3 mt-4 font-nunito">
            {benefits?.benefitsList?.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="252"
            height="218"
            viewBox="0 0 252 218"
            fill="none"
            className="absolute top-8 right-4 max-sm:h-[130px] max-sm:w-[130px]"
          >
            <path
              d="M243.783 24.269C247.563 24.269 250.628 21.2044 250.628 17.424C250.628 13.6436 247.563 10.5789 243.783 10.5789C240.002 10.5789 236.938 13.6436 236.938 17.424C236.938 21.2044 240.002 24.269 243.783 24.269Z"
              stroke="white"
              stroke-opacity="0.36"
              stroke-width="2"
            />
            <path
              d="M232.043 1.3501H168.307C168.068 1.3501 167.838 1.38846 167.62 1.45632H79.6996H41.0693H15.9639C15.3355 1.45632 14.7631 1.71301 14.353 2.12312C13.9399 2.53619 13.6832 3.10857 13.6832 3.73407C13.6832 4.99391 14.7041 6.01477 15.9669 6.01477H23.942C25.1988 6.01477 26.2226 7.03562 26.2226 8.29546C26.2226 8.92686 25.966 9.49924 25.5558 9.90936C25.1428 10.3224 24.5733 10.5762 23.9449 10.5762H17.1884C16.557 10.5762 15.9875 10.8328 15.5745 11.243C15.1614 11.656 14.9077 12.2255 14.9077 12.8539C14.9077 14.1138 15.9285 15.1346 17.1913 15.1346H30.3208C31.5807 15.1346 32.6015 16.1555 32.6015 17.4183C32.6015 18.0497 32.3448 18.6191 31.9347 19.0322C31.5217 19.4452 30.9493 19.6989 30.3238 19.6989H3.6635C3.03211 19.6989 2.46267 19.9556 2.04961 20.3658C1.63655 20.7788 1.38281 21.3512 1.38281 21.9767C1.38281 23.2365 2.40367 24.2604 3.66646 24.2604H58.474C78.838 26.3404 94.7262 43.5415 94.7262 64.4573V64.4661C94.7262 86.7804 76.634 104.873 54.3198 104.873H46.445C41.4411 104.873 38.4375 110.431 41.1814 114.618L49.5814 127.473L94.7115 196.378L105.755 213.24C109.18 218.471 117.315 216.046 117.315 209.788V167.882C117.315 145.565 135.407 127.473 157.721 127.473H170.945C174.421 127.473 177.238 124.655 177.238 121.18V111.166C177.238 107.69 174.421 104.873 170.945 104.873H151.428C132.586 104.873 117.315 89.5981 117.315 70.7594V58.1699C117.315 39.3312 132.586 24.0568 151.428 24.0568H155.305C155.523 24.1246 155.753 24.163 155.992 24.163H219.731C220.359 24.163 220.932 23.9092 221.345 23.4962C221.758 23.0831 222.015 22.5107 222.015 21.8823C222.015 20.6224 220.991 19.6016 219.731 19.6016H211.756C210.496 19.6016 209.475 18.5807 209.475 17.3209C209.475 16.6895 209.732 16.1201 210.142 15.707C210.555 15.2939 211.124 15.0372 211.756 15.0372H218.512C219.141 15.0372 219.713 14.7835 220.126 14.3704C220.539 13.9574 220.796 13.3879 220.796 12.7565C220.796 11.4967 219.772 10.4758 218.512 10.4758H205.383C204.123 10.4758 203.102 9.45499 203.102 8.19219C203.102 7.56375 203.359 6.99136 203.769 6.5783C204.182 6.16523 204.754 5.9115 205.383 5.9115H232.043C232.675 5.9115 233.244 5.65776 233.657 5.2447C234.07 4.83163 234.324 4.25924 234.324 3.6308C234.324 2.37391 233.303 1.3501 232.043 1.3501ZM68.5321 17.2265C68.5321 17.8579 68.2754 18.4273 67.8653 18.8404C67.4522 19.2534 66.8828 19.5072 66.2544 19.5072H58.9992C57.7423 19.5072 56.7185 18.4863 56.7185 17.2235C56.7185 16.5921 56.9752 16.0256 57.3853 15.6126C57.7984 15.1995 58.3708 14.9458 58.9962 14.9458H66.2514C67.5083 14.9458 68.5321 15.9696 68.5321 17.2265ZM57.344 6.01771C58.6038 6.01771 59.6247 7.03857 59.6247 8.30137C59.6247 8.92981 59.368 9.5022 58.9579 9.91231C58.5448 10.3254 57.9754 10.5791 57.3469 10.5791H43.5801C42.3233 10.5791 41.2994 9.55826 41.2994 8.29841C41.2994 7.66702 41.5561 7.09758 41.9663 6.68452C42.3793 6.27145 42.9517 6.01771 43.5772 6.01771H57.344Z"
              stroke="white"
              stroke-opacity="0.36"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="lg:basis-1/2 basis-full bg-primary lg:p-14 md:p-10 p-5 lg:rounded-l-[50px]">
          <h3 className="text-white md:text-[32px] text-[26px]">
            Experience the Future of Event Management
          </h3>
          <Form />
        </div>
      </section>
    </>
  );
};

export default BlueTicksForm;
