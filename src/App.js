// import logo from './logo.svg';
// import './App.css';

//        ES6
// const newVersion = (num1,num2) => num1 + num2
//   console.log(newVersion(50,100))

//        ES5
// const newversion = (num1,num2) => {
//   return  num1 + num2
// }
// console.log(newversion(50,10))

//     E56

// class human {
//   constructor() {
//     this.age = 25
//   }
//   printAge() {
//     console.log(this.age);
//   }
// }
// class person extends human {
//   constructor(){
//     super();
//     this.name = 'uday'
//   }
//   printName(){
//     console.log(this.name);
//   }
// }
// const persons = new person();
// persons.printName();
// persons.printAge();

//        ES7
//  class human {
//   age = 25
//   printAge = () => console.log(this.age);
//  }

//  class person extends human {
//   name = 'uday'
//   age = 25
//   printName = () => console.log(this.name);
//  }

//  const persons = new person();
//  persons.printName();
//  persons.printAge();

//  spread operator  in array

//  const set1 = [1,2,3,4,5]
//   const set2 = [...set1,6,7,8,9,10]
//   console.log(set2);

//       spread operator in objects

// const set1 = {
//   name: 'uday',
//   email: 'udayyadavaa11@gmail.com'
// }

// const set2 = {
//   ...set1,
//   age: 25
// }
// console.log(set2)

//   array destructuring

//  const values = [10,20,30];
//   const [a,b,c] = values
//   console.log(a,b,c);

//  object  destructuring

// const values = {
//   email: "udayadavaa11@gmail.com",
//   age: 25
//  }
//  console.log(values.email);

//       another method in easy ways

// const values ={
//   email: "udayyadava11@gmail.com",
//   age: 25
// }
// const {email,age} = values
// console.log(email,age);

//  rest operator in javascript

// const array = (...arr) => console.log(arr)
//  array(10,20,30,40,50,60,70);

// const array = (a,...arr) => console.log(arr)
//   array(10,20,30,40,50,60,70);

//   Arrays in javascript 3 ways can remove elemnt in array 1.)using pop,
//  const arr = [10,20,30,40,50]
//  arr.pop();
//  console.log(arr);

//  using push
// const arr = [10,20,30,40,50]
// arr.push(60);
// console.log(arr);

//   it removes first element in the array   2.)using shift
// const arr = [10,20,30,40,50]
// arr.shift();
// console.log(arr);

//  using splice to remove partivular element  3.)using splice
// const arr = [10,20,30,40,50]
// const index = arr.indexOf(40)
// arr.splice(index,2);
// console.log(arr)

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//   PET BASHEERABAD RTO OFFICE,KOMPALLY,NANDUMURI ENCLAVE RTO OFFICE
//     class level component   rccSTATE MANAGEMENT. 2.) LIFE CYCLE FEATURE.
//   IN CLASS BASED COMPONENTS THERE ARE TWO BEST FEATURES  1.) STATE MANAGEMENT. 2.) LIFE CYCLE FEATURE.
//   THIS CLASS BASED COMPONENTS LAST USED IN 2018 , AFTER 2018 REACT.JS WAS UPDATED WITH 16.8 VERSION., IN THIS VERSION WE HAVE REACT  HOOKS
// import React, { Component } from 'react'

// export default class App extends Component {
//   state ={
//     name: 'to all'
//   }
//   render() {
//     return (
//       <div>
//         <h2>hello {this.state.name} </h2>
//       </div>
//     )
//   }
// }

//    state means , initializing multiple variables and values , props means passing data from parent ot child.
// import React, { Component } from 'react'
// import Display from "./Display"

// export default class App extends Component {
//   state = {
//     name: "welcome to kalki 2898 AD 2"
//   }
//   render() {
//     return (
//       <div>
//         <Display name= {this.state.name} />
//       </div>
//     )
//   }
// }

//   functional level component  rac,  in most of the cases wec can use functional level component , beacuse of using react hooks, and it will be available in this functional level component s only ...
// import React,{useState} from 'react'

// const App = () => {
//   const [name,setName] = useState(" new world 2898AD.")
//   return (
//     <div>
//       <h2>welcome to {name} </h2>
//     </div>
//   )
// }

// export default App

//   use state on hands   rac

// import React,{useState} from 'react'

// const App = () => {
//   const [name,setName] = useState("project underscore 11@")
//   return (
//     <div>
//       <h1>{name} </h1>
//       <button onClick={() => setName("dream project 11@ in soon!.") }>change</button>
//     </div>
//   )
// }

// export default App

//   using count in useState
// import React,{useState} from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count+1) } >change</button>

//     </div>
//   )
// }
// export default App

//    useffect() , return statement taruvata oka function ni execute cheyali anukunte useEffect() use cheyavachu, and useEffect is a life cycle hook.
// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)
//   useEffect(() => console.log(count),[count] )
//   return (
//     <div>
//       <h1>clicked {count}</h1>
//       <button onClick={() => setCount(count+1) } >change</button>

//     </div>
//   )
// }
// export default App

// onChange   rac
// import React,{useState} from 'react'

// const App = () => {
//   const [user,setUser] = useState("")
//   const handler = e => {
//     setUser(e.target.value)
//   }
//   return (
//     <div>
//       <input type='text' placeholder='username' value={user} name={"user"} onChange={handler} />
//       <br/>
//       {user}
//     </div>
//   )
// }
// export default App

// useState
// destructuring
// onChange

// onSubmit
// import React, { useState } from 'react'

// const App = () => {
//   // useState
//   const [data, setData] = useState({
//     username: '',
//     password: ''
//   })
//   // destructuring
//   const { username, password } = data;
//   // onChange
//   const onChange = e => {
//     setData({ ...data, [e.target.name]: [e.target.value] })
//   }
//  const submitHandler = e => {
//   e.preventDefault();
//   console.log(data)
//  }

//   return (
//     <div>
//       <form onSubmit={submitHandler} >
//         <input type='text' placeholder='username' name='username' value={username} onChange={onChange} />
//         <input type='password' placeholder='password' name='password' value={password} onChange={onChange} />
//         <input type='submit' name='submit' />
//       </form>
//     </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const [data,setData] = useState({
//     username: '',
//     password: ''
//   })
//   const{username,password} = data;
//   const onChange = e => {
//     setData({...data,[e.target.name]:[e.target.value]})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(data)
//   }

//   return (
//     <div>
//       <center>
//       <form onSubmit={submitHandler}>
//         <input type='text' placeholder='username' name='username' value={username} onChange={onChange} />
//         <input type='password' placeholder='password' name='password' value={password} onChange={onChange} />
//         <input type='submit' name='submit' />
//       </form>
//       </center>
//     </div>
//   )
// }

// export default App

//  rac
// import React from 'react'

// const App = () => {
//   const arr = [
//     {
//       id: 1,
//       title: "zimbon"
//     },
//     {
//       id:2,
//       title: "cumbon"
//     },
//     {
//       id:3,
//       title: "pumbon"
//     },
//     {
//       id:4,
//       title: "lumbon"
//     }
//   ]
//   return (
//     <div>
//       {
//         arr.map((value) => <li key={value.id}> {value.title} </li> )
//       }

//     </div>
//   )
// }

// export default App

//  map   rac
// import React from 'react'

// const App = () => {
//   const arr = [
//     {
//       id: 0,
//       title: "kalki"
//     },
//     {
//       id:1,
//       title: "kalki2"
//     },
//     {
//       id:2,
//       title: "dragon"
//     },
//     {
//       id:3,
//       title: "tiger"
//     }
//   ]
//   return (
//     <div>
//       <center>
//       {
//         arr.map((value,index) => <li key={index}> {value.title} </li> )
//       }
//       </center>
//     </div>
//   )
// }

// export default App

//  filter   rac
// import React from 'react'

// const App = () => {
//   const names = ['hallem','saleem','hussy','hero','johny'];
//   const filtered = names.filter(name => name.includes('h') && name.indexOf('h') === 0);

//   return (
//     <div>
//       {
//         filtered.map(item => <li key={item}> {item} </li>)
//       }
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const names = ['realme','pranght','red','villian','rose','roulet','pramodh','vikram'];
//   const filtered = names.filter(e =>e.includes('r') && e.indexOf('r') === 0);
//   return (
//     <div>
//       {
//         filtered.map(e => <li key={e}>{e}</li> )
//       }
//     </div>
//   )
// }

// export default App
//  filtering in React

// import React from 'react'

// const App = () => {
//   const numbers = [10,20,30,40,50,60,70,80,90];
//   const filtered = numbers.filter(number => number > 70);
//   return (
//     <div>
//       {
//         filtered.map(item => <li key={item}> {item} </li> )
//       }
//     </div>
//   )
// }

// export default App
//   rac
// import React from 'react'

// const App = () => {
//   const names = ['cheyango','navalod','hshsjsj','cherit','praga','chitt','nandc'];
//   const filtered = names.filter(name => name.includes('c') && name.indexOf('c') === 0 );
//   return (
//     <div>
//       {
//         filtered.map(name => <li key={name}> {name} </li>)
//       }
//     </div>
//   )
// }

// export default App

//  export vs export default

// import React from 'react'
// import {Header} from './components/Header'
// import Home from './components/Home'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   )
// }

// export default App

//   login form with ,,,
// usestate -- manam tesukune user inputs anave multiple varialbes lo store chesukovtaniki useStates vadutamu...........

// import React,{useState} from 'react'

// const App = () => {
//   const [data,setData] = useState({
//     username : '',
//     password : ''
//   })
//   const {username,password} = data
//   const onChange = e => {
//     setData({...data,[e.target.name]:[e.target.value]})
//   }
//   const submitHandler = e => {
//     //  edina default ga actions unte matram we use preventDefault();
//     e.preventDefault();
//     console.log(data)
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//       < input type='text' placeholder='username' name='username' value={username} onChange={onChange} />  <br/>
//       < input type='password' placeholder='password' name='password' value={password} onChange={onChange} /><br/>
//       <input type='submit' name='submit' />
//       </form>
//       </center>
//     </div>
//   )
// }

// export default App

//  sign up form
// import React,{useState} from 'react'

// const App = () => {
//   const [data,setData] = useState({
//     username : '',
//     email : '',
//     password : '',
//     confirmPassword : ''
//   })
//   const {username,email,password,confirmPassword} = data;
//   const onChange = e => {
//     setData({...data,[e.target.name]: e.target.value});
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     if(username.length <=5){
//       alert('ussrname name must b atleast 5 characters')
//     }
//    else if(password !== confirmPassword){
//       alert('password doesnt match to confirm password, try again !')
//     }
//     else{
//     console.log(data);

//     }

//   }
//   return (
//     <div>
//       <center>
//         <form autoComplete='off' onSubmit={submitHandler}>
//           <input type='text' placeholder='username' name='username' value={username} onChange={onChange} /> <br/>
//           <input type='email' placeholder='email' name='email' value={email} onChange={onChange}   /> <br/>
//           <input type='password' placeholder='password' name='password' value={password} onChange={onChange}  /> <br/>
//           <input type='password' placeholder='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={onChange}  /> <br/>
//           {password !== confirmPassword ? <p>password doesnt match !</p> : null}
//           <input type='submit' name='submit' />
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App

// calculator
//  import React,{useState} from 'react'

//  const App = () => {
//   const [input,setInput] = useState ('');
//   const [result,setResult] = useState(0);
// const onChange = e => {
//   setInput(e.target.value)
// }
//    return (
//      <div>
//       <center>
//        <input type='text' name='input' value={input} onChange={(e) => setInput(e.target.value) } /> <br/>
//        <button onClick={() => setResult(eval(input))} > Result </button>
//        <h4> Result is : {result} </h4>

//        <button onClick={() => setInput(input + '1')} >1</button>
//        <button onClick={() => setInput(input + '2')} >2</button>
//        <button onClick={() => setInput(input + '3')} >3</button>
//        <button onClick={() => setInput(input + '4')} >4</button>
//        <button onClick={() => setInput(input + '5')} >5</button> <br/>

//        <button onClick={() => setInput(input + '6')} >6</button>
//        <button onClick={() => setInput(input + '6')} >7</button>
//        <button onClick={() => setInput(input + '8')} >8</button>
//        <button onClick={() => setInput(input + '9')} >9</button>
//        <button onClick={() => setInput(input + '0')} >0</button> <br/>

//        <button onClick={() => setInput(input + '+')} >+</button>
//        <button onClick={() => setInput(input + '-')} >-</button>
//        <button onClick={() => setInput(input + '*')} >*</button>
//        <button onClick={() => setInput(input + '/')} >/</button>
//        <button onClick={() => setInput('')} >clr</button> <br/>
//        </center>
//      </div>
//    )
//  }
//  export default App

// import React, { useState } from 'react';

// const App = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(0);

//   const onChange = (value) => setInput(input + value);
//   const calculate = () => setResult(eval(input));

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /><br />
//       <button onClick={calculate}>Result</button>
//       <h4>Result is: {result}</h4>
//           {
//             [1,2,3,4,5,6,7,8,9,0].map((num) => (
//               <button key={num} onClick={() => onChange(num)}> {num} </button>
//             ))
//           }<br />
//       {['+', '-', '*', '/'].map((op) => (
//         <button key={op} onClick={() => onChange(op)}>{op}</button>
//       ))}
//       <button onClick={() => setInput('')}>clr</button>
//     </div>
//   );
// };

// export default App;

//   getting api data using fetch api
// import React, {useEffect,useState} from 'react'

//  const App = () => {
//   const [data,setData] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos').then(
//       Response => Response.json()
//     )
//     .then(json => setData(json) )
//   },[])
//   return (
//     <div>
//       {
//         data.map(item => <li key={item.id}>{item.title}</li>)
//       }
//     </div>
//   )
// }
// export default App
//   useEffect can take two arguments , one is arrow function and another one is dependencies.
// import React ,{useState,useEffect} from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos').then(
//      res => res.json()
//     )
//     .then(json => setData(json))
//   },[])

//   return (
//     <div>
//       {
//         data.map(item => <li key={item.id}> {item.title} </li>
//         )
//       }
//     </div>
//   )
// }

// export default App
//   axios
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => setData(res.data));
//   }, []);
//   return (
//     <div>
//       {data.map((item) => (
//         <li key={item.id}> {item.title} </li>
//         ))
//         }
//     </div>
//   );
// };

// export default App;

// import React,{useState} from 'react'
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState ({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })
//   const {username,email,password,confirmPassword} = data;
//   const onChange = e => {
//     setData({...data,[e.target.name]:e.target.value})
//   };
//   const submitHandler = e => {
//     e.preventDefault();
//     axios.post('https://reactprojectnew11-default-rtdb.firebaseio.com/data.json',
//       data).then(() => alert('submitted successfullly'));
//   }
//   return (
//     <div>
//       <center>
//         <form autoComplete='off' onSubmit={submitHandler} >
//           <input type='text' placeholder='username' name='username' value={username} onChange={onChange}  /> <br/>
//           <input type='email' placeholder='email' name='email' value={email} onChange={onChange}  /> <br/>
//           <input type='password' placeholder='password' name='password' value={password} onChange={onChange}  /> <br/>
//           <input type='password' placeholder='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={onChange}  /> <br/>
//           <input type='submit' name='sumbit' /> <br/>
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App

// import React from "react";
// import Navbar from "./Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Home} from "./components/Home";
// import About from "./components/About";
// import Dashboard from "./components/Dashboard";
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/dashboard/:name" element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// reducers : reducers is for managing store values of the store.

//   use context hook in react.js, It allows passing data to child elements without using redux.
// (1). it is a statemanagement libraray.
// (2). it is used to manage data and state.
// (3). it only re-renders the updated components.
// (4). perfect for large applications.

// import React from 'react'
// import ComponentC  from './ComponentC'

// (1). use Context is a hook, it is used to share  data.
// (2). it re-renders all components whenever there is an update in the providers value prop.
// (3). recommended for small applications.
// what is the use of react hooks : hoooks are functions used to manage both react state and lifecycle features from function components.
//  hooks doesn't inside classes.

// export const userContext = React.createContext();

// const App = () => {
//   return (
//     <div>
//       <userContext.Provider value={'Uday Baliboina'}>
//       < ComponentC />
//       </userContext.Provider>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import ComponentC from './ComponentC'

// export const userContext = React.createContext(); // Creates the context (no data passed yet)

// const App = () => {
//   return (
//     <div>
//       <userContext.Provider value={'Project in muber of the words in the certain with bash includes'} >
//       <ComponentC />
//       </userContext.Provider>
//     </div>
//   )
// }

// export default App

//  redux is an open source  javascript library and used to manage state values globally

// import React from 'react'
// import { connect } from 'react-redux'
// import Inc from './Inc'

// const App = ({count}) => {
//   return (
//     <div>
//       <center>
//         count from App js component : {count} <br /><hr />
//         <Inc />
//       </center>
//     </div>
//   )
// }

// const mapStateTOProps = (state) => {
//   count: state
// }
// // export default App

//   bootstrap

// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const App = () => {
//   return (
//     <div
//     className="modal show"
//     style={{ display: 'block', position: 'initial' }}
//   >
//     <Modal.Dialog>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <p>Modal body text goes here.</p>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary">Close</Button>
//         <Button variant="primary">Save changes</Button>
//       </Modal.Footer>
//     </Modal.Dialog>
//   </div>
//   )
// }

// export default App

// import React from 'react'
// import space from '../src/public/assets/space.jpg'

// const App = () => {
//   return (
//     <div>
//       <center>
//         <img src={space} className='mt-20' alt='thumbnail' height="350" width="450" /> <br /> <br />
//         <a href={space} className='btn btn-primary' download="space"> click here to download </a>
//       </center>
//     </div>
//   )
// }

// export default App

//  sending mails in reactjs using mailjs

// import React, { useState,useRef } from "react";
// import emailjs from 'emailjs-com'

// const App = () => {
//   const [data, setData] = useState({
//     from_name: "",
//     to_name: "",
//     message: "",
//   });
//   const form = useRef();

//   const { from_name, to_name, message } = data;
//   const onChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_ps8zhb9", "template_t75bn2c", form.current, "nQ9AylHn0tgpsZ5G4")
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         });
//         form.current.reset();
//   };

//   return (
//     <div>
//       <center>
//         <form ref={form} onSubmit={submitHandler} autoComplete="off">
//           <label>From Name:</label> <br />
//           <input
//             type="text"
//             placeholder="fromName"
//             name="from_name"
//             value={from_name}
//             onChange={onChange}
//           />{" "}
//           <br />
//           <label>To Name:</label> <br />
//           <input
//             type="text"
//             placeholder="toName"
//             name="to_name"
//             value={to_name}
//             onChange={onChange}
//           />{" "}
//           <br />
//           <label>Message:</label> <br />
//           <input
//             type="text"
//             placeholder="message"
//             name="message"
//             value={message}
//             onChange={onChange}
//           />
//           <br /> <br />
//           <input type="submit" name="submit" />
//         </form>
//       </center>
//     </div>
//   );
// };

// export default App;

//  sending mails to all at once using mailjs
// import React, { useState, useRef } from "react";
// import emailjs from "emailjs-com";

// const App = () => {
//   const [data, setData] = useState({
//     employee_name: "",
//     leave_dates: "",
//     leave_reason: "",
//   });
//   const form = useRef();

//   const { employee_name, leave_dates, leave_reason } = data;

//   const onChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const recipients = [
//       "baliboinauday33@gmail.com",
//       "udaybaliboina@gmail.com",
//       "baliboinayadavuday@gmail.com",
//       "prakashkumar4999@gmail.com",
//     ];

//     const emailPromises = recipients.map((email) => {
//       const templateParams = {
//         to_email: email,
//         to_name: "Recipient",
//         employee_name,
//         leave_dates,
//         leave_reason,
//       };

//       return emailjs.send(
//         "service_ps8zhb9",
//         "template_txhu1q8",
//         templateParams,
//         "Y3ibb1BX9738BxTes"
//       );
//     });

//     Promise.all(emailPromises)
//       .then(() => {
//         console.log("All emails sent successfully!");
//       })
//       .catch((error) => {
//         console.log("Failed to send some emails:", error.text);
//       });

//     form.current.reset();
//   };

//   return (
//     <div>
//       <center>
//         <form ref={form} onSubmit={submitHandler} autoComplete="off">
//           <label>Employee Name:</label> <br />
//           <input
//             type="text"
//             name="employee_name"
//             placeholder="Uday yadav Baliboina"
//             value={employee_name}
//             onChange={onChange}
//             required
//           />
//           <br />
//           <label>Leave Dates:</label> <br />
//           <input
//             type="text"
//             name="leave_dates"
//             placeholder="04/10/2024-05/10/2024"
//             value={leave_dates}
//             onChange={onChange}
//             required
//           />
//           <br />
//           <label>Leave Reasons:</label> <br />
//           <textarea
//             name="leave_reason"
//             placeholder="I hope this message finds you well.I am writing to formally request leave from [04/10/2024] to [05/10/2024] to attend the Janda Festival, which is a significant cultural event held annually in two locations: Mysuru in Karnataka and Gudur in Nellore district of Andhra Pradesh.The Janda Festival is a major celebration that attracts a large number of participants and holds special cultural and traditional significance. It is an opportunity for me to participate in this unique festival and engage with important traditions that are deeply rooted in our culture.Given the importance of this event and its exclusive occurrence in these specific locations, I kindly request your approval for leave during these dates. I have ensured that my current projects and responsibilities will be managed effectively in my absence, and I am more than willing to assist in any preparations to ensure a smooth transition during this period.Thank you for considering my request. I look forward to your positive response."
//             value={leave_reason}
//             onChange={onChange}
//             required
//           />
//           <br /> <br />
//           <button type="submit">Submit Leave Request</button>
//         </form>
//       </center>
//     </div>
//   );
// };

// export default App;

//  search filter in react
// import React, { useState } from 'react';
// import data from './city.json';

// const App = () => {
//   const [search, setSearch] = useState('');

//   return (
//     <div>
//       <center>
//         <h4>Enter your city:</h4>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <br />
//         {data
//           .filter((city) => city.name.toLowerCase().includes(search.toLowerCase())) // Filter cities based on search input
//           .map((city) => {
//             return (
//               <div key={city.id}>
//                 {city.name}
//               </div>
//             );
//           })}
//       </center>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import data from "./city.json";

// const App = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <div>
//       <center>
//         <h1>Enter Your City Names: </h1>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />{" "}
//         <br />
//         {data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map((city) => (
//           // implicity return means:   Here, since the arrow function is using parentheses (), the div is implicitly returned by the map() callback. No return keyword is needed.
//           //  Explicit return: When you use curly braces {} in the arrow function, you need to explicitly write the return keyword inside the block.
//          <div key={city.id}>{city.name}</div>
//         ))}
//       </center>
//     </div>
//   );
// };

// export default App;

//   using redux

// import React from 'react'
// import {connect} from 'react-redux'
// import { DecAction, IncAction } from './Action'

// const App = ({state_variable,IncAction,DecAction}) => {
//   return (
//     <div>
//       <center>
//         <h1>{state_variable} </h1> <br />
//         <button onClick={() =>  IncAction(5)}>INCREMENT</button>
//         <button onClick={DecAction}>DECREMENT</button>
//       </center>
//       </div>
//   )
// }

// const mapStateToProps  = state => ({
//   state_variable : state
// })

// export default connect(mapStateToProps,{IncAction,DecAction}) (App)

//  useRef hooks,
// import React,{useRef,useEffect} from 'react'

// const App = () => {
//   const data = useRef(null)
//   const onsubmitHandler = e => {
//     e.preventDefault();
//     console.log(data.current.value);
//   }
//   useEffect(() => {
//     data.current.focus();
//   },[])
//   return (
//     <div>
//       <center>
//         <form onSubmit={onsubmitHandler} >
//         <input ref={data} type='text' placeholder='enter the details' /> <br />  <br />
//         <input type='submit' />
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App

//  useReducer()
//  if u r familer abiut redux, u already know how this works.
//  redux --use to store state value in redux-store
//  useReducer -> use to store state values to local const variables.
//  reducer means, it will return modified state values to the store based on user action dispatch.

// import React, { useReducer } from 'react';

// const initialState = 10; // Keep the initial state as a number

// function reducer(state, action) {
//   const { type, payload = 1 } = action;  // Destructure type and default payload to 1
//   switch (type) {
//     case 'INCREMENT':
//       return state + payload;  // Increment state by the payload (default is 1)
//     case 'DECREMENT':
//       return state - 1;  // Decrement state by 1
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);  // Numeric state
//   return (
//     <div>
//       <center>
//         count: {state}  {/* Directly use state since it's a number */}
//         <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//         <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       </center>
//     </div>
//   );
// }

// export default App;

// import React,{ useReducer } from 'react'

// const initialState = {count:10}

// function reducer(state,action){
//   const {type,payload = 10} = action
//   switch(action.type){
//     case 'increment' :
//     return {count: state.count+payload };
//     case 'decrement' :
//       return {count: state.count-1};
//       default:
//         throw new Error('unknown action type');
//   }
// }

// const App = () => {
//   const [state,dispatch] = useReducer(reducer,initialState);
//   return (
//     <div>
//       <center>
//         count: {state.count}
//         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//         <button onClick={() => dispatch({type: 'increment'})} >+</button>
//       </center>
//     </div>
//   )
// }

// export default App

// import React, { createContext, useState } from 'react';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';

// export const store = createContext();

// const App = () => {
//   const [data, setData] = useState({ A: 10, B: 20 }); // Single state for both components

//   return (
//     <div>
//       <store.Provider value={[data, setData]}>
//         <center>
//           <ComponentA />
//           <ComponentB />
//           <button onClick={() => setData({ ...data, A: data.A - 1 })}>DECREMENT A</button> <br/><hr/>
//           <button onClick={() => setData({ ...data, A: data.A + 1 })}>INCREMENT A</button> <br/><hr/>
//           <button onClick={() => setData({ ...data, B: data.B - 1 })}>DECREMENT B</button> <br/><hr/>
//           <button onClick={() => setData({ ...data, B: data.B + 1 })}>INCREMENT B</button>
//         </center>
//       </store.Provider>
//     </div>
//   );
// }

// export default App;

// The reason why your code is working without importing { useContext } is that you are not using the useContext() hook in your App component itself. Instead, you're providing the context via store.Provider, and consuming it in ComponentA and ComponentB.
// In App: You are not directly consuming the context in the App component. Instead, you are only providing the context to its children (ComponentA, ComponentB) using store.Provider. Therefore, you don’t need useContext in App.
// import React,{createContext, useState} from 'react'
// import ComponentA  from './ComponentA'
// import ComponentB  from './ComponentB'

// export const store = createContext()

// const App = () => {
//   const [data,setData] = useState(11);
//   return (
//     <div>
//       <store.Provider value={[data,setData]}>
//       <center>
//         <ComponentA />
//         <ComponentB />
//         <button onClick={() => setData(data-1) } >DECREMENT</button> <br/> <hr/>
//         <button onClick={() => setData(data+1)} >INCREMENT</button>
//       </center>
//       </store.Provider>
//     </div>
//   )
// }

// export default App

// import React, { createContext, useState, useContext } from 'react';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';

// // Create the context
// export const store = createContext();

// // New Component to consume context
// const ConsumeContextInApp = () => {
//   const [data] = useContext(store);  // Consume context here
//   return <h1>Context in App: {data}</h1>;
// }

// const App = () => {
//   // Initialize state
//   const [data, setData] = useState(11);

//   return (
//     <div>
//       {/* Provide context to the entire app */}
//       <store.Provider value={[data, setData]}>
//         <center>
//           {/* Consume context in this child component */}
//           <ConsumeContextInApp />

//           {/* Other components */}
//           <ComponentA />
//           <ComponentB />

//           {/* Buttons to modify the context */}
//           <button onClick={() => setData(data - 1)}>DECREMENT</button> <br /> <hr />
//           <button onClick={() => setData(data + 1)}>INCREMENT</button>
//         </center>
//       </store.Provider>
//     </div>
//   );
// }

// export default App;

//  second example
// import React,{createContext, useState} from 'react'
// import Display from './Display'
// import Count from './Count';

// This is the React Context 'store'
// You’ve already imported createContext() at the top from React, so you can use it directly without needing to reference React.
// export const store = createContext()

// const App = () => {
//   const [data,setData] = useState([
//     {
//       brandName: 'redmi'
//     },
//     {
//       brandName: 'nokia'
//     },
//     {
//       brandName: 'usolo'
//     }
//   ]);
//   return (
//     <div>
//       <store.Provider value={[data,setData]}>
//       <center>
//         <Count />
//         <Display />
//       </center>
//       </store.Provider>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import ComponentC from './ComponentC'

// export const userContext = React.createContext(); // Creates the context (no data passed yet)

// const App = () => {
//   return (
//     <div>
//       <userContext.Provider value={'Project in muber of the words in the certain with bash includes'} >
//       <ComponentC />
//       </userContext.Provider>
//     </div>
//   )
// }

// export default App

// higher order component (hoc) ==>> higher order component is  a function that takes a component and returns a new component
// HOC is an advanced technique in the react for re-using component's logic .
//  its a pure function with zero side effects and doesnt modify the input component.

// import React from 'react'
// import HOC from './HOC'

// const App = (props) => {
//   return (
//     <div>
//       <center>
//         <h1> Welcome To This App {props.name} </h1>
//       </center>
//     </div>
//   )
// }

// export default  HOC(App)  // here we are wrapping the component with HOC. and if you want pass some values through props.

// const fact = (n) => {
//   let answer = 1;
//   for(var i = n ; i >= 1 ; i-- ){
//     answer = answer * i;
//   }
//   console.log('factorial function calling');
//   return answer;
// }

// Step-by-Step Process:
// We want to calculate 5! = 5 * 4 * 3 * 2 * 1 = 120.
// Initially, answer = 1.
// The loop starts with i = 5:
// answer = answer * 5 = 1 * 5 = 5
// Now i = 4:
// answer = answer * 4 = 5 * 4 = 20
// Now i = 3:
// answer = answer * 3 = 20 * 3 = 60
// Now i = 2:
// answer = answer * 2 = 60 * 2 = 120
// Now i = 1:
// answer = answer * 1 = 120 * 1 = 120
// The loop stops because i reaches 0.

// So, for n = 5, the result answer becomes 120, which is the factorial of 5.

// The product of all positive integers from 1 to n is called the factorial of n, and is denoted as n! For example, 3! is the product of all positive integers from 1 to 3, which is 3 × 2 × 1 = 6

// useMemo hooks
//   its same as like useEffect(), but the different is
//     i.) useEffect() will run after render of the component.
//     ii.) useMemo() will run during render of the component.,,,,
//    ** useMemo() will not run for every re-render happens.It will run during the first render and when its dependency value changes.**

// import React from 'react'

// const App = () => {
//   const [counter,setCounter] = React.useState(0);
//   const [number,setNumber] = React.useState(5);
//   // const Factorial = fact(number);
//   const Factorial  = React.useMemo(() => fact(number),[number] )

//  the problem here is , its already calculated , but it's calculating again and again, for this problem  to retify to use useMemo hook.
//  naku avasarm lekpoiin aka value ni already calculate ans store chesukuna kani, we are trying to calaulate again and again, this is the problem, for this problem  to retify to use useMemo hook.
//  mana vallue anyadi calculate aiinaka,again again call avakudadu.

//   return (
//     <div>
//       <center>
//         factorial : {Factorial} <br/>
//         <button onClick={() =>setCounter(counter+1) } >counter increment </button> <br/>
//         <button onClick={() =>setCounter(counter+1) } >counter increment </button> <br/>
//         counter: {counter}
//       </center>
//     </div>
//   )
// }

// const fact = (n) => {
//  let  answer = 1;
//   for(var i=n; i>=1 ; i--) {
//     answer = answer * i;
//   }
//   console.log('factorial function calling');
//   return answer;
// }

// export default App

//   difference between useEffect() and useMemo()
//  use effect will be called after rendering, usememo will be called during the rendering itself it called.

// import React, { useEffect, useMemo, useState } from 'react'

// const App = () => {

//   const [effect,setEffect] = useState(0)
//   const [memo,setMemo] = useState(0)

//  useEffect(()=>{
//   console.log('from use effect    :' + effect);
//  },[effect]);
//   if we give dependency array empty, it will call only once, after the rendering,
//   useEffect does not return anything useful; it’s meant for running code after rendering.

//  useMemo(() => {
//   console.log('from use memo:' + memo);
//   return memo;
//  },[memo]);  // it will ecexute only once, during the rendering,

//   return (
//     <div>
//       <center>
//         <p> Effect Count: {effect}</p>
//         <p> Memo Count: {memo}</p>
//         <button onClick={() =>setEffect(effect + 1)} > use effect increment </button> <br />
//         <button onClick={() =>setMemo(memo + 1)} > use memo increment </button>
//         <test count = {count} />
//       </center>
//     </div>
//   )
// }

// export default App





//  useEffect() ::  use useEffect()  when you need to perfrom side effects in your components,like
//  1. Fetching data (making an API call)
//  2.  Setting up subscriptions (e.g., WebSocket connections)
//  3.  Manipulating the DOM directly (though this is less common in React)
//  4.  Logging information (for debugging)
//  5.  Updating local storage or cookies
//  6.  Timers (e.g., setTimeout or setInterval)

//  example 
// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [data, setData] = useState(null);

//   // Fetch data from a real API
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       {data ? ( <pre>{JSON.stringify(data, null, 2)}</pre> ) : ( 'Loading...' )}
//     </div>
//   );
// };

// export default App;

// Use useMemo when you want to optimize performance by memoizing (caching) the result of an expensive calculation. This hook ensures that the calculation is only recomputed when its dependencies change, avoiding unnecessary recalculations on every render.

// Key Characteristics of useMemo:
// It runs during rendering, but only when its dependencies change.
// It returns a memoized (cached) value.
// It’s meant for expensive pure functions (functions that return a value without side effects) to avoid recalculating on every render.


// import React,{ useState, useMemo }  from "react"

// // Example of an expensive computation function
// const expensiveComputation = (num) => {
//   console.log('Running expensive computation...');
//   return num * 5;  // In real scenarios, this could be much more complex
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   // Memoize the result of the expensive computation
//   const computedValue = useMemo(() => expensiveComputation(count), [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Computed Value: {computedValue}</p>
//       <button onClick={() => setCount(count + 1)}>INCREMENT</button>
//     </div>
//   );
// };

// export default App



//  statefull and stateless
//  statefull :: performing an actions, like declaring a state variable, and performing tasks or actions, and e performance ani oke component lo jarigite we called it as statefull components,
//  stateless :: means its like a plain html, and if u want sending props,

// import React, { useState,useMemo,useEffect } from "react";
// import Test from "./Test";

// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() =>{
//     console.log('this is from useEffect' + count)
//   },[count])
//   useMemo(() => {
//     console.log("this is from useMemo" + count);
//   }, [count]);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>INCREMENT</button>
//       <Test count={count} />
//     </div>
//   );
// };

// export default App;

//   controlled and unControlled components
//   controlled components :: element data can be controlled by the parent component through callbacks like onChange().
//   unControlled components :: element data can be controlled by DOM itself.

import React from 'react'
import { Controlled } from './Controlled'

const App = () => {
  return (
    <div>
      <center>
        <Controlled /> controlled
        <div></div>
      </center>
    </div>
  )
}

export default App

//  lazy loading :: used to increase the loading speed of an application with dynamic importing concept.
//  firstly we have t understand about bundling :: bundling means , suppose if we have more than one single file, then we convert it one single file.means, bundle chestam.
//   with the bundling concept we can convert it into single file.

//  bundling means:: it is the process of follwing imported files and merging into a single file.


