import React from "react";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { GoDash } from "react-icons/go";

const CartItem = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems.length);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((order, index) => (
            <ul key={index} className="flex justify-between">
              <div className="flex gap-2 content-center justify-center">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                    alt=""
                    src={order.image}
                    className="h-full w-full object-cover object-center"
                    />

                  <div>
                    <p>{order.name}</p>
                    <p>{order.price}</p>
                  </div>
                </div>

               <div>
                <button className=""> <IoMdAdd /> </button>
                <span>1</span>
                <button> <GoDash /> </button>
              </div>
              </div>
            </ul>
          ))}
        </div>
      ) : (
        <div>
          <h3>Cart is empty</h3>
        </div>
      )}
    </div>
  );
};

export default CartItem;
