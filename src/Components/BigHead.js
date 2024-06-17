

import React from "react";
import rectangles from "../assets/bgimg.jpg";

const BigHead = () => {
  return (
    <div className="flex flex-col w-full px-0 pt-4 mx-auto md:flex-row md:h-full">
      {/* Left Column */}
      <div className="flex flex-col items-start justify-center flex-1 p-4 md:p-6 text-white bg-blue-600 h-[300px] md:h-[400px] xl:h-[450px]">
        <h1 className="text-xl font-bold md:text-4xl">Big Heading Text</h1>
        <p className="mt-4 text-left">
          Small descriptive text in 3-4 lines can go here. They can be a single
          line or short paragraph too. Adjust the width of this container to
          make sure the text wraps correctly.
        </p>
        <div>
          <button className="px-4 py-2 mt-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-black hover:text-white">
            KNOW MORE
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="flex flex-col items-start justify-center flex-1 p-4 md:p-6 text-white h-[300px] md:h-[400px] xl:h-[450px]"
        style={{ backgroundImage: `url(${rectangles})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <h1 className="text-xl font-bold md:text-4xl">Big Heading Text</h1>
        <p className="mt-4 text-left">
          Small descriptive text in 3-4 lines can go here. They can be a single
          line or short paragraph too. Adjust the width of this container to
          make sure the text wraps correctly.
        </p>
        <div>
          <button className="px-4 py-2 mt-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-black hover:text-white">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigHead;


