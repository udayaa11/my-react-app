import React, { useState } from 'react'
import  Test from './Test'

export const Controlled = () => {
  const [name,setName] = useState('');

  const changeHandler = (e) =>{
    setName(e.target.value);
  }

  return (
    <div>
      <center>
        name : {name} <br />
        <input type='text' onChange={changeHandler} /> <br />
        <Test changeHandler={changeHandler} />
      </center>
    </div>
  )
}
