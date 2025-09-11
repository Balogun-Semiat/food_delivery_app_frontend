import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginRestaurant } from "../redux/Slicers/restaurantSlice";

const RestaurantLogin = () => {

    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmit = async(data) =>{
        try{
            const response = await dispatch(loginRestaurant(data)); 
            console.log(response);
            if(response.meta && response.meta.requestStatus === 'fulfilled'){
                if(response.payload.restaurant.role !== 'restaurant'){
                    console.error("Not a restaurant account");
                    return;
                }
                const {token} = response.payload;
                // console.log(token); 
                localStorage.setItem('token', token);
                navigate('/restaurant/dashboard');
            } else {
                console.error("Error logging restaurant in", response.payload.message);
            }
        } catch(error){
            console.log(error);
        }
    }

  return (
    <div className="m-auto shadow-lg p-10 max-w-sm mt-10 h-[calc(100vh-200px)] bg-white rounded-md">
      <h1 className="text-2xl font-bold">Login here </h1>

      <div className="my-5">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="" className="block font-bold text-gray-800">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 rounded-md p-2 mt-1"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="">
            <label htmlFor="password" className="block font-bold text-gray-800">
              {" "}
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border-2 border-gray-300 rounded-md p-2 mt-1"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message} </p>
          )}

          <div className="flex items-baseline justify-between">
            <button className="bg-blue-800 py-2 px-5 font-bold text-white mt-5 rounded-md">
              Log In
            </button>
            <p className="text-xs">Forgot password?</p>
          </div>
        </form>

        <p className="mt-8 text-sm">
          Don't have an accout yet? Please
          <span className="text-blue-500">
            <Link to={"/restaurant"}>register</Link>
          </span>
        </p>

        <p className="text-sm text-gray-700 text-center">
          &copy; 2025 Bellefull. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default RestaurantLogin;
