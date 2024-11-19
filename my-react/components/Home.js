// import React,{useState} from 'react'
// import {Navigate} from 'react-router-dom'

// const Home = () => {
//   const [auth,setAuth] = useState(false);
//   if(auth){
//     return <Navigate to='/dashboard' />
//   }
//   return (
//     <div>
//       <h1> Welcome To  home page ! </h1>
//       <button onClick={() => setAuth(true)} > login </button>
//     </div>
//   )
// }

// export default Home

//   redirect in react using useEffect,  
//   we can't use redirect , we can use navigate in steda o f redirect , present update version.
// import React,{useState,useEffect} from 'react'
// import {useNavigate}  from 'react-router-dom'

// const Home = () => {
//   const [auth,setAuth] = useState(false);
//   const navigate = useNavigate();

  //  use effect can take two parameters, one is arrow function and another one is dependency,
  //  and aslo useEffect uses for, return ststement taruvata edina function  ni execute cheyali ante useEffect life cycle hook ni use chestam,
//   useEffect(() => {
//     if(auth){
//       navigate('/about');
//     }
//   },[auth, navigate])
 
//   return (
//     <div>
//       <h1> Welcome To  home page ! </h1>
//       <button onClick={() => setAuth(true)} > login </button>
//     </div>
//   )
// }

// export default Home
//  use histoty  ::  In React Router v6 and later, useHistory has been replaced by useNavigate
//  easiest way to write naviagte  hook life cycle.

import React from 'react'
import {useNavigate}  from 'react-router-dom'

export const Home = () => {
  const  navigate = useNavigate();

  return (
    <div>
      <h1> Welcoe to Home page !!</h1>
      <button onClick={() => navigate('./dashboard')} > login </button>
    </div>
  )
}





