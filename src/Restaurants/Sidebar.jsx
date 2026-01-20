import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-2 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:static md:w-64`}>

        <div className='bg-gray-600 shadow-2xl text-white p-4 rounded h-20 mb-3'>
            <h2>Welcome, ...</h2>
        </div>

         <button>
            <FaTimes className="text-white text-2xl md:hidden mb-6" onClick={()=>setIsOpen(false)} />
        </button>

      <div className='px-4'>
          <nav className='flex flex-col space-y-4'>
            <Link to="/restaurant/dashboard" className='bg-gray-500 hover:bg-gray-700 p-2 rounded'>Dashboard</Link>
            <Link to="/restaurant/orders" className='hover:bg-gray-700 p-2 rounded'>Orders</Link>
            <Link to="/restaurant/add-menu" className='hover:bg-gray-700 p-2 rounded'>Add Menu</Link>
            <Link to="/restaurant/settings" className='hover:bg-gray-700 p-2 rounded'>Settings</Link>
        </nav>

        <div className='absolute bottom-4 '>
            <button className='mt-6 bg-red-600 hover:bg-red-700 p-2 rounded w-full' >Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar