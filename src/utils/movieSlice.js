import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        popularMovies:[],
        topRated:[],
        upcomingMovies:[],
        trailerVideo:null

    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;

        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;

        },
        addTopRated : (state,action)=>{
            state.topRated = action.payload;

        },
         addUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload;

        },
        addTrailerVideo :(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
});
export const{ addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;
  