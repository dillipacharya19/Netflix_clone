import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { addUser } from '../utils/userSlice';
const Body = () => {
    const dispatch = useDispatch();
   
    const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,email,dispalyName,photoURL} = user;
    dispatch(addUser({uid: uid, email: email, displayName: dispalyName, photoURL: photoURL}));
    // ...
   
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
  
  }
});

    }, []);

    return (
        <div>
            <RouterProvider router={appRouter} />
           
        </div>
    )
}

export default Body