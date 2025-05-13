import React, { useState } from 'react'

import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);
  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg" alt="logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ?" Sign In" : "Sign Up"}</h1>

      {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full  bg-[rgb(50,50,50)] ' />)}
      
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full  bg-[rgb(50,50,50)] ' />

        
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-[rgb(50,50,50)] ' />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUp}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
      </form>

    </div>
  )
}

export default Login