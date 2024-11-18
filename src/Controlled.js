import React, { useState } from 'react'
import  Test from './Test'

export const Controlled = () => {
  const [name,setName] = useState('');

  // const changeHandler = (e) =>{
  //   setName(e.target.value);
  // }

  return (
    <div>
      <center>
        name : {name} <br /> controlled 
        <input type='text' onChange={(e) => setName(e.target.value)} /> <br />
        <Test changeHandler={(e) => setName(e.target.value)} />
      </center>
    </div>
  )
}
