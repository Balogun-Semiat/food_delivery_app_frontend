import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import FirstNav from './FirstNav'

const Layout = () => {
  return (
    <div>
        <FirstNav />
        {/* <Navbar />
        <div className='grid grid-cols-3 gap-4 py-15 px-32'>
            <button className='bg-green-500 font-semibold text-white rounded-full py-4'>Restaurants</button>
            <button className='bg-green-500 font-semibold text-white rounded-full'>Checkout</button>
            <button className='bg-green-500 font-semibold text-white rounded-full'>User's Profile</button>
        </div> */}

        <Outlet />
    </div>
  )
}

export default Layout