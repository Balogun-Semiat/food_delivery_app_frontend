import React from "react";
import { IoFastFood } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center text-center mx-auto mt-5 justify-center w-[50vw] bg-green-500 p-5 rounded-2xl shadow-lg">
      <div className="">
        <span className="text-white">
            <IoFastFood size={"80px"} />
          </span>
      </div>
      <div className="text-start">
        <h1 className="text-4xl font-bold text-white ">BelleFull</h1>
        <p className="text-lg text-gray-900">
          Delivered Fresh As E Dey Hot
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
