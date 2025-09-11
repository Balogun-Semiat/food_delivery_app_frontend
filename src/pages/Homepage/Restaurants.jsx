import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { fetchRestaurants } from '../../redux/Slicers/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';


const Restaurants = () => {
  // const [restaurants, setRestaurants] = useState([]);

  const dispatch = useDispatch();
  const {restaurant, loading, error} = useSelector((state) => state.restaurant);
   

  useEffect(()=>{
   const response = dispatch(fetchRestaurants()).unwrap();
   console.log(response);
  }, [dispatch]);
  

  if(loading) {
    return <p>Loading ...</p>
  }

  if(error){
    return <p>{error}</p>
  }
  return (
    <div className='flex'>
      {
        restaurant.map((restaurant)=>(
          <div key={restaurant._id} className="flex items-center p-4 ">
            <div className='max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 '>
              <img src={restaurant.logo} className='w-full h-56 object-cover' alt="Logo" />
              <div className='p-2'>
                <h2 className="text-xl font-bold text-gray-800">{restaurant.businessName}</h2>
                <p class="text-gray-600 text-sm mt-1 mb-2">This is a short description of the product. It highlights key features in a few words.</p>
                <p className="text-gray-600 text-sm mt-1 mb-2">{restaurant.address.city}, {restaurant.address.state}</p>
                 <div class="flex items-center space-x-1 text-yellow-400">
                  <IoStar />
                  <span class="text-sm text-gray-600">(4.5)</span>
                </div>

                <Link to={`restaurants/${restaurant._id}`} >
                   <button class="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    View Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>


  )
}

export default Restaurants