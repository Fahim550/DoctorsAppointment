import React, { useEffect } from "react";
import contact from "../../../../assets/contact.svg";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="flex flex-col w-10/12 mx-auto mb-3">
      <h2
        className="text-4xl font-extrabold leadi lg:text-5xl text-blue-800 mx-auto"
        data-aos="zoom-out"
      >
        Book Your Visit!
        <hr class="w-20 h-1 mx-auto bg-blue-700 mb-2 border-0 rounded mt-4 dark:bg-blue-700"></hr>
      </h2>
      <div className="flex gap-8 w-full justify-around ">
        <img
          src={contact}
          alt=""
          className="p-4 h-52 md:h-64 w-4/12 bg-sky-600 "
          data-aos="fade-right"
        />
        <form novalidate="" className="space-y-2 w-8/12" data-aos="fade-left">
          <div className="flex gap-12">
            <div>
              <label for="name" className="text-md text-gray-700">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="email" className="text-md text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <label for="phone" className="text-md text-gray-700">
                phone
              </label>
              <input
                id="phone"
                type="number"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="message" className="text-md text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mx-auto p-3 text-sm  font-bold tracki uppercase rounded text-white  bg-blue-900 dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
