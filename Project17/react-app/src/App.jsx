// useContext() = react hook that allows you to share values between
// multiply levels of components wihtout passing props through each
// level

// provider component

// 1 import {createComponent} from 'react'
// 2 export const MyContext = createContext();
// 3 <MyContext.Provider value={value}>
// <Child/>
// </MyContext.Provider>

// consumer components
// 1 import React, { useContext } from 'react';
// import {My Context} from './ComponentA';
// 2. const value = useContext(MyContext);


import React from "react"
import ComponentA from "./ComponentA.jsx"


function App() {

  return(
    <ComponentA/>
  )
  
}

export default App
