import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { USER_ICON } from "../utils/constants";
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
const user=useSelector(store=>store.user);


  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {
  // Sign-out successful.
}).catch((error) => {
   navigate("/error");
  // An error happened.
});
  };

     useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    dispatch(
      addUser({
        uid:uid,
      email:email,
      displayName:displayName,
      photoURL:photoURL,
    })
  );
    navigate("/browse");
   
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate("/");
   
  }
});

//Unsubscribe when component unmounts
return()=> unsubscribe();
  },[])


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
      
      <img className='w-44 '
     src={LOGO_URL} alt="Logo"></img>
     {user && <div className="flex">
        <img 
         alt="usericon" className="h-12 w-12 m-2"
         src={USER_ICON}
        
        />

     <button  onClick={handleSignOut} className="mx-2 font-bold text-white"> (Sign Out) </button>
  </div>
}
  </div>
  
  );
};


export default Header;