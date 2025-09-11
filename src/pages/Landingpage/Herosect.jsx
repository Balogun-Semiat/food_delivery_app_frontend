import React from "react";
import online from "../../images/online.png";

const Herosect = () => {
  return (
    <div className="grid md:grid-cols-2 items-center justify-center  gap-6 py-10 px-15 ">
      <div className="">
        <h1 className="heroText hidden xl:block text-6xl font-bold leading-16">
          Get your <span className="text-[#c05204]">food</span> <br /> Delivery at your <br /> Doorstep
        </h1>

        {/* small screen */}
        <h1 className="heroText text-3xl sm:text-4xl xl:hidden font-bold">
          Get your <span className="text-[#c05204]">food</span>  delivery at your doorstep
        </h1>
        <p className="text-gray-900 text-lg mt-3">
          Order your favorite food from the best restaurants in town and get it delivered to your doorstep with just a few clicks.  
        </p>

         <button className='w-fit border-none rounded-full bg-[#D2691E] text-white px-5 py-2 font-semibold mt-7'>How it works</button>
      </div>

      <div className="transform -scale-x-100">
        <img src={online} alt="" />
      </div>
    </div>
  );
};

export default Herosect;
