import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../redux/Slicers/userSlice';


const PasswordReset = () => {

  const dispatch = useDispatch();

  const {register, handleSubmit, watch, formState = {errors}} = useForm();
  
  const token = `localhost:5173/?token=${token}`
  const onSubmit = (data) =>{
      console.log(data);
      try {
        if(data.password !== data.confirmPassword){
        alert("Password does not match");
        return;
      }

      const response = dispatch(resetPassword(token));
      if(response){
        console.log("successful")
      }else{
        console.log("error resetting password")
      }
      } catch (error) {
        console.log(error);
      }
      
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label htmlFor="Password">Enter new password</label> <br />
        <input type="password" name="password" id="" 
        {...register("password", {required: "Password is required"})}/>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password</label> <br />
        <input type="password" name="confirmPassword" id="" 
        {...register("confirmPassword", {required: "Confirm password"})}/>
      </div>

      <button className='bg-blue-800 py-2 px-5 font-bold text-white mt-5 rounded-md'>Reset password</button>
      </form>
    </div>
  )
}

export default PasswordReset