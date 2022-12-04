import React from "react";
import images from "../images/bg-1.png";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import {Link, Outlet} from "react-router-dom";


const Hero = () => {
  return (
    <div className="md:max-w-[1280px] mx-auto my-10">
      <div className="md:grid md:grid-cols-2">
        <div>
          <img className="w-auto" src={images} alt="" />
        </div>
        <div className="mx-10">
          <div className="text mt-32 ">
            <h1 className="md:text-7xl text-4xl font-bold uppercase text-[#333333]">
              Henderson 3A electric bike
            </h1>
            <p className="mt-9 font-medium text-gray-400">The Force was built for riders, like the EWS powerhouses of GT Factory Racing, whom are more concerned about hauling ass than paying attention to ever-changing standards and trends.</p>
          </div>
          <div className="btn md:mt-10 mt-10 flex ">
            <Link to="/" className=" flex flex-wrap">
              <span className="px-10 text-xl font-bold py-3 bg-[#E8E8E8]">$480</span>
              <span className="p-4 bg-[#F55155]">
              <ChevronDoubleRightIcon className="w-5 text-white " />
              </span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center md:mx-10 mt-10">
            <div>
                <h1 className="text-2xl font-bold text-[#333333] border-b-2 py-1">Speed</h1>
                <p className="text-xl italic font-medium text-gray-400">65km/h</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-[#333333] border-b-2 py-1">Motor Power</h1>
                <p className="text-xl italic font-medium text-gray-400">9000 w</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-[#333333] border-b-2 py-1">Range</h1>
                <p className="text-xl italic font-medium text-gray-400">190km/charge</p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Hero;
