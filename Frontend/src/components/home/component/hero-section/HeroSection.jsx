import React, { useEffect } from "react";
import carousel1 from "../../../../assets/doctors11.jpg";
import carousel2 from "../../../../assets/doctors2.jpg";
import carousel3 from "../../../../assets/doctors3.png";
import { Carousel } from "flowbite-react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function HeroSection() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="h-[550px] ">
      <Carousel>
        <div className="relative flex h-full items-center justify-center ">
          <img
            src={carousel1}
            className="h-screen
          w-full opacity-50"
            alt=""
            data-aos="zoom-in"
            data-aos-duration="3000"
          />
          <div
            className="absolute w-8/12 "
            // data-aos="fade-right"
            // data-aos-duration="3000"
          >
            <h2 className="text-6xl text-white font-extrabold p-3 drop-shadow-2xl font-sans justify-center items-center">
              Let's Find <br />
              Your Best Doctor
            </h2>
            <button className="bg-blue-800 px-3 py-2 rounded-xl text-white text-lg mr-4 justify-center hover:bg-blue-950">
              Discover more
            </button>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center ">
          <img
            src={carousel2}
            className="h-screen
            w-full "
            alt=""
          />
          <div
            className="absolute w-8/12 "
            // data-aos="fade-right"
            // data-aos-duration="3000"
          >
            <h2 className="text-6xl text-white font-extrabold p-3 drop-shadow-2xl  font-sans justify-center items-center">
              Your Health <br />
              Is Our Priority
            </h2>
            <button className="bg-blue-800 px-3 py-2 rounded-xl text-white text-lg mr-4 justify-center hover:bg-blue-950">
              Discover more
            </button>
          </div>
        </div>
        {/* <div className="relative flex h-full items-center justify-center ">
          <img
            src={carousel3}
            className="h-full
          w-full opacity-35"
            alt=""
          />
          <div className="absolute w-8/12 " data-aos="fade-right" data-aos-duration="3000">
            <h2 className="text-6xl text-blue-900 font-extrabold p-3 drop-shadow-2xl font-sans justify-center items-center">
              Your Health <br />
              Is Our Priority
            </h2>
            <button className="bg-blue-800 px-3 py-2 rounded-xl text-white text-lg mr-4 justify-center hover:bg-blue-950">
              Discover more
            </button>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
