import { API_OPTIONS } from '../utils/constants';
import { addTopRated } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';


const useTopRated = () =>{
//fetch data from tmdb api and update store
  const dispatch=useDispatch();

   const getTopRated=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/tv/top_rated",
      API_OPTIONS

    );
    const json=await data.json();
  
    dispatch(addTopRated(json.results));
   };

   useEffect(()=>{
    
    getTopRated();
    
   },[]);
};

export default useTopRated;