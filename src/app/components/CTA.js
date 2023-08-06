import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          className="w-[500px] mx-auto my-4"
          src={"/laptop.jpg"}
          alt="/"
          width={1240}
          height={1240}
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-accent-color font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            cumque culpa voluptatem dolorum laborum aliquid nostrum odio id
            animi! Accusamus, facere consectetur. Odit quibusdam minima sit
            rerum sint eveniet mollitia.
          </p>
          <button className="bg-black text-accent-color w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
