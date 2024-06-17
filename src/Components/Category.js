
import React from "react";
import Image from "../assets/samm.jpg";
import Rectangle from "../assets/Rectangle.png";
import Rectangle13 from "../assets/img3.jpg";

const Category = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="flex w-full gap-6 overflow-x-auto max-w-7xl md:overflow-hidden">
        {/* Card 1 */}
        <div
          className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[240px] sm:min-w-[235px]  lg:min-w-[300px] h-[300px] sm:h-[350px] md:h-[378px] lg:h-[400px] "
          style={{ backgroundImage: `url(${Image})` }}
        >
          <span className="text-sm text-gray-300 uppercase">
            Category
          </span>
          <h2 className="text-lg font-medium leading-tight text-white sm:text-lg md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md sm:px-3 sm:py-2 md:px-4 md:py-2 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[240px] sm:min-w-[235px] lg:min-w-[300px] h-[300px] sm:h-[350px] md:h-[378px] lg:h-[400px] "
          style={{ backgroundImage: `url(${Rectangle})` }}
        >
          <span className="text-sm text-gray-300 uppercase">
            Category
          </span>
          <h2 className="text-lg font-medium leading-tight text-white sm:text-xl md:text-2xl">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md sm:px-3 sm:py-2 md:px-4 md:py-2 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col items-start justify-between p-6 space-y-2 bg-center bg-cover min-w-[240px] sm:min-w-[235px]  lg:min-w-[300px] h-[300px] sm:h-[350px] md:h-[378px] lg:h-[400px] "
          style={{ backgroundImage: `url(${Rectangle13})` }}
        >
          <span className="text-sm text-gray-300 uppercase">
            Category
          </span>
          <h2 className="text-lg leading-tight text-white md:font-medium sm:text-xl md:text-2xl lg:font-semibold">
            Introduction line heading or value proposition goes here in 4 lines.
          </h2>
          <button className="px-2 py-1 text-black transition-transform duration-200 bg-yellow-400 rounded-md sm:px-3 sm:py-2 md:px-4 md:py-2 hover:bg-neutral-800 hover:text-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
