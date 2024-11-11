import React,{useContext} from 'react'
import { store } from './App'

const ComponentB = () => {
  const [data,setData] = useContext(store) 
  return (
    <div>Component B {data} </div>
  )
}

export default ComponentB



// import React, { useContext } from 'react';
// import { store } from './App';

// const ComponentB = () => {
//   const [data] = useContext(store);
//   return (
//     <div>Component B {data.B}</div>
//   );
// }

// export default ComponentB;
