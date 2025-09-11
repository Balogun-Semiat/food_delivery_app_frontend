import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerRestaurant } from "../redux/Slicers/restaurantSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const RegisterRest = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onsubmit = async(data)=>{
        console.log("Form Data:", data);
        const newRestaurant = {
          businessName: data.businessName,
          address: {
            city: data.city,
            state: data.state,
            country: data.country,
            zipcode: data.zipcode
          },
          phoneNumber: data.phoneNumber,
          email: data.email,
          password: data.password,
          logo: data.logo[0] // Assuming logo is a file input
        }
        console.log("newRestaurant", newRestaurant);
        try{
          const response = await dispatch(registerRestaurant(newRestaurant));
          console.log("response", response);
          if(response.meta && response.meta.requestStatus === 'fulfilled') {
            console.log("Restaurant registered successfully", response.payload);
            toast.success("Restaurant registered successfully");
            navigate('/home');
          } else {
            console.error("Error registering restaurant", response.payload.message);
          }
        } catch(error){
            console.error("Error registering restaurant", error);
        }
    }


  return (
    <div className="min-h-screen bg-gray-100  p-5">
      <form
        className="mx-auto bg-white p-8 rounded-lg shadow-md space-y-6 grid"
        onSubmit={handleSubmit(onsubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-8">
          Register Your Restaurant
        </h2>
        <div>
          <label className="block mb-1 font-medium">Business Name</label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("businessName", {required: "Business name is required"})}
          />
          {errors.businessName && 
            <p className="text-red-500 text-sm mt-1"> {errors.businessName.message}  </p>
          }
        </div>

       <div className="grid grid-cols-3 gap-4">
           <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            type="text"
            name="city"
            id="city"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("city", {required: "City is required"})}
          />
          {errors.address && 
            <p className="text-red-500 text-sm mt-1"> {errors.city.message} </p>
          }
        </div>

        <div>
          <label className="block mb-1 font-medium">State</label>
          <input
            type="text"
            name="state"
            id="state"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("state", {required: "State is required"})}
          />
          {errors.address && 
            <p className="text-red-500 text-sm mt-1"> {errors.state.message} </p>
          }
        </div>

        <div>
          <label className="block mb-1 font-medium">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("country", {required: "country is required"})}
          />
          {errors.address && 
            <p className="text-red-500 text-sm mt-1"> {errors.country.message} </p>
          }
        </div>
       </div>

       <div className="grid grid-cols-2 gap-4">
          <div>
          <label className="block mb-1 font-medium">Zipcode</label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("zipcode", {required: "Zipcode is required"})}
          />
          {errors.address && 
            <p className="text-red-500 text-sm mt-1"> {errors.zipcode.message} </p>
          }
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Phone number must be 11 digits",
              },
            })}
          />
          <p>{errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message} </p> }</p>
        </div>
       </div>

       <div className="grid grid-cols-3 gap-4">
         <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && 
            <p className="text-red-500 text-sm mt-1"> {errors.email.message} </p>
          }
        </div>

        <div>
              <label className="block mb-1 font-medium">Logo</label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                // onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("logo")}
              />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && 
            <p className="text-red-500 text-sm mt-1"> {errors.password.message} </p>
          }
        </div>
        
       </div>

        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterRest;
