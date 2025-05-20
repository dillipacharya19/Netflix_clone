import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackround from "./VideoBackround";


const MainContainer = () => {
    const movies= useSelector((state)=>state.movies?.nowPlayingMovies);  
    if(! movies)return;
    const mainMovies= movies[0];
    console.log(mainMovies);
    
    const {title, overview,id}= mainMovies; 
  return (
    <div>MainContainer
        <VideoTitle title={title} overview={overview}/>
        <VideoBackround movieId={id}/>
    </div>
  )
}

export default MainContainer