
import React, { useState,useRef } from 'react';
import Header from './Header';
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const email=useRef(null);
  const password=useRef(null);
  // const name=useRef(null);

  const handleButtonClick=()=>{
    // Validate the Form Data
   
   console.log(email.current.value);
    console.log(password.current.value);
  //  console.log(name.current.value);


      const message = checkValidData(
        email.current.value,
        password.current.value,
      
      );
      setErrorMessage(message);
      if(message) return ;

      // Signin / Signup
      if(!isSignInForm){
        // SignUp logic
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: "name.current.value",
   photoURL: "https://avatars.githubusercontent.com/u/178694480?v=4",
}).then(() => {
   const {uid,email,displayName,photoURL} = auth.currentUser;
  dispatch(
    addUser({
        uid: uid,
        email:email,
        displayName: displayName,
        photoURL: photoURL,
      })
    );
  navigate("/browse")
}).catch((error) => {
   setErrorMessage(error.message);
  // ...
});

    console.log(user);
     navigate("/browse");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" +errorMessage);
    
    
    // ..
  });
      }
      else{
        //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
     navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage)

  });

      }

     
  

  }

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
   <form onSubmit={(e)=>e.preventDefault()}
   className=' w-3/12 p-12 my-36 bg-black absolute mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
   <h1 className='font-bold text-3xl py-4 '>
    {isSignInForm ? "Sign In" : "Sign Up"}
    </h1>

     {!isSignInForm &&<input
    //  ref={name}
     type="text" 
     placeholder="Full Name" 
     className="p-2 my-2 w-full bg-gray-700"
     />}
    <input
    ref={email}
     type="text" 
     placeholder="Email Address" 
     className="p-2 my-2 w-full bg-gray-700"
     />
    <input 
    ref={password}
    type="password" 
    placeholder="Password" 
    className="p-2 my-2 w-full bg-gray-700"
    />
    <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
    <button
     className="p-3 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
      onClick={handleButtonClick}>
       {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className='py-4 cursor-pointer'
       onClick = {toggleSignInForm}>
        {isSignInForm ? " New to Netflix? Sign Up Now" : "Already registered? SignIn Now"}</p>
   </form>

  </div>
  );
};

export default Login;



