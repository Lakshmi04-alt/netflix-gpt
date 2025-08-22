import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
     <img className=' object-cover fixed -z-10 w-screen h-screen bg-cover bg-center' src={BG_URL} alt="image">
      </img>
     </div>
    <div className=''>
      
     <GptSearchBar/>
     <GptMovieSuggestions/>
    </div>
  </>
)};

export default GptSearch