import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart } from "../redux/Slicers/cartSlice";
import { Link } from "react-router-dom";
const CartItem = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems.length);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((order) => (
            <div
              key={order.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white shadow rounded-lg"
            >
              {/* Image + Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={order.name}
                    src={order.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="font-medium">{order.name}</p>
                  <p className="text-gray-600">₦{order.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decreaseQty(order))}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <GoDash />
                </button>
                <span className="font-semibold">{order.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty(order))}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <IoMdAdd />
                </button>
              </div>

              {/* Item Total + Remove */}
              <div className="flex flex-col items-start sm:items-end">
                <p className="font-medium">
                  ₦{order.price * order.quantity}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(order))}
                  className="text-sm text-red-500 hover:underline mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-lg font-bold">Total: ₦{totalPrice}</p>
            <Link to={"/order/checkout"}>
                <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Checkout
            </button>            
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <h3 className="text-xl font-semibold text-gray-600">
            Your cart is empty 🛒
          </h3>
        </div>
      )}
    </div>
  );
};

export default CartItem;
