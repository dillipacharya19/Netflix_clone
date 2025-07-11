import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add search logic here
  }

  const langKey = useSelector((store)=> store.config.lang);
  
 
  return (
    <div className='pt-[20%] flex justify-center'>
      <form 
        onSubmit={handleSubmit}
        className='w-1/2 bg-black grid grid-cols-12'
      >
        <input 
          type="text" 
          className="p-4 m-4 bg-white col-span-9" 
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button 
          className='col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg'
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
