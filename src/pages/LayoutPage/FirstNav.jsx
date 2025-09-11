import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const FirstNav = () => {

const {cartItems} = useSelector(state=>state.cart);



  return (
    <nav class="bg-gray-800 p-4 sticky top-0 z-50">
      <div class="container mx-auto flex items-center justify-between">
        <h1 className="flex items-center font-extrabold text-2xl text-white">
          <span className="text-white">
            <IoFastFood size={"30px"} />
          </span>
          Bellefull
        </h1>
        <div class="relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-64 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <a href="#" class="text-gray-300 hover:text-white px-3">
            {" "}
            <FaRegUser />
          </a>
          
          <Link to={'/order/cart'}>
            <button className="flex items-center content-center gap-1 border-none rounded-md bg-[#D2691E] hover:bg-[#6B8E23] text-white px-3 py-2 font-semibold">
              <FaCartPlus /> <sup>{cartItems.length}</sup>  
            </button>
          </Link>

          <a href="#" class="text-gray-300 hover:text-white px-3">
            Log out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FirstNav;
