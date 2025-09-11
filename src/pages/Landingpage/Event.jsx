import React from 'react';
import bridal from "../../images/wedding.jpg"
import birthday from "../../images/birthday.jpg";
import decor from "../../images/decor.jpeg";
import food from "../../images/food.jpeg";
import Aos from 'aos';

const Eventsect = () => {
  return (
    <div className='px-10 py-15'>
         <h1 className="heroText text-4xl font-semibold">
          We also offer unique  <br /> services for your event
        </h1>

        {/* small screen */}
        {/* <h1 className="heroText text-3xl sm:text-4xl xl:hidden font-bold">
          Get your <span className="text-[#c05204]">food</span>  delivery at your doorstep
        </h1> */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8  content-center justify-center'>
            <div data-aos="fade-up" >
                <img className=' w-full ' src={bridal} alt="" />
                <div className='mt-2'>
                    <h1 className='font-semibold'>Bridal Shower</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
            </div>
            <div data-aos="fade-down" >
                <img className='w-full' src={birthday} alt="" />
                
                <div className='mt-2'>
                    <h1 className='font-semibold'>Birthdays</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
            </div>
            <div data-aos="fade-up">
                <img className=' w-full ' src={decor} alt="" />
                <div className='mt-2'>
                    <h1 className='font-semibold'>Decoration</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
            </div>
            <div data-aos="fade-down">
                <img className=' w-full ' src={food} alt="" />
                <div className='mt-2'>
                    <h1 className='font-semibold'>Food</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Eventsect