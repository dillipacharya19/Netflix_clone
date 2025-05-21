import React from 'react'
import { CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div  className="w-36 md:w-48 pr-4">
        <img src={CDN_URL + poster_path
} alt="cdn_url" />
    </div>
  )
}

export default MovieCard