

// src/Four.js
import React from "react";
import rectangles from "../assets/bgimg.jpg";

const FeatureService = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 pt-4 mx-auto overflow-hidden">
      <div className="flex flex-row w-full gap-3 overflow-x-auto md:gap-4 md:p-11 lg:p-2 lg:gap-1 max-w-8xl snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {/** Card 1 */}
        <div
          className="relative flex-none text-white w-[85vw] h-[200px] px-0  sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[450px]  md:w-[50%]  snap-center shrink-0 group bg-center bg-cover"
          style={{
            backgroundImage: `url(${rectangles})`,
          }}
        >
          <h1 className="z-10 flex items-center justify-center h-full text-2xl font-bold md:text-4xl group-hover:hidden">
            Featured <br className="block lg:hidden " />
            Services 01
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[#9727ff] bg-opacity-0 group-hover:bg-opacity-100">
            <h2 className="text-lg font-bold text-center transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
              FEATURED SERVICE 01
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                Description and details of this service go here in a short paragraph.
              </p>
              <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                <li>Like this</li>
                <li>Like this</li>
              </ul>
            </div>
          </div>
        </div>

        {/** Card 2 */}
        <div
          className="relative flex-none text-white w-[75vw] h-[200px] px-0  sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[450px]  md:w-[50%]   snap-center shrink-0 group bg-center bg-cover"
          style={{
            backgroundImage: `url(${rectangles})`,
          }}
        >
          <h1 className="z-10 flex items-center justify-center h-full text-2xl font-bold md:text-4xl group-hover:hidden">
            Featured <br className="block lg:hidden " />
            Services 02
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[#9727ff] bg-opacity-0 group-hover:bg-opacity-100">
            <h2 className="text-lg font-bold text-center transition-opacity duration-100 opacity-0 md:text-3xl group-hover:opacity-100">
              FEATURED SERVICE 02
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-4 md:text-base md:text-left group-hover:opacity-100">
                Description and details of this service go here in a short paragraph.
              </p>
              <ul className="mt-2 text-sm transition-opacity duration-300 opacity-0 md:mt-3 md:text-base md:text-left group-hover:opacity-100">
                <li>Like this</li>
                <li>Like this</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureService;

