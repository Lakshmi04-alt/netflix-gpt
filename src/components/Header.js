import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigate=useNavigate();
const user=useSelector(store=>store.user);


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
}).catch((error) => {
   navigate("/error");
  // An error happened.
});
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
      
      <img className='w-44 '
     src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo"></img>
     {user && <div className="flex">
        <img 
         alt="usericon" className="h-12 w-12 m-2"
         src={user.photoURL}
        />

     <button  onClick={handleSignOut} className="mx-2 font-bold text-white"> (Sign Out) </button>
  </div>
}
  </div>
  
  );
};


export default Header;