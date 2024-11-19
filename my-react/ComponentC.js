// import React from 'react'
// import { userContext } from './App'

// const ComponentC = () => {
//   return (
//     <div>
//         <userContext.Consumer>
//             {value => <h1>{value}</h1> }
//         </userContext.Consumer>
//     </div>
//   )
// }

// export default ComponentC

//  useContext() is the hook that allows child components to access the data provided by the Provider.
//  It can only work if there is a Provider somewhere higher up in the component tree that is supplying the data.

//  or u can write like this below in more consise way
import React, { useContext } from "react";
import { userContext } from "./App";

const ComponentC = () => {
  const value = useContext(userContext); // Access the data from userContext
  return <div>{value}</div>;
};
export default ComponentC;

//   redux flow means :: its all about managing state values in multiple components at a time, using redux store.
//   redux ::  etubanti props help lekunda manm state values ni  direct ga use chesukovachu..
//  store lo una values ni provider dwara mana components lo use chesukovachu, aa store lo component gani variable gani update cheyadam ,remove cheyadam atuvanti activities emina chesam anukondi, first adi action ni trigger chestundi , action disptch aiina ventane aa particlar operation anayadi direct ga reducers daggariki move avutundi, reducers analyise chesi,(with payload ) store ki update chestundi.
