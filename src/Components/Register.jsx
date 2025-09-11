import React, { useEffect } from 'react';
import {useForm} from "react-hook-form";
import { createUser } from '../redux/Slicers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';

const Register = () => {

  const dispatch = useDispatch();
  const {isLoading, success, error} = useSelector(state => state.users);

  const {
    register, 
    handleSubmit, 
    watch, 
    formState: {errors}
  } = useForm();

//   if(isLoading){
//      <div className='flex justify-center items-center h-screen'>
//       <svg className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" viewBox="0 0 24 24"></svg>
//     </div>
//   }

//    if(error){
//     toast.error(error.message)
//  }
useEffect(() => {
  if(success){
    toast.success("User created successfully!")
  } else if(error){
    toast.error(error.message)
    return;
  }
}, [success, error]);

    const onSubmit = (data) =>{
      console.log(data)
      try{
        dispatch(createUser(data));   
      } catch(error){
        if(error.response && error.response.data && error.response.data.message){
          console.error(error.response.data.message);
        }else{
          console.error("An error occurred while creating the user:", error.message);
        }
        
      }
  }

  


  return (
    <div className='max-w-sm m-auto shadow-lg p-10 mt-10'>
        <h2 className='text-2xl font-bold'>Please Register</h2>

        <div className='my-5'>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label htmlFor="firstName" className='block font-bold text-gray-800'>First name:</label>
                <input type="text" 
                id='firstName'
                placeholder='Enter your first name'
                {...register("firstName", {required: "First name is required"})}
                className='w-full border-2 border-gray-300 rounded-md p-2 mt-1'
                />
                {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
              </div>

              <div className='mb-4'>
                <label htmlFor="lastName" className='block font-bold text-gray-800'>Last name:</label>
                <input type="text" 
                id='lastName'
                placeholder='Enter your last name'
                {...register("lastName", {required: "Last name is required"})}
                className='w-full border-2 border-gray-300 rounded-md p-2 mt-1'
                />  
                {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>}
              </div>

              <div className='mb-4'>
                <label htmlFor="email" className='block font-bold text-gray-800'>Email:</label>
                <input type="email" 
                id='email'
                placeholder='Enter your email'
                {...register("email", {required: "Email is required"})}
                className='w-full border-2 border-gray-300 rounded-md p-2 mt-1'
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
              </div>

              <div className='mb-4'>
                <label htmlFor="password" className='block font-bold text-gray-800 '>Password:</label>
                <input type="password" 
                id='password'
                placeholder='Enter your password'
                {...register("password", {required: "Password is required"})}
                className='w-full border-2 border-gray-300 rounded-md p-2 mt-1'
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
              </div>

              <button className='bg-blue-800 py-2 px-5 font-bold text-white mt-5 rounded-md'>Sign up</button>
          </form>

          <p className='my-8 '>Don't have an accout yet? Please <span className='text-blue-500'>
          <Link to={'/login'}>login</Link></span> </p>

        <p className='text-sm text-gray-700 text-center'>&copy; 2025 Bellefull. All Rights Reserved</p>
        </div>\
    </div>
  )
}

export default Register;