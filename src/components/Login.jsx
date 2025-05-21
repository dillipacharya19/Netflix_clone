import React, { useRef, useState } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from '../utils/firebase';
import Header from './Header';
import { checkValidDate } from '../utils/validate.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { updateProfile } from "firebase/auth";
import { USER_AVTAR } from '../utils/constants.js';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    const message = checkValidDate(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
           const user = userCredential.user;

       

          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVTAR
          }).then(() => {

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message)
          });

          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-[rgb(50,50,50)]' />
        )}

        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-[rgb(50,50,50)]' />

        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-[rgb(50,50,50)]' />

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;