
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);

  return (

      <div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.topRated}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Up coming Movies"} movies={movies.upcomingMovies}/>
      </div>
      {/* 
      MovieList-popular
        MovieCard*n
      MovieList-Now playing  
      MovieList-Trending
      MovieList- Horror 

       */}
    </div>
    
  );
};

export default SecondaryContainer;

