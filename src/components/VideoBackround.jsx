import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideoBackround = ({movieId}) => {
    const trailerVideo= useSelector((state)=> state.movies?.teaserVideo);
    const dispatch= useDispatch();

    const getMoviesVideo= async () => {
     const data= await  fetch('https://api.themoviedb.org/3/movie/950387/videos?language=en-US', API_OPTIONS) 
     const json= await data.json();
    console.log(json.results);

    const filterData= json.results.filter((video)=> video.type=== "Teaser");
    const teaser=filterData.lenght? filterData[2]: json.results[0];
    console.log(teaser);
    dispatch(addTrailerVideo(teaser));
    
    } 

    useEffect(()=>{
        getMoviesVideo();
    },[])
  return (

        <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackround;