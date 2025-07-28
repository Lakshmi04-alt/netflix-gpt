import React from 'react'
import GptSearchBar from './GptSearchBar';
import MovieSuggestions from './MovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div>
     <img className='absolute -z-10'
      src={BG_URL} alt="image">
      </img>
     </div>
     <GptSearchBar/>
     <MovieSuggestions/>
    </div>
  
)};

export default GptSearch