import React from "react";

const ContactForm = () => {
  return (
    <>
      <div>
        <section className="body-font relative bg-gray-900 text-gray-400">
          <div className="container mx-auto px-5 py-24">
            <div className="mb-12 flex w-full flex-col text-center">
              <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
                Contact Us
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                We look forward to your questions and inquiries.
              </p>
            </div>

            <div className="mx-auto md:w-2/3 lg:w-1/2">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <label
                      for="name"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <label
                      for="email"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="mt-4 w-full p-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <label
                      for="message"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                    >
                      Message
                    </label>

                
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


                  </div>
                </div>

                <div className="flex items-center">
                  <input id="link-checkbox" type="checkbox" value=""></input>
                  <label
                    for="link-checkbox"
                    className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    We care about your privacy and automatically agree to the
                    following NDA. This site is protected by reCAPTCHA and the
                    Google{" "}
                    <a
                      href="#"
                      className="text-white dark:text-black hover:underline"
                    >
                      Privacy Policy and Terms of Service apply.
                    </a>
                    .
                  </label>
                </div>

                <div className="w-full p-2">
                  <button className="mx-auto flex rounded border-0 bg-black py-2 px-8 text-lg text-white hover:bg-black focus:outline-none">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactForm;
