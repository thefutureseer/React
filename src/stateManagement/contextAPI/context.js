//Context: built into react.
//Allows you to create a context and 
//provide values that can be accessed 
//by any child component without 
//explicitly passing props.

//import react, createContext, useContext useState
import React, {createContext, useContext} from "react";
// import { ParentComponent } from "../propDrilling/propDrilling/drilling";

//create context before/outside component
export const myContextAPI = createContext();
 
// const App = () => {
//   //1) set up state for contextAPI
// const [user, setUser] = useState({name:"user name", age: 20});

// return (
//     //wrap the parent in Provider
//   <myContextAPI.Provider value={user}>
//     <ParentComponent></ParentComponent>
//   </myContextAPI.Provider>
// );  
// };


//2) Parent component
//parent returns child and child recieves the data from provider in useContext
export const ParentComponent = () =>{return <ChildComponent></ChildComponent>}

//3) Child component
const ChildComponent = () => {
    // Consume the context value
    //data for specified child
    const user = useContext(myContextAPI);

  return (
    <div> 
        <p>Hello I'm {user.name},</p>
        <p>age: {user.age},</p>
         and I like to count!
    </div>
  )
};