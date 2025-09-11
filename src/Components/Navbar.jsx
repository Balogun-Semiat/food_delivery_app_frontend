import React from 'react'
import { IoFastFood } from "react-icons/io5";

const Navbar = () => {

  const logoStyle = {
    color: "red"
    
  };

  return (
    <nav className='bg-transparent w-full px-10 py-5 static top-5 flex justify-between  items-center'>
            <div>
                <h1 className='flex items-center font-extrabold text-2xl'> <span className='text-[#D2691E]'><IoFastFood size={'30px'}/></span>   Bellefull</h1>
            </div>
           
           <div className='flex items-center justify-between gap-10'>
             <div>
                <p className='lg:hidden'>icon</p>
                <ul className='hidden lg:flex gap-10 items-center font-semibold text-md'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact us</li>   
                </ul>
            </div> 
            <div className='hidden lg:flex gap-3 '>
              <button className='border-none rounded-full bg-[#D2691E] hover:bg-[#6B8E23] text-white px-5 py-2 font-semibold'><a href="./login.jsx">Order Now</a></button>
              
              {/* <button className='border-2 text-[#D2691E] rounded-full bg-white border-[#6B8E23] px-5 py-2 font-semibold'>Login</button> */}
            </div>  
           </div>
      
    </nav>
  )
}

export default Navbar