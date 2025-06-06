import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';

import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguge } from '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
 const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
             uid: uid,
              email: email,
               displayName: displayName,
                photoURL: photoURL 
              })
            );
            navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsuscribe when component unmounts
    return ()=> unsubscribe();
  }, []);

  const handleGptSearchClick=()=>{
    //Toggele GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguge(e.target.value));
  }
  const showSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
     
      <img
        className='w-44'
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className='flex p-2'>
          {showSearch && ( <select className='p-2 bg-gray-500 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifer}value={lang.identifer}>{lang.name}</option>)}
          </select>)}
           <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg ' onClick={handleGptSearchClick}>{showSearch ? "Homepage" :"GPT Search"}</button>
          <img className='w-12 h-12' src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className='font-bold text-white'>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
