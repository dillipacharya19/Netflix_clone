import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId) => {

    const dispatch= useDispatch();

    const getMoviesVideo= async () => {
     const data= await  fetch( `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS); 
     const json= await data.json();
  

    const filterData= json.results.filter((video)=> video.type=== "Teaser");
    const teaser=filterData.lenght? filterData[2]: json.results[0];
   
    dispatch(addTrailerVideo(teaser));
    
    } 

    useEffect(()=>{
        getMoviesVideo();
    },[])
 
}

export default useMovieTrailer;