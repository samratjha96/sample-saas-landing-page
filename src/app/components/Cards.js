import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <Image className="w-20 mx-auto mt-[-3rem] bg-white" src={"/single.png"} alt="single" width={20} height={20} />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl font-bold">$49</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">1 Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className=" bg-accent-color text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
            </div>

            <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                <Image className="w-20 mx-auto mt-[-3rem] bg-transparent" src={"/double.png"} alt="single" width={20} height={20} />
                <h2 className="text-2xl font-bold text-center py-8">Multi User</h2>
                <p className="text-center text-4xl font-bold">$99</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                    <p className="py-2 border-b mx-8">15 Granted Users</p>
                    <p className="py-2 border-b mx-8">Send up to 8 GB</p>
                </div>
                <button className=" bg-black text-accent-color w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <Image className="w-20 mx-auto mt-[-3rem] bg-white" src={"/triple.png"} alt="single" width={20} height={20} />
                <h2 className="text-2xl font-bold text-center py-8">Enterprise</h2>
                <p className="text-center text-4xl font-bold">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">6 TB Storage</p>
                    <p className="py-2 border-b mx-8">1000 Granted Users</p>
                    <p className="py-2 border-b mx-8">Send up to 100 GB</p>
                </div>
                <button className=" bg-accent-color text-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto">Start Trial</button>
            </div>
        </div>
     
    </div>
  );
};
export default Cards;
