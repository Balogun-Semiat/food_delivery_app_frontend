import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMenuByRestaurant } from "../redux/Slicers/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Slicers/cartSlice";


const EachRestaurantMenu = () => {
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const { cartItems } = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState("Main");

  const categories = ["Main", "Drink", "Side", "Soup"];

  useEffect(() => {
    dispatch(fetchMenuByRestaurant(id)).unwrap();
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading menu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-red-500">
          <p className="text-lg font-semibold">Error loading menu</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  const filteredItems = menuItems.filter(
    (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item._id,
        name: item.name,
        price: item.price,
        restaurantId: item.restaurant,
      })
    );
    toast.success("✓ Added to cart!");
  };

  return (
    <div className="min-h-screen b g-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Menu</h1>
          <p className="text-gray-600">Browse our delicious selection</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems && filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-200 h-48">
                  {item.image && item.image.length > 0 ? (
                    <img
                      src={item.image[0].secure_url}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  {!item.isAvailable && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Unavailable
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      ₦{item.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.isAvailable}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        item.isAvailable
                          ? "bg-orange-500 text-white hover:bg-orange-600 active:scale-95"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-gray-600 text-lg">
              No items in {activeCategory} category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EachRestaurantMenu;
