import  { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import {addGptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () => {
   const dispatch=useDispatch();
  const langKey=useSelector(store=>store.config.lang);
  const searchText=useRef(null);

  //search movie in tmdb database
  const searchmovieTMDB= async(movie)=>{
    const data=await fetch(
    "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",  
    API_OPTIONS
    );
    const json= await data.json();

    return json.results;
  };

   const handleGptSearchClick = async () => {
  console.log(searchText.current.value);

  // Make GPT query
  const gptQuery =
    "Act as a Movie Recommendation System and suggest some movies from the Query: " +
    searchText.current.value +
    ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

  try {
    // ✅ Call GPT API
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices || gptResults.choices.length === 0) {
      console.error("No GPT results found!");
      return;
    }

    // ✅ Extract movie names from GPT response
    const gptMovies = gptResults.choices[0].message.content
      .split(",")
      .map((m) => m.trim());

    console.log("GPT Suggested Movies:", gptMovies);

    // ✅ Search each movie in TMDB
    const promiseArray = gptMovies.map((movie) => searchmovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    console.log("TMDB Results:", tmdbResults);

    // ✅ Save to Redux (so GptMovieSuggestions can use it)
    dispatch(addGptMovieResult({ movieNames:gptMovies, movieResults:tmdbResults }));
  } catch (error) {
    console.error("Error in handleGptSearchClick:", error);
  }
};



  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
    <form className=' w-full md:w-1/2 bg-black grid grid-cols-12' 
    onSubmit={(e)=>e.preventDefault()}>

      <input 
      ref={searchText}
      type="text" 
      className='p-4 m-4 col-span-9' 
      placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 '
      onClick={handleGptSearchClick} 
      >
        {lang[langKey].search}
        </button>
      </form>
     </div>
  );
};
export default GptSearchBar;