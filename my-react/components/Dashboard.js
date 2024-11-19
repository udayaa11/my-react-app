import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const {name} = useParams(); // Destructure `name` from `useParams`
  return (
    <div> 
      <h1> Dashboard profile name is : {name}  </h1>
       </div>
  )
}

export default Dashboard

