//Context: built into react.
//Allows you to create a context and 
//provide values that can be accessed 
//by any child component without 
//explicitly passing props.
import React, {createContext, useState} from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "Jon",
    age: 25
  })

  return (
   <MyContext.Provider value={user}>
    {children}
   </MyContext.Provider>
  )   
}