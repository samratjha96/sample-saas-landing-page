import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["BTB", "BTC", "SAAS"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-accent-color font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <p className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </p>
        <div className="flex justify-center items-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <span
            ref={element}
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SAAS
          platforms
        </p>
        <button className="bg-accent-color w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
