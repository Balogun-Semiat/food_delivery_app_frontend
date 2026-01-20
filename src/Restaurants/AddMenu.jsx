import { postMenu } from '@/redux/Slicers/menuSlice';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const AddMenu = () => {
  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onsubmit = async(data) =>{
    console.log(data)
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", data.image[0]);

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await dispatch(postMenu(formData))
      toast.success("✓ Menu item added successfully!");
      navigate('/restaurant');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='max-w-4xl shadow-2xl bg-white px-3 py-5 rounded-lg'>
      <h2 className='text-xl mb-5 font-bold'>Create Menu Here</h2>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div className='mb-3 '>
          <input type="text" placeholder='Food name' id='name' className='w-full bg-gray-100 p-3 rounded' 
          {...register("name", {required: "Name is required"})}
          />
          {errors.name && 
          <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
          }
        </div>

        <div className='mb-3 '>
          <input type="text" placeholder='Enter food description' id='description' className='w-full bg-gray-100 p-3 rounded-sm' 
          {...register("description", {required: "Description is required"})}/>
          {errors.description && 
          <p className='text-red-500 text-sm mt-1'> {errors.description.message}</p>}
        </div>

        <div className='mb-3 '>
          <input type="number" placeholder='Enter food price e.g 3000' id='price' className='w-full bg-gray-100 p-3 rounded-sm' 
          {...register("price", {required: "Price is required"})}/>
          {errors.price && 
          <p className='text-red-500 text-sm mt-1'>{errors.price.message}</p>}
        </div>

        <div className='mb-3'>
          <select name="category" id="category" className='w-full bg-gray-100 p-3 rounded-sm' {...register("category", {required: "Category is required"})}>
            <option value=""></option>
            <option value="main">Main dishes</option>
            <option value="drink">Drink</option>
            <option value="side">Sides</option>
            <option value="soup">Soup</option>
          </select>
          {errors.category && 
          <p className='text-red-500 text-sm mt-1'>{errors.category.message}</p>}
        </div>

        <div className='mb-3 '>
          <input type="file"
          accept='image/*'
          id='image' className='w-full bg-gray-100 p-3 rounded-sm' 
          {...register("image", {required: "Image is required"})}
          />
          {errors.image && 
          <p className='text-red-500 text-sm mt-1'>{errors.image.message}</p>}
        </div>

        <button type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4 transition">Submit
        </button>
      </form>
    </div>
  )
}

export default AddMenu