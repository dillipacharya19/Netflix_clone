import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackround from "./VideoBackround";


const MainContainer = () => {
    const movies= useSelector((state)=>state.movies?.nowPlayingMovies);  
    if(! movies)return;
    const mainMovies= movies[0];
    
    
    const {title, overview,id}= mainMovies; 
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackround movieId={id}/>
    </div>
  )
}

export default MainContainer