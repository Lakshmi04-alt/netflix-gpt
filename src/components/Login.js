
import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{

    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header/>
      <div>
  <img className='absolute'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt="image">
      </img>
  </div>
   <form className=' w-3/12 p-12 my-36 bg-black absolute mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
   <h1 className='font-bold text-3xl py-4 '>
    {isSignInForm ? "Sign In" : "Sign Up"}
    </h1>
     {!isSignInForm &&<input
     type="text" 
     placeholder="Full Name" 
     className="p-2 my-2 w-full bg-gray-700"
     />}
    <input
     type="text" 
     placeholder="Email Address" 
     className="p-2 my-2 w-full bg-gray-700"
     />
    <input 
    type="password" 
    placeholder="Password" 
    className="p-2 my-2 w-full bg-gray-700"
    />
    <button
     className="p-3 my-6 bg-red-700 w-full rounded-lg">
       {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className='py-4'
       onClick = {toggleSignInForm}>
        {isSignInForm ? " New to Netflix? Sign Up Now" : "Already registered? SignIn Now"}</p>
   </form>

  </div>
  );
};

export default Login;



