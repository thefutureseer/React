// import React, {useReducer} from "react";
import actionTypes from "./action";

//1. define intitial state
export const initialState = { count: 222 };

//2. define reducer function: takes current state/action returns updated state
const counterSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: 
      return {count: state.count + 1};
    case actionTypes.DECREMENT: return {count: state.count - 1};
    case actionTypes.SET: return {count: action.payload};
    case actionTypes.RESET: return initialState;
    default:
      throw new Error(`Unsupported action ${action.type}`)
  }
};
export default counterSlice;