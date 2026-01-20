import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const Restaurantdashboard = () => {
  const [isOpen , setIsOpen] = useState(false);

  return (
    <div className='flex h-screen w-full'>
       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

       <div className='flex flex-col flex-1'>
        <Navbar setIsOpen={setIsOpen} />

        <div className='p-4 flex-1'>
          <h1 className='text-2xl font-bold mb-4'>Restaurant Dashboard</h1>
          {/* Main content goes here */}
          <main className='flex-1 overflow-y-auto'>
            <Outlet />
            
          </main>
        </div>
       </div>

    </div>
  )
}

export default Restaurantdashboard