import React from 'react'
import { verifyEmailToken } from '../redux/Slicers/userSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ConfirmEmail = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  console.log(token, "token from confirm email");


  useEffect(() => {
   try{
    const response = dispatch(verifyEmailToken(), token);
    console.log(response, "response from email verification");

    // if(response.status === 'fulfilled'){
    //   alert("Email verified")
    // } else {
    //   console.log(error)
    // }
   } catch(error){
    console.log(error)
   }
  }, [dispatch])
  

  return (
    <div>
      <h3>Your email has been verified.</h3>
      <h3>You can now log in</h3>
    </div>
  )
}

export default ConfirmEmail