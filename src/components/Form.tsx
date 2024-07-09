import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex flex-wrap pt-16">
        <div className="flex items-center justify-between gap-10 w-full">
          <div className="basis-1/2 ">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="input--field"
              />
            </div>
          </div>
          <div className="basis-1/2 ">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className=" input--field "
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="relative">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="input--field"
              rows={6}
            ></textarea>
          </div>
        </div>
        <div className="w-full mt-8 ">
          <input
            className="input--field !border-dashed !py-10"
            id="file_input"
            type="file"
          />
        </div>

        <div className="flex items-start gap-4 mt-8">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="mt-1.5"
          ></input>
          <label
            htmlFor="link-checkbox"
            className="text-2xl text-white leading-tight"
          >
            We care about your privacy and automatically agree to the following
            NDA. This site is protected by reCAPTCHA and the Google Privacy
            Policy and Terms of Service apply.
            <a
              href="#"
              className="ps-2 text-white dark:text-black hover:underline"
            >
              Privacy Policy and Terms of Service apply.
            </a>
            .
          </label>
        </div>

        <div className="w-full p-2 mt-16 flex items-center justify-center">
          <button type="submit" className="btn bg-white !text-secondary !px-32">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
