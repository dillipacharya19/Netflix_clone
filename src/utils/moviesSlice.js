import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        teaserVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.teaserVideo=action.payload;
        },
    },

});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies}=moviesSlice.actions;

export default moviesSlice.reducer;