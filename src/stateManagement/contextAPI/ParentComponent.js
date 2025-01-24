//import react, createContext, useContext useState
import React from "react";
// import { ParentComponent } from "../propDrilling/propDrilling/drilling";
import ChildComponent from "./ChildComponent";

// Parent component
//parent returns child and child recieves the data from provider in useContext
export const ParentComponent = () =>{
  return <ChildComponent/>
};