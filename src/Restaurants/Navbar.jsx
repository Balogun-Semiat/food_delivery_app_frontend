import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";

const Navbar = ({ setIsOpen }) => {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-4 w-full">
      <div className="flex items-center space-x-1 md:space-x-3">
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <GiHamburgerMenu className="text-2xl " />
      </button>

      <div className="">
        <h1 className="flex items-center font-extrabold text-2xl text-red-600">
          <span className="text-blue-600">
            <IoFastFood size={"30px"} />
          </span>
          Bellefull
        </h1>
      </div>
      </div>
     
     <div className="flex items-center space-x-1 md:space-x-4 ">
         <button className="bg-blue-500 text-white px-2 text-nowrap text-sm md:text-lg md:px-4 py-1 md:py-2 rounded hover:bg-blue-700 flex items-center">
        <FaPlus /> Add menu
      </button>
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="font-bold text-gray-700">R</span>
      </div>
     </div>
     
    </div>
  );
};

export default Navbar;
