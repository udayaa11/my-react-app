// import React, { Component } from 'react'

// export default class Display extends Component {
//   render() {
//     return (
//       <div>
        
//         <h2> {this.props.name} </h2>

//       </div>
//     )
//   }
// }


// this is code for adding cart to items  using context API,
//  when comparing to redux its literally very easy to do. firstly creating the store using createContext(), and store lo una values ni use chesukovali ante useContext() use chesukovachu
import React,{useContext,useEffect,useState,useRef} from 'react'
import { store } from './App'

const Display = () => {
  const [data,setData] = useContext(store)
  const [name,setName] = useState('')
  const inputRef =  useRef(null);

  const onsubmitHandler = e => {
    e.preventDefault();
    const newId = Date.now(); // Generate a unique ID based on the current time
    setData([...data,{id:newId, brandName:name}]);
    setName(''); // Clear the input field after submission
  }
  useEffect(() => {
  //  if(inputRef.current){
    inputRef.current.focus();
  //  }
  },[data]) // here  Adding `data` as a dependency to focus the input field when data changes

  return (
    <div className='card'>
      <div className='card-body'>
        {data.map(item => <h3 key={item.id} className='card-title' >{item.brandName}</h3> )}
        <form className='form' onSubmit={onsubmitHandler} >
          <input ref={inputRef} type='text' placeholder='Enter the value' value={name} onChange={(e) => setName(e.target.value) } />
          <input type='submit' value="Add" />
        </form>
      </div>
    </div>
  )
}

export default Display

// higher order component (hoc) ==>> zhigher component is  a function that takes a component and returns a new component

