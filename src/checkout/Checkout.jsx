import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleCheckout = () => {};

  //   const handleCheckout = async () => {
  //     try {
  //       // 1. Create order in backend
  //       const { data } = await axios.post("/api/orders", {
  //         items: cartItems,
  //         total: cartTotal,
  //         restaurantId: "123", // dynamic
  //         userId: "456", // from auth
  //       });

  //       const orderId = data.order._id;

  //       // 2. Trigger Paystack/Flutterwave payment
  //       const handler = window.PaystackPop.setup({
  //         key: "YOUR_PUBLIC_KEY", // test key
  //         email: "user@email.com", // dynamic from auth
  //         amount: cartTotal * 100, // kobo in Paystack
  //         ref: orderId, // use your backend order id
  //         onClose: () => alert("Payment window closed."),
  //         callback: async (response) => {
  //           // verify payment on backend
  //           await axios.post("/api/payments/verify", {
  //             reference: response.reference,
  //             orderId,
  //           });
  //           alert("Payment successful!");
  //         },
  //       });

  //       handler.openIframe();
  //     } catch (err) {
  //       console.error(err);
  //       alert("Something went wrong during checkout.");
  //     }
  //   };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-xl font-bold mb-6">Enter Delivery Details</h1>
        <div>
          <form
            className="mx-auto mb-8"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="mb-2">
              <label className="block font-semibold" htmlFor="name">
                Receiver's Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                className="w-full border-2 rounded-md p-2 mt-1 mb-4"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label className="block font-semibold" htmlFor="name">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-2 rounded-md p-2 mt-1 mb-4"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label className="block font-semibold" htmlFor="name">
                Active Phone Number
              </label>
              <input
                type='number'
                id="phone"
                placeholder="Enter your phone number"
                className="w-full border-2 rounded-md p-2 mt-1 mb-4"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label className="block font-semibold" htmlFor="name">
                Address
              </label>
              <textarea 
                name="address" 
                placeholder="Enter your delivery address"
                id="address"
                {...register("address", { required: "Address is required" })} 
                className="w-full border-2 rounded-md p-2 mt-1 mb-4"
              />

              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address.message}</p>
              )}
            </div>

          </form>
        </div>
      </div>

      <div className="p-4 border rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm border-b pb-2"
          >
            <p>
              {item.name} (x{item.quantity})
            </p>
            <p>₦{item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>₦{cartTotal}</p>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-green-600 text-white py-2 rounded-md"
        >
          Pay with Paystack
        </button>
      </div>
      
    </div>
  );
}
