import React from "react";
import Image from "../assets/samm.jpg";

function ZoomTwoBox() {
  return (
 
    <>

<div className="flex items-center justify-center p-4 md:p-6 lg:p-2">
      <div className="grid grid-cols-1 gap-10 max-w-7xl md:grid-cols-2">
        {/* Card 1 */}
        <div className="flex flex-col w-full h-auto md:h-[750px]  text-[#0a0a0a] ">
          <figure className="flex justify-center items-center overflow-hidden  h-100 lg:h-[100%]">
            <img
              src={Image}
              alt="Card Preview"
              className="object-cover w-full h-full transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </figure>
          <div className="flex flex-col p-6 h-auto md:h-[40%]">
            <div className="text-lg font-semibold">
              Name of the work or project
              <br />
              goes here in 2 lines
              <div className="my-4 border-t-4 border-purple-500 w-3/3 " />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full h-auto md:h-[750px]  text-[#0a0a0a]  ">
          <figure className="flex justify-center items-center overflow-hidden  h-100 lg:h-[100%]">
            <img
              src={Image}
              alt="Card Preview"
              className="object-cover w-full h-full transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </figure>
          <div className="flex flex-col p-6 h-auto md:h-[40%]">
            <div className="text-lg font-semibold">
              Name of the work or project
              <br />
              goes here in 2 lines
              <div className="my-4 border-t-4 border-purple-500 w-3/3 " />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default ZoomTwoBox;
