import React from 'react';
import chef from "../../images/chef.jpeg"
import food from '../../images/food.jpeg'
import pizza from '../../images/Pizza.jpeg'
import { IoTimerOutline, IoCartSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
const Delivery = () => {
  return (
    <div className='p-10 grid lg:grid-cols-2 items-center '>
        <div className='w-1/2 grid grid-cols-[300px_300px] gap-2 items-center'>
            <img src={chef} className='row-span-2 ' alt="" />
            <img src={food} className='gridtwo' alt="" />
            <img src={pizza} className='gridthree' alt="" />
        </div>

        <div>
            <h1 className="text-5xl font-semibold">Fastest Food <br />
                Delivery in Town
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus perspiciatis minima natus! ius ipsam, minus reprehenderit? </p>
            
            <div>
                <div className='flex items-center gap-2 mt-4'>
                    <IoTimerOutline className='text-3xl text-orange-500' />
                    <p className='text-lg'>30 Minutes Delivery</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <IoTimerOutline className='text-3xl text-orange-500' />
                    <p className='text-lg'>24/7 Service</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <IoCartSharp className='text-3xl text-orange-500' />
                    <p className='text-lg'>Online services available</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <FaAward className='text-3xl text-orange-500' />
                    <p className='text-lg'>Best offer and prices</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Delivery