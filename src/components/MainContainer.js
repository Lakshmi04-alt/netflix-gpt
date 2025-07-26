import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
const movies=useSelector(store=>store.movies.nowPlayingMovies);

// ✅ Check that movies exist and has at least one movie
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  // ✅ Check again in case mainMovie is still undefined
  if (!mainMovie) return null;


const{title,overview,id}=mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;