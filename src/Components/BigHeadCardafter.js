

import React from "react";
import img from "../assets/Rectangle.png"; // Replace with your actual image path

function CustomCard() {
  return (
    <section className="w-full p-2 max-w-[1289px] mx-auto">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt="Decorative"
          className="w-[250px] h-[500px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[675px] object-cover md:-ml[6px] lg:ml[35px]"
        />
        <div className="absolute top-0  bg-[#f3e5e4]  md:p-[3rem] w-[263px] sm:w-[50%] md:w-[50%] lg:w-[41%] h-auto flex flex-col justify-center shadow-lg mt-8  ml-[59px]  p-[26px] md:mt-4 lg:mt-[6rem]  md:ml-[401px] lg:ml-[549px]">
          <h1 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl">
            HEADING GOES HERE
          </h1>
          <p className="mb-4 text-xs leading-relaxed sm:text-sm md:text-base lg:text-lg">
            Small descriptive text in 3-4 lines can go here. They can be a
            single line or short paragraph too. Small descriptive text in 3-4
            lines can go here. They can be a single line or short paragraph too.
            Small descriptive text in 3-4 lines can go here. They can be a
            single line or short paragraph too. Small descriptive text in 3-4
            lines can go here. They can be a single line or short paragraph too.
          </p>
          {/* <div className="flex items-center justify-start mt-4">
            <button className="px-4 py-2 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
              KNOW MORE
            </button>
          </div> */}

<div className="flex items-center justify-start mt-4">
            <button className="w-full px-12 py-3 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCard;
