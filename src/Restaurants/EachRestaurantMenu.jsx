import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { fetchRestaurantById } from "../redux/Slicers/restaurantSlice";
import { fetchMenuByRestaurant } from "../redux/Slicers/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slicers/cartSlice";

const EachRestaurantMenu = () => {
  // const [menu, setMenu] = useState(null);
  // const [loading, setLoading] = useState(true);
  const {menuItems, loading, error} = useSelector(state => (state.menu))
  console.log(menuItems)

  const {cartItems} = useSelector((state)=>(state.cart));

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const response = dispatch(fetchMenuByRestaurant(id)).unwrap();
    // console.log(response);
  }, [dispatch, id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  const handleAddToCart = (item) => {
    alert("Added to cart");
    dispatch(addToCart({
      id:item._id,
      name: item.name,
      price: item.price,
      restaurantId: item.restaurant
    }));
    console.log(id)
  }

  console.log(cartItems, "cart items");
  return (
    <div className="">
      {loading ? (
        <div className="text-center mt-10">Loading...</div>
      ) : (
        <div className="flex p-20 items-center ">
          {
            menuItems && menuItems.length > 0 ? (
              menuItems.map((item) => (
                <div key={item._id} className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4">
                  <img src={item.image} className="w-full h-24 object-cover" alt={item.name} />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 text-sm mt-1 mb-2">{item.description}</p>
                    <p className="text-gray-600 text-sm mt-1 mb-2">#{item.price}</p>
                    <p className="text-gray-600 text-sm mt-1 mb-2">{item.isAvailable}</p>
                    <button onClick={()=>handleAddToCart(item)} className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Add
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">No menu items available.</div> 
            )
          }
        </div>
      )}
    </div>
  );
};

export default EachRestaurantMenu;
