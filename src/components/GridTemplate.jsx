import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";


const GridTemplate = ({ Logo, name, contact, floor, categoryTags }) => {
  return (
    <div className="w-[260px] h-auto flex flex-col items-center ">
      <div className=" sm:h-[300px] cursor-pointer w-full mb-2 rounded-lg overflow-hidden border border-[#1a1a1d84] object-cover flex flex-col items-center justify-start">
        <div className=" p-9 h-[190px] sm:h-[210px] overflow-hidden w-full flex items-center justify-center object-fill">
          <img className="object-cover sm:hover:scale-105 transition-all duration-300" src={Logo} alt="" />
        </div>
        <div className="w-full flex justify-between items-center px-4 mt-2 mb-2 sm:mb-0">
          <div className="flex flex-col">
            <a href="#" className="capitalize cursor-pointer font-semibold">{name}</a>
            <a href="#" className="capitalize cursor-pointer text-[10px]">{categoryTags.split(',').join(' | ')}</a>
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <div className="rounded-full relative border-[1px] border-[#1a1a1d84] text-customblack p-2 h-8 w-8 flex items-center justify-center cursor-pointer hover:scale-95 transition-all duration-300">
                <FaLocationDot size={22} />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 capitalize py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {floor}&nbsp;
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-full relative border-[1px] border-[#1a1a1d84] text-customblack p-[6px] h-8 w-8 flex items-center justify-center cursor-pointer hover:scale-95 transition-all duration-300">
                <BiSolidPhoneCall size={25} />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 capitalize py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                +91 {contact}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridTemplate;
